const FooterPagePublic = () => {
  return (
    <>
      <footer className="d-block mt-auto ">
        <section className="bg-green text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <img
                  src="https://ventanilladigital.puebla.gob.mx/ventanilla/img/escudo-PIE.png"
                  className="img-fluid "
                  width={100}
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <div>
                  <h3>Enlaces</h3>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="http://www.participa.gob.mx"
                        target="_blank"
                      >
                        Participa
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="https://www.gob.mx/publicaciones"
                        target="_blank"
                      >
                        Publicaciones Oficiales
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="http://www.ordenjuridico.gob.mx"
                        target="_blank"
                      >
                        Marco Jurídico
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="https://consultapublicamx.inai.org.mx/vut-web/"
                        target="_blank"
                      >
                        Plataforma Nacional de Transparencia
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <h3>¿Qué es gob.mx?</h3>
                <p>
                  Es el portal único de trámites, información y participación
                  ciudadana.
                  <a
                    href="https://www.gob.mx/que-es-gobmx"
                    className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    <u>Leer más</u>
                  </a>
                </p>
                <ul class="list-unstyled">
                  <li>
                    <a
                      href="https://datos.gob.mx"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Portal de datos abiertos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/accesibilidad"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Declaración de accesibilidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/privacidadintegral"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Aviso de privacidad integral
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/privacidadsimplificado"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Aviso de privacidad simplificado
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/terminos"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Términos y condiciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Política de seguridad
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/sitemap"
                      className="text-light link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Mapa del sitio
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Síguenos en:</h3>
                <ul id="social" class="list-inline">
                  <li class="list-inline-item">
                    <a
                      href="https://www.facebook.com/gobmexico/"
                      target="_blank"
                      red="Facebook"
                      title="Enlace a facebook abre en una nueva ventana"
                      class="sendEstFooterRs share-info"
                    >
                      <img
                        alt="Facebook"
                        src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png"
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://twitter.com/GobiernoMX"
                      target="_blank"
                      red="Twitter"
                      title="Enlace a twitter abre en una nueva ventana"
                      class="sendEstFooterRs share-info"
                    >
                      <img
                        alt="Twitter"
                        src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-primary py-3"></section> */}

        {/* <section className="py-5 bg-body-tertiary text-body-secondary text-center">
          <div className="container">
            <span className="mb-3 mb-md-0">© 2023 Gobierno de Puebla.</span>
          </div>
        </section> */}

        <div className="container-fluid footer-svg"></div>
      </footer>
    </>
  );
};

export default FooterPagePublic;
