import React, { useEffect, useState } from 'react';
import MyMapLeaflet from './MyMapLeaflet';
import { helpHttp } from '../helpers/helpHttp';
import SweetAlertToast from './SweetAlertToast';

const FormularioAsignacion = ({ distancias }) => {
  const [asignation, setAsignation] = useState(null);
  const handleChange = (e) => {
    const arrayCoord = e.target.value.split(',');
    const selectedLat = arrayCoord[0];
    const selectedlng = arrayCoord[1];

    const objetoEncontrado = distancias.find(
      (coordenada) =>
        coordenada.lat == selectedLat && coordenada.lng == selectedlng
    );

    if (objetoEncontrado) {
      // console.log('Objeto encontrado:', objetoEncontrado);
      setAsignation(objetoEncontrado);
    } else {
      console.log('Objeto no encontrado');
    }
  };

  return (
    <div className="row">
      <h1 className="fs-1 fw-semibold mb-3">Punto de asignación</h1>
      <hr className="mb-5" />

      {distancias && (
        <form action="" onChange={handleChange}>
          <select className="form-select">
            <option value="">Seleccione</option>
            {distancias.map((ubicacion) => (
              <option
                key={ubicacion.lat}
                value={`${ubicacion.lat},${ubicacion.lng}`}
              >
                Distancia:
                {ubicacion.distanciaKm.toFixed(1)} km, Ubicacion:
                {ubicacion.ubicacion}
              </option>
            ))}
          </select>
        </form>
      )}

      {asignation && (
        <div className="row g-3">
          <div className="col-md-2">
            <label htmlFor="region" className="form-label">
              Región
            </label>
            <input
              type="text"
              id="region"
              className="form-control"
              disabled
              readOnly
              value={asignation.region}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="almacen" className="form-label">
              Almacén
            </label>
            <input
              type="text"
              id="almacen"
              className="form-control"
              disabled
              readOnly
              value={asignation.almacen}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="ubicacionAlmacen" className="form-label">
              Ubicación del almacén
            </label>
            <input
              type="text"
              id="ubicacionAlmacen"
              className="form-control"
              disabled
              readOnly
              value={asignation.ubicacion}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="contacto" className="form-label">
              Contacto
            </label>
            <input
              type="text"
              id="contacto"
              className="form-control"
              disabled
              readOnly
              value={asignation.contacto}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              id="telefono"
              className="form-control"
              disabled
              readOnly
              value={asignation.telefono}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioAsignacion;
