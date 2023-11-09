import React, { useEffect, useState } from 'react';
import FormularioRecoleccion from '../../components/FormularioRecoleccion';
import FormularioAsignacion from '../../components/FormularioAsignacion';
import calcularDistancia from '../../components/Distances';
import {
  URL_CORRALONES_LISTA,
  URL_REGISTRO_SINIESTRO_COMPLETO,
} from '../../endpoints';
import SweetAlertToast from '../../components/SweetAlertToast';
import { helpHttpAsync } from '../../helpers/helpHttpAsync';
import FormularioVehiculos from '../../components/FormularioVehiculos';

const FormularioPagePrivate = () => {
  const [coordenadaInicio, setCoordenadaInicio] = useState(null);
  const [coordenadasFin, setCoordenadasFin] = useState(null);
  const [distancias, setDistancias] = useState(null);
  const [datosFormularioRecoleccion, setDatosFormularioRecoleccion] =
    useState(null);
  const [datosFormularioVehiculo, setDatosFormularioVehiculo] = useState(null);
  const [datosFormularioAsignacion, setDatosFormularioAsignacion] =
    useState(null);
  const [gruaSeleccionada, setGruaSeleccionada] = useState(null);

  useEffect(() => {
    const getCorralones = async () => {
      try {
        const response = await helpHttpAsync().get(URL_CORRALONES_LISTA);
        console.log(response);
        setCoordenadasFin(response.corralones);
      } catch (error) {
        SweetAlertToast('error', '¡Ocurrió error al obtener corralones!');
      }
    };

    getCorralones();
  }, []);

  useEffect(() => {
    if (coordenadasFin && coordenadaInicio) {
      const calcularDistanciasAsincrono = async () => {
        try {
          const promesasDistancias = coordenadasFin.map((coordenadaFin) =>
            calcularDistancia(coordenadaInicio, coordenadaFin)
          );

          const distanciasCalculadas = await Promise.all(promesasDistancias);

          // Filtrar las distancias que no son 0.0
          const distanciasFiltradas = distanciasCalculadas.filter(
            (distancia) => distancia.distanciaKm !== 0.0
          );

          // console.log(distanciasFiltradas);
          // Acomodar las distancias en un nuevo array
          const nuevasDistancias = distanciasFiltradas.map((distancia) => ({
            distanciaKm: distancia.distanciaKm,
            lat: distancia.destino.lat,
            lng: distancia.destino.lng,
            tiempo: distancia.tiempoEstimado,
          }));

          const nuevasDistanciasOrdenadas = nuevasDistancias
            .slice()
            .sort((a, b) => a.distanciaKm - b.distanciaKm);

          const arrayCombinado = nuevasDistanciasOrdenadas
            .map(({ lat, lng, distanciaKm, tiempo, idCorralon }) => {
              const objetoCoincidente = coordenadasFin.find(
                (obj) => obj.lat == lat && obj.lng == lng
              );
              return objetoCoincidente
                ? { ...objetoCoincidente, lat, lng, distanciaKm }
                : null;
            })
            .filter((obj) => obj !== null);

          console.log(arrayCombinado);

          setDistancias(arrayCombinado);
        } catch (error) {
          console.error('Error al calcular las distancias:', error);
        }
      };

      calcularDistanciasAsincrono();
    }
  }, [coordenadasFin, coordenadaInicio]);

  const lastCoords = (lastCoords) => {
    console.log('ultimas coodesnadas', lastCoords);
    setCoordenadaInicio({ lat: lastCoords[0], lng: lastCoords[1] });
  };

  const formRecoleccion = (formRecoleccion) =>
    setDatosFormularioRecoleccion(formRecoleccion);

  const formAsignacion = (formAsignacion) =>
    setDatosFormularioAsignacion(formAsignacion);

  const formVehiculos = (formVehiculos) =>
    setDatosFormularioVehiculo(formVehiculos);

  const gruaSeleccionadaForm = (gruaSeleccionadaForm) =>
    setGruaSeleccionada(gruaSeleccionadaForm);

  const handleSent = async () => {
    const options = {
      headers: { 'Content-Type': 'application/json' },
      body: {
        vehiculo: {
          placa: datosFormularioVehiculo.placa,
          color: datosFormularioVehiculo.color,
          marca: datosFormularioVehiculo.marca,
        },
        siniestro: {
          calle: datosFormularioRecoleccion.road,
          colonia: datosFormularioRecoleccion.county,
          municipio: datosFormularioRecoleccion.county,
          cp: datosFormularioRecoleccion.postcode,
          idAsesor: 1,
        },
        arrastre: {
          idGrua: gruaSeleccionada,
          idCorralon: datosFormularioAsignacion.idCorralon,
          idChofer: 1,
          kmRecorridos: datosFormularioAsignacion.distanciaKm,
        },
      },
    };

    try {
      const response = await helpHttpAsync().post(URL_REGISTRO_SINIESTRO_COMPLETO, options);
      console.log(response);
        SweetAlertToast('success', 'Regristro de siniestro correcto!');
    } catch (error) {
      SweetAlertToast('error', '¡Ocurrió error registrar siniestro!');
    }
  };

  return (
    <div className="container pb-5" data-aos="fade-right" data-aos-once="true">
      <FormularioRecoleccion
        lastCoords={lastCoords}
        formRecoleccion={formRecoleccion}
      />

      <FormularioVehiculos formVehiculos={formVehiculos} />

      {datosFormularioVehiculo && (
        <FormularioAsignacion
          distancias={distancias}
          formAsignacion={formAsignacion}
          gruaSeleccionadaForm={gruaSeleccionadaForm}
        />
      )}

      {datosFormularioRecoleccion &&
        datosFormularioVehiculo &&
        datosFormularioAsignacion &&
        gruaSeleccionada && (
          <button className="mt-5 btn btn-primary" onClick={handleSent}>
            Enviar
          </button>
        )}
    </div>
  );
};

export default FormularioPagePrivate;
