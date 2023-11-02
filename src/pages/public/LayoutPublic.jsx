import { Link, Outlet} from 'react-router-dom';
import FooterPublic from './FooterPublic';

const LayoutPublic = () => {
  return (
    <>
      <header
        className="container-fluid"
        style={{ marginBottom: '4rem' }}
      >
        <nav className="navbar navbar-expand-lg bg-primary fixed-top shadow" data-bs-theme="dark">
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
                <Link className="navbar-brand fw-bold ms-auto" to="/">
                  Gruas
                </Link>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/">
                    Inicio
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <Link className="btn btn-outline-secondary me-2" to="/IniciarSesion">
                  <i className="fa-solid fa-right-to-bracket me-1"></i>Iniciar sesion
                </Link>
                <Link className="btn btn-secondary" to="/Registrar">
                  <i className="fas fa-user-edit me-1"></i>Registro
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      <FooterPublic />
    </>
  );
};

export default LayoutPublic;
