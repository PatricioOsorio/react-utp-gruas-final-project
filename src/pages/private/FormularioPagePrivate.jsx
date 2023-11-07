import React, { useEffect, useState } from 'react';
import FormularioRecoleccion from '../../components/FormularioRecoleccion';
import FormularioAsignacion from '../../components/FormularioAsignacion';
import calcularDistancia from '../../components/Distances';

// Datos de test
// const coordenadaInicio = { lat: 19.0321611, lng: -98.2067481 };
const coordenadasFin = [
  {
    lat: 19.03941,
    lng: -98.198584,
    region: '1',
    almacen: 'Capitolio',
    ubicacion: 'calle 8 norte',
    contacto: 'alamcen@hotmail.com',
    telefono: '2222222222',
  },
  {
    lat: 19.066991,
    lng: -98.199712,
    region: '2',
    almacen: 'Juan',
    ubicacion: 'calle 2 sur',
    contacto: 'alamcen@hotmail.com',
    telefono: '6546541231',
  },
  {
    lat: 19.096123,
    lng: -98.172151,
    region: '3',
    almacen: 'Hemanos',
    ubicacion: 'calle 2 norte',
    contacto: 'alamcen@hotmail.com',
    telefono: '98798465',
  },
];

const FormularioPagePrivate = () => {
  const [coordenadaInicio, setCoordenadaInicio] = useState(null);
  const [distancias, setDistancias] = useState(null);

  useEffect(() => {
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
              (obj) => obj.lat === lat && obj.lng === lng
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
  }, [coordenadaInicio]); // El segundo argumento vacío asegura que el efecto se ejecute solo una vez después del montaje inicial

  const lastCoords = (lastCoords) => {
    console.log('ultimas coodesnadas', lastCoords);
    setCoordenadaInicio({ lat: lastCoords[0], lng: lastCoords[1] });
  };

  return (
    <div className="card my-5 p-5 rounded border shadow bg-white ">
      <FormularioRecoleccion lastCoords={lastCoords} />

      {coordenadaInicio && <FormularioAsignacion distancias={distancias} />}
    </div>
  );
};

export default FormularioPagePrivate;
