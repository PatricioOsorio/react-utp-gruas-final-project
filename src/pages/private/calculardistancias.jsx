import React, { useEffect, useState } from 'react';
import calcularDistancia from '../../components/Distances';

// Datos de test
const coordenadaInicio = { lat: 19.0321611, lng: -98.2067481 };
const coordenadasFin = [
  { lat: 19.0321611, lng: -98.2067481 },
  { lat: 19.03941, lng: -98.198584 },
  { lat: 19.066991, lng: -98.199712 },
  { lat: 19.096123, lng: -98.172151 },
];

const FormularioPagePrivate = () => {
  const [distancias, setDistancias] = useState([]);

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

        setDistancias(nuevasDistancias);
      } catch (error) {
        console.error('Error al calcular las distancias:', error);
      }
    };

    calcularDistanciasAsincrono();
  }, []); // El segundo argumento vacío asegura que el efecto se ejecute solo una vez después del montaje inicial

  return (
    <div>
      

      <h1>Distancias Calculadas:</h1>
      <ul>
        {distancias.map((distancia, index) => (
          <li key={index}>
            Distancia: {distancia.distanciaKm} km, coords: {distancia.lat},{' '}
            {distancia.lng}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormularioPagePrivate;
