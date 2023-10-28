const FooterPublic = () => {
  return (
    <footer className="d-block mt-auto bg-light border-top">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 container">
        <div className="col-md-8 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 - Plataforma de grúas para el Estado de Puebla.
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterPublic;
