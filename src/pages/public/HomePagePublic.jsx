import img1 from '../../assets/images/hero (1).jpg';
import img2 from '../../assets/images/hero (2).jpg';
import img3 from '../../assets/images/hero (3).jpeg';
import img4 from '../../assets/images/hero (4).jpg';

const HomePagePublic = () => {
  return (
    <>
      <div
        className="container py-3 mb-5"
        data-aos="fade-right"
        data-aos-once="true"
      >
        <h1 className="display-5 fw-bold">GDP</h1>
        <hr className="mb-5" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          cumque debitis optio veritatis porro, similique dolores eveniet
          aliquid tempora minus, facilis quibusdam vero quae corporis assumenda
          exercitationem velit harum eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum totam
          cupiditate delectus dignissimos molestias libero. Cumque enim minus
          odit aspernatur rem incidunt commodi quos modi aliquid hic animi
          itaque unde, illo quas esse mollitia quae cupiditate facilis provident
          neque eligendi, delectus eaque quis iure. Nesciunt dolore alias
          dolores architecto optio! Doloribus ea vitae labore quas odio error
          ipsam tempora voluptatum perspiciatis, illo suscipit placeat! Fugiat
          at quidem quis corrupti nisi obcaecati ipsa iure dolorum vel, velit
          illo, hic magni earum beatae. Blanditiis ipsum facere quaerat deleniti
          optio itaque doloribus velit voluptas enim, corporis sit nostrum
          dignissimos commodi molestias aspernatur eum!
        </p>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section
        className="bg-body-tertiary py-5 mb-5"
        data-aos="fade-left"
        data-aos-once="true"
      >
        <div className="container">
          <h2 className="fs-1 fw-semibold">Gobierno de México</h2>
          <hr className="mb-5" />
          <div className="overflow-hidden">
            <video
              src="https://framework-gb.cdn.gob.mx/landing/multimedia/4ta_Transformacion.mp4"
              className="w-100 h-auto"
              autoPlay
              controls
              muted
            ></video>
          </div>
        </div>
      </section>

      <section
        className="bg-body-tertiary py-5 mb-5"
        data-aos="fade-right"
        data-aos-once="true"
      >
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
          <button className="btn btn-outline-primary">Action</button>
        </div>
      </section>

      <section
        className="container py-5"
        data-aos="fade-left"
        data-aos-once="true"
      >
        <h2 className="fs-1 fw-semibold">Noticias</h2>
        <hr className="mb-5" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In mollitia
          veniam autem nobis, debitis labore aspernatur eligendi fugiat facere
          molestiae maxime dolorem aliquid voluptate repudiandae modi ratione!
          Debitis, enim dolor?
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePagePublic;
