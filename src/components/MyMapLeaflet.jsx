import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

let mapIdCounter = 0;

const MyMapLeaflet = ({ coordinates, zoom, onCoordinateChange }) => {
  const mapRef = useRef(null);
  const mapId = `map-${mapIdCounter++}`;

  useEffect(() => {
    // Inicializar el mapa
    mapRef.current = L.map(mapId).setView(coordinates, zoom);

    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      mapRef.current
    );

    // Agregar marcador al mapa y manejar eventos de movimiento
    const marker = L.marker(coordinates, { draggable: true }).addTo(
      mapRef.current
    );
    marker.on('dragend', (event) => {
      const newCoordinates = event.target.getLatLng();
      onCoordinateChange([newCoordinates.lat, newCoordinates.lng]);
    });

    // Limpiar el mapa al desmontar el componente
    return () => {
      mapRef.current.remove();
    };
  }, [coordinates, zoom, onCoordinateChange]);

  return <div id={mapId} style={{ height: '400px' }}></div>;
};

MyMapLeaflet.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  onCoordinateChange: PropTypes.func.isRequired,
};

export default MyMapLeaflet;
