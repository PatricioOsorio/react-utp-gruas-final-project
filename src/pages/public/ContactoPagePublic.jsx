import img from '../../assets/icons/contact.svg';

const ContactoPagePublic = () => {
  return (
    <>
      <div className="container mb-5">
        {/* <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
            <li class="breadcrumb-item">
              <a class="link-body-emphasis" href="#">
                <i class="fas fa-home bi"></i>
                <span class="visually-hidden">Home</span>
              </a>
            </li>
            <li class="breadcrumb-item">
              <a
                class="link-body-emphasis fw-semibold text-decoration-none"
                href="#"
              >
                Library
              </a>
            </li>
            <li class="breadcrumb-item">Data</li>
          </ol>
        </nav> */}
        <div className="row">
          <h1 className="fs-1 fw-semibold mb-3">Contacto</h1>
          <hr className="mb-5" />
          <div className="col-lg-6">
            <form>
              <div class="row mb-3">
                <label for="nombre" class="col-sm-2 col-form-label fw-semibold">
                  Nombre:
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="nombre"
                    placeholder='Nombre'
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="contraseña"
                  class="col-sm-2 col-form-label fw-semibold"
                >
                  Correo electrónico:
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="contraseña"
                    placeholder='Correo electrónico'
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="mensaje"
                  class="col-sm-2 col-form-label fw-semibold"
                >
                  Mensaje:
                </label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="mensaje"
                    rows="5"
                    placeholder='Mensaje'
                    required
                  ></textarea>
                </div>
              </div>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="reset"
                  class="btn btn-outline-secondary me-md-2 fs-5"
                >
                  Limpiar
                </button>
                <button type="submit" class="btn btn-outline-primary fs-5">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6  d-flex align-content-center justify-content-center">
            <img
              src={img}
              className="img-fluid"
              style={{ maxWidth: '350px' }}
            />
          </div>
        </div>
      </div>

      <section className="bg-body-tertiary py-5">
        <div className="container">
          <h2 className="fs-1 fw-semibold">Section</h2>
          <hr className="mb-5" />
          <p className="text-body-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            iure a nihil? Aliquid et ipsam consequuntur porro ipsum obcaecati
            voluptas veniam, beatae, qui dolore suscipit delectus accusamus,
            ullam temporibus minima dicta quam praesentium aspernatur
            consectetur sint ex necessitatibus. Voluptatum, sit ipsa quibusdam
            consequuntur autem nobis tempora accusamus voluptatem quaerat
            architecto soluta. Aliquid officia provident illum quaerat repellat
            accusantium obcaecati tempora accusamus, cupiditate amet molestiae
            beatae! Rem facilis cupiditate, architecto autem animi similique
            odio dolorem est labore repudiandae impedit itaque modi quod,
            recusandae enim perspiciatis delectus fugit perferendis? Eaque,
            atque sapiente? Dolores odit id tempora cumque suscipit vero in
            eligendi rem?
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactoPagePublic;
