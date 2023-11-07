import img from '../../assets/icons/contact.svg';

const ContactoPagePublic = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <h1 className="text-center fw-semibold text-primary">Contacto</h1>
          <div className="col-lg-6">
            <form>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Nombre:
                </label>
                <input type="text" class="form-control" id="nombre" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Correo Electrónico:
                </label>
                <input type="email" class="form-control" id="email" required />
              </div>
              <div class="mb-3">
                <label for="mensaje" class="form-label">
                  Mensaje:
                </label>
                <textarea
                  class="form-control"
                  id="mensaje"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Enviar Mensaje
              </button>
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
        <div className="container text-center">
          <h2 className="text-center fw-semibold text-primary">Section</h2>
          <p className="text-body-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            mollitia veniam autem nobis, debitis labore aspernatur eligendi
            fugiat facere molestiae maxime dolorem aliquid voluptate repudiandae
            modi ratione! Debitis, enim dolor?
          </p>
          <button className="btn btn-primary">Action</button>
        </div>
      </section>
    </>
  );
};

export default ContactoPagePublic;
