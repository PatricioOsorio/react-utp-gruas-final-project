import React, { useEffect, useState } from 'react';
import MyMapLeaflet from './MyMapLeaflet';
import { helpHttp } from '../helpers/helpHttp';
import SweetAlertToast from './SweetAlertToast';

const FormularioVehiculos = ({ formVehiculos }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const placa = e.target.placa.value;
    const color = e.target.color.value;
    const marca = e.target.marca.value;
    
    
    formVehiculos({ placa, color, marca });

    SweetAlertToast('success', '¡Parece bien!');
  };

  return (
    <div className="row mb-5">
      <h1 className="fs-1 fw-semibold mb-3">Formulario vehiculo</h1>
      <hr className="mb-5" />
      <form onSubmit={handleSubmit}>
        <div className="col-12 mb-3">
          <label className="form-label fw-semibold" htmlFor="placa">
            Número de Placa (sin guiones ni espacios) (5-7 digitos):
          </label>
          <input
            id="placa"
            type="text"
            className="form-control"
            name="placa"
            required
            maxLength={7}
            minLength={5}
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
            name="color"
            required
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
            name="marca"
            required
          />
        </div>
        <button className="btn btn-outline-primary">
          <i className="fa-solid fa-check me-2"></i>Verificar campos
        </button>
      </form>
    </div>
  );
};

export default FormularioVehiculos;
