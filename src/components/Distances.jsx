import L from 'leaflet';
import 'leaflet-routing-machine';

const calcularDistancia = (coordenadaInicio, coordenadaFin) => {
  const start = L.latLng(coordenadaInicio.lat, coordenadaInicio.lng);
  const end = L.latLng(coordenadaFin.lat, coordenadaFin.lng);

  const control = L.Routing.control({
    waypoints: [
      L.Routing.waypoint(start),
      L.Routing.waypoint(end)
    ],
    routeWhileDragging: true
  });

  const promise = new Promise((resolve) => {
    control.on('routesfound', (e) => {
      const ruta = e.routes[0];
      const distanciaEnKm = ruta.summary.totalDistance / 1000; // Convertir metros a kilómetros
      const tiempoEstimado = ruta.summary.totalTime / 60; // Convertir segundos a minutos
      const destino = {
        lat: coordenadaFin.lat,
        lng: coordenadaFin.lng
      };

      const resultado = {
        distanciaKm: distanciaEnKm,
        tiempoEstimado: tiempoEstimado,
        destino: destino,
      };

      resolve(resultado);
    });
  });

  control.route();

  return promise;
};

export default calcularDistancia;
