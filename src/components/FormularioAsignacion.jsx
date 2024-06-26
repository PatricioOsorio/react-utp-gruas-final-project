import React, { useEffect, useState } from 'react';
import MyMapLeaflet from './MyMapLeaflet';
import { helpHttp } from '../helpers/helpHttp';
import SweetAlertToast from './SweetAlertToast';
import { helpHttpAsync } from '../helpers/helpHttpAsync';
import { URL_GRUASCORRALON_ID } from '../endpoints';

const FormularioAsignacion = ({
  distancias,
  formAsignacion,
  gruaSeleccionadaForm,
}) => {
  const [asignation, setAsignation] = useState(null);
  const [gruas, setGruas] = useState(null);

  const handleChange = async (e) => {
    const selectedOption = e.target.selectedOptions[0]; // Obtén el elemento seleccionado
    const dataCoords = selectedOption.getAttribute('data-coords'); // Obtén el valor de data-coords

    const arrayCoord = dataCoords.split(',');
    const selectedLat = arrayCoord[0];
    const selectedlng = arrayCoord[1];

    const objetoEncontrado = distancias.find(
      (coordenada) =>
        coordenada.lat == selectedLat && coordenada.lng == selectedlng
    );
    if (objetoEncontrado) {
      setAsignation(objetoEncontrado);
      formAsignacion(objetoEncontrado);
      handleGruas(e.target.value);
    } else {
      console.log('Objeto no encontrado');
    }
  };

  const handleSelectGrua = (e) => {
    gruaSeleccionadaForm(e.target.value);
  };

  const handleGruas = async (idGrua) => {
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await helpHttpAsync().get(
        `${URL_GRUASCORRALON_ID}/${idGrua}`,
        options
      );
      console.log(response.response);
      setGruas(response.response);
    } catch (error) {
      SweetAlertToast('error', 'Error al buscar gruas del corralón');
    }
  };

  return (
    <div className="row">
      <h1 className="fs-1 fw-semibold mb-3">Punto de asignación</h1>
      <hr className="mb-5" />

      {distancias && (
        <form onChange={handleChange}>
          <select className="form-select">
            <option value="">Seleccione</option>
            {distancias.map((ubicacion) => (
              <option
                key={ubicacion.idCorralon}
                // value={`${ubicacion.lat},${ubicacion.lng}`}
                value={ubicacion.idCorralon}
                data-coords={`${ubicacion.lat},${ubicacion.lng}`}
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
        <>
          <div className="row g-3 mb-5">
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

          {gruas && (
            <>
              <h2>Seleccione grua</h2>
              <hr className="mb-3" />
              <form onChange={handleSelectGrua}>
                <select className="form-select" name="idGrua">
                  <option value="">Seleccione</option>
                  {gruas.map((grua) => (
                    <option
                      key={grua.gruas.idGrua}
                      value={grua.gruas.idGrua}
                      // data-coords={`${ubicacion.lat},${ubicacion.lng}`}
                    >
                      Marca: {grua.gruas.marca}, Tipo: {grua.tipoGrua.tipo},
                      color: {grua.gruas.color}
                    </option>
                  ))}
                </select>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FormularioAsignacion;
