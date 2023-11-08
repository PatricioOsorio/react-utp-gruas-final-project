import { useEffect, useRef } from 'react';

const ConsultaMatriculaPagePublic = () => {
  const tableRef = useRef();

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, []);

  return (
    <>
      <div className="container mb-5">
        <h1 className="fs-1 fw-semibold mb-3">Consultar matricula</h1>
        <hr className="mb-5" />
        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Busca aquí tu matricula"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>
        </form>

        <div class="table-responsive my-5">
          <table
            ref={tableRef}
            class="table table-striped table-hover table-borderless align-middle text-center m-0"
          >
            <thead class="table-dark">
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
