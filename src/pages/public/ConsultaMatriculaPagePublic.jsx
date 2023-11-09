import { useEffect, useRef, useState } from 'react';
import language from 'datatables.net-plugins/i18n/es-ES.mjs';
import { URL_VEHICULOSTRANSPORTADOS_UBICAR } from '../../endpoints';
import SweetAlertToast from '../../components/SweetAlertToast';
import { helpHttpAsync } from '../../helpers/helpHttpAsync';

const ConsultaMatriculaPagePublic = () => {
  const [matricula, setMatricula] = useState(null);

  const tableRef = useRef();

  // Datatable
  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      language,
    });

    // Destruir la tabla antes de volver a inicializarla para evitar el error
    return () => {
      table.destroy();
    };
  }, [matricula]);

  // Busqueda de la matricula
  const handleSubmit = async (e, form) => {
    e.preventDefault();

    const matricula = e.target.matricula.value;

    const options = {
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await helpHttpAsync().get(
        `${URL_VEHICULOSTRANSPORTADOS_UBICAR}/${matricula}`,
        options
      );

      setMatricula(response.response);
    } catch (error) {
      SweetAlertToast('error', '¡Ocurrió error al buscar matricula!');
      setMatricula(null);
    }
  };
  const handleReset = () => setMatricula(null);
  return (
    <>
      <div className="container mb-5" data-aos="fade-left" data-aos-once="true">
        <h1 className="fs-1 fw-semibold mb-3">Consultar matricula</h1>
        <hr className="mb-5" />
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca aquí tu matricula"
              name="matricula"
              required
              minLength={5}
              maxLength={7}
            />
            <button className="btn btn-outline-primary" type="submit">
              <i class="fa-solid fa-magnifying-glass me-2"></i>Buscar
            </button>
            <button
              className="btn btn-outline-secondary"
              type="reset"
              onClick={handleReset}
            >
              <i class="fa-solid fa-broom me-2"></i>Limpiar
            </button>
          </div>
        </form>

        {/* {matricula && matricula.length > 0 ? (
          <div className="table-responsive p-3">
            <table
              ref={tableRef}
              className="table table-striped table-hover table-borderless align-middle text-center m-0"
            >
              <thead className="table-dark">
                <tr>
                  <th scope="col">Color</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Corralon - ubicacion</th>
                  <th scope="col">Corralon - almacen</th>
                  <th scope="col">Corralon - correo</th>
                  <th scope="col">Corralon - telefono</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {matricula.map((auto) => (
                  <tr>
                    <td>{auto.vehiculo.color}</td>
                    <td>{auto.vehiculo.marca}</td>
                    <td>{auto.corralon.ubicacion}</td>
                    <td>{auto.corralon.almacen}</td>
                    <td>{auto.corralon.correo}</td>
                    <td>{auto.corralon.telefono}</td>
                    <td>
                      <button className="btn btn-outline-info disabled">
                        Más informacion
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div class="alert alert-danger" role="alert">
            No existen
          </div>
        )} */}

        {matricula && matricula.length > 0 ? (
          <div className="table-responsive p-3">
            <table
              ref={tableRef}
              className="table table-striped table-hover table-borderless align-middle text-center m-0"
            >
              <thead className="table-dark">
                <tr>
                  <th scope="col">Color</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Corralon - ubicacion</th>
                  <th scope="col">Corralon - almacen</th>
                  <th scope="col">Corralon - correo</th>
                  <th scope="col">Corralon - telefono</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {matricula.map((auto) => (
                  <tr key={auto.arrastre.idArrastre}>
                    <td>{auto.vehiculo.color}</td>
                    <td>{auto.vehiculo.marca}</td>
                    <td>{auto.corralon.ubicacion}</td>
                    <td>{auto.corralon.almacen}</td>
                    <td>{auto.corralon.correo}</td>
                    <td>{auto.corralon.telefono}</td>
                    <td>
                      <button className="btn btn-outline-info disabled">
                        Más informacion
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No existen registros</p>
        )}
      </div>
    </>
  );
};

export default ConsultaMatriculaPagePublic;
