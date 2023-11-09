import React, { useEffect, useState } from 'react';
import MyMapLeaflet from './MyMapLeaflet';
import { helpHttp } from '../helpers/helpHttp';
import SweetAlertToast from './SweetAlertToast';

const FormularioRecoleccion = ({ lastCoords, formRecoleccion }) => {
  const [currentCoords, setCurrentCoords] = useState(null);
  const [location, setLocation] = useState(null);

  const reverseGeolocation = (lat, lon) => {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&addressdetails=1&zoom=17`;

    helpHttp()
      .get(apiUrl)
      .then((res) => {
        const { state, county, road, postcode } = res.address;
        setLocation({ state, county, road, postcode });
        formRecoleccion({ state, county, road, postcode });

        // console.log(res.address);
      });
  };

  const getMyCurrentCoords = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          setCurrentCoords({ latitude, longitude, accuracy });
          reverseGeolocation(latitude, longitude);
          lastCoords([latitude, longitude]);
        },
        (error) => {
          SweetAlertToast('error', 'Error obteniendo la ubicación');
          console.error('Error obteniendo la ubicación:', error);

          const latitude = 19.03793;
          const longitude = -98.20346;

          setCurrentCoords({ latitude, longitude });
          reverseGeolocation(latitude, longitude);
          lastCoords([latitude, longitude]);
        },
        // Opciones para la geolocalización
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      alert('La geolocalización no está disponible en este navegador.');
      const latitude = 19.03793;
      const longitude = -98.20346;

      setCurrentCoords(latitude, longitude);
      reverseGeolocation(latitude, longitude);
      lastCoords([latitude, longitude]);
    }
  };

  // A la carga de la página
  useEffect(() => {
    getMyCurrentCoords();
  }, []);

  const onCoordinateChange = (newCoordinates) => {
    // console.log(`Nuevas coodenadas: ${newCoordinates}`);
    const [lat, lon] = newCoordinates;
    reverseGeolocation(lat, lon);
    setCurrentCoords({ latitude: lat, longitude: lon });
    lastCoords([lat, lon]);
    formRecoleccion(location);
  };

  return (
    <div className="row">
      <h1 className="fs-1 fw-semibold mb-3">Punto de recoleccion</h1>
      <hr className="mb-5" />

      <button
        className="btn btn-outline-primary mb-3"
        onClick={getMyCurrentCoords}
      >
        <i className="fas fa-map-marker-alt me-1"></i>Ubicacion actual
      </button>

      <div className="row g-3 mb-5">
        <div className="col-lg-6">
          {location && (
            <>
              <div className="col-12 mb-3">
                <label className="form-label fw-semibold" htmlFor="cp">
                  Código :
                </label>
                <input
                  id="cp"
                  type="text"
                  className="form-control"
                  disabled
                  value={location.postcode}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label fw-semibold" htmlFor="estado">
                  Estado:
                </label>
                <input
                  id="estado"
                  type="text"
                  className="form-control"
                  disabled
                  value={location.state}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label fw-semibold" htmlFor="municipio">
                  Municipio / Alcaldía:
                </label>
                <input
                  id="municipio"
                  type="text"
                  className="form-control"
                  disabled
                  value={location.county}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label fw-semibold" htmlFor="calle">
                  Calle:
                </label>
                <input
                  id="calle"
                  type="text"
                  className="form-control"
                  disabled
                  value={location.road}
                />
              </div>
            </>
          )}
        </div>
        <div className="col-lg-6">
          {currentCoords && (
            <MyMapLeaflet
              coordinates={[
                parseFloat(currentCoords.latitude),
                parseFloat(currentCoords.longitude),
              ]}
              zoom={parseInt(20)}
              onCoordinateChange={onCoordinateChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormularioRecoleccion;
