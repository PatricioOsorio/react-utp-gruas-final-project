import React, { useEffect, useState } from 'react';
import FormularioRecoleccion from '../../components/FormularioRecoleccion';
import FormularioAsignacion from '../../components/FormularioAsignacion';
import calcularDistancia from '../../components/Distances';
import {
  URL_CORRALONES_LISTA,
  URL_SINIESTROS_REGISTRAR,
} from '../../endpoints';
import SweetAlertToast from '../../components/SweetAlertToast';
import { helpHttpAsync } from '../../helpers/helpHttpAsync';

const FormularioPagePrivate = () => {
  const [coordenadaInicio, setCoordenadaInicio] = useState(null);
  const [coordenadasFin, setCoordenadasFin] = useState(null);
  const [distancias, setDistancias] = useState(null);
  const [datosFormularioRecoleccion, setDatosFormularioRecoleccion] =
    useState(null);
  const [datosFormularioAsignacion, setDatosFormularioAsignacion] =
    useState(null);

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
        console.log('Entra al metodo');
        try {
          const promesasDistancias = coordenadasFin.map((coordenadaFin) =>
            calcularDistancia(coordenadaInicio, coordenadaFin)
          );

          const distanciasCalculadas = await Promise.all(promesasDistancias);

          // Filtrar las distancias que no son 0.0
          const distanciasFiltradas = distanciasCalculadas.filter(
            (distancia) => distancia.distanciaKm !== 0.0
          );

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
            .map(({ lat, lng, distanciaKm, tiempo }) => {
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

  const handleClick = async () => {
    console.log(datosFormularioRecoleccion);
    
    const options = {
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
      body: {
        calle: datosFormularioRecoleccion.road,
        colonia: datosFormularioRecoleccion.county,
        municipio: datosFormularioRecoleccion.county,
        cp: datosFormularioRecoleccion.postcode,
        idAsesor: 1,
      },
    };

    try {
      const response = await helpHttpAsync().post(
        URL_SINIESTROS_REGISTRAR,
        options
      );
      if (!response.err) {
        SweetAlertToast('success', 'Registro exitoso!');
        console.log(response);
      } else {
        SweetAlertToast('error', 'Registro incorrecto!');
      }
    } catch (error) {
      console.log(error);
      SweetAlertToast('error', '¡Ocurrió error al registrar!');
    }
  };

  return (
    <div className="container pb-5">
      <FormularioRecoleccion
        lastCoords={lastCoords}
        formRecoleccion={formRecoleccion}
      />

      {distancias && (
        <FormularioAsignacion
          distancias={distancias}
          formAsignacion={formAsignacion}
        />
      )}

      {distancias && (
        <button className="mt-3 btn btn-outline-primary" onClick={handleClick}>
          Registrar siniestro
        </button>
      )}
    </div>
  );
};

export default FormularioPagePrivate;
