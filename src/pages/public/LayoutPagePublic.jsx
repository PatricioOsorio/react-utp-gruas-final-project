import { Link, NavLink, Outlet } from 'react-router-dom';
import FooterPagePublic from './FooterPagePublic';

const LayoutPagePublic = () => {
  return (
    <>
      <header className="container-fluid" style={{ marginBottom: '6rem' }}>
        <nav
          className="navbar navbar-expand-lg bg-gray fixed-top shadow"
          data-bs-theme="light"
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarTogglerDemo01"
            >
              <div>
                <a class="navbar-brand" href="#">
                  <img
                    src="https://planeader.puebla.gob.mx/Secretaria/images/Logo-Puebla.png"
                    alt="Logo"
                    width="180"
                    height="auto"
                    class="d-inline-block align-text-top"
                  />
                  
                </a>
                {/* <NavLink className="navbar-brand fw-bold ms-auto" to="/">
                  Gruas
                </NavLink> */}
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <i className="fas fa-homem me-1"></i>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contacto">
                    <i className="fas fa-homem me-1"></i>
                    Contacto
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Acerca">
                    <i className="fas fa-homem me-1"></i>
                    Acerca de nosotros
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/PreguntasFrecuentes"
                  >
                    <i className="fas fa-homem me-1"></i>
                    Preguntas frecuentes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ConsultaMatricula">
                    <i className="fas fa-homem me-1"></i>
                    Consultar matricula
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <NavLink
                  className="btn btn-outline-secondary me-2"
                  to="/IniciarSesion"
                >
                  <i className="fa-solid fa-right-to-bracket me-1"></i>Iniciar
                  sesion
                </NavLink>
                <NavLink className="btn btn-secondary" to="/Registrar">
                  <i className="fas fa-user-edit me-1"></i>Registro
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      <FooterPagePublic />
    </>
  );
};

export default LayoutPagePublic;
