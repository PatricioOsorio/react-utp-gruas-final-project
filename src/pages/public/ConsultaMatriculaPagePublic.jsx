const ConsultaMatriculaPagePublic = () => {
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
      </div>
    </>
  );
};

export default ConsultaMatriculaPagePublic;
