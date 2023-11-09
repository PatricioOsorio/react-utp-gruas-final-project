import React, { useEffect, useState } from 'react';
import MyMapLeaflet from './MyMapLeaflet';
import { helpHttp } from '../helpers/helpHttp';
import SweetAlertToast from './SweetAlertToast';

const FormularioVehiculos = ({ formVehiculos }) => {
  return (
    <div className="row">
      <h1 className="fs-1 fw-semibold mb-3">Formulario vehiculo</h1>
      <hr className="mb-5" />
      <form>
        <div className="col-12 mb-3">
          <label className="form-label fw-semibold" htmlFor="placa">
          Número de Placa (sin guiones ni espacios) (5-7 digitos):
          </label>
          <input
            id="placa"
            type="text"
            className="form-control"
            // value={location.postcode}
          />
        </div>

        <div className="col-12 mb-3">
          <label className="form-label fw-semibold" htmlFor="color">
            Color:
          </label>
          <input
            id="color"
            type="text"
            className="form-control"
            // value={location.state}
          />
        </div>

        <div className="col-12 mb-3">
          <label className="form-label fw-semibold" htmlFor="marca">
            Marca:
          </label>
          <input
            id="marca"
            type="text"
            className="form-control"
            // value={location.county}
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioVehiculos;
