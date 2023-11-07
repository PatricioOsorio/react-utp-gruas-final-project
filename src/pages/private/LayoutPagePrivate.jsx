import { Link, NavLink, Outlet } from 'react-router-dom';
import '../../assets/css/sidebar.css';
import { useEffect } from 'react';
import imgAvatar from '../../assets/icons/user.svg';

const LayoutPagePrivate = () => {
  const handleAside = () => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      // show navbar
      nav.classList.toggle('show');
      // change icon
      toggle.classList.toggle('bx-x');
      // add padding to body
      bodypd.classList.toggle('body-pd');
      // add padding to header
      headerpd.classList.toggle('body-pd');
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
  };

  return (
    <div className="body vh-100">
      <div id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            <i
              className="bx bx-menu"
              id="header-toggle"
              onClick={handleAside}
            ></i>
          </div>
          <a className="header_img" title="Manage">
            <img src={imgAvatar} alt="" />
          </a>
        </header>

        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <Link className="nav_logo text-decoration-none " to="/Private">
                <i className="fas fa-car nav_logo-icon"></i>
                <span className="nav_logo-name">Administracion</span>
              </Link>
              <div className="nav_list">
                <NavLink
                  className="nav_link text-decoration-none "
                  to="/Private"
                >
                  <i className="bx bx-home-alt-2 nav_icon"></i>
                  <span className="nav_name">Inicio</span>
                </NavLink>
                <NavLink
                  className="nav_link text-decoration-none "
                  to="/Private/Formulario"
                >
                  <i className="fas fa-file-alt nav_icon"></i>
                  <span className="nav_name">Formulario</span>
                </NavLink>
                <NavLink
                  className="nav_link text-decoration-none "
                  to="/Private/Dashboard"
                >
                  <i className="fas fa-chart-pie nav_icon"></i>
                  <span className="nav_name">Dashboard</span>
                </NavLink>
              </div>
            </div>

            <NavLink to="/" className="text-decoration-none">
              <div className="nav_link">
                <i className="bx bx-log-out nav_icon"></i>
                <span className="nav_name">Cerrar sesion</span>
              </div>
            </NavLink>
          </nav>
        </div>

        <main className="container pt-4 vh-100 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutPagePrivate;
