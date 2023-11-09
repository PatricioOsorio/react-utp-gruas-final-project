import { useEffect, useRef } from 'react';
import language from 'datatables.net-plugins/i18n/es-ES.mjs';

const ConsultaMatriculaPagePublic = () => {
  const tableRef = useRef();

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      language,
    });

    // Destruir la tabla antes de volver a inicializarla para evitar el error
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <>
      <div className="container mb-5" data-aos="fade-left" data-aos-once="true">
        <h1 className="fs-1 fw-semibold mb-3">Consultar matricula</h1>
        <hr className="mb-5" />
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca aquí tu matricula"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>
        </form>

        <div className="table-responsive p-3">
          <table
            ref={tableRef}
            className="table table-striped table-hover table-borderless align-middle text-center m-0"
          >
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>dos</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ConsultaMatriculaPagePublic;
