const HomePagePublic = () => {
  return (
    <>
      <div className="container py-3 mb-5">
        <h1 className="text-center text-primary">Plataforma de gruas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore
          sit eveniet ducimus iste nam laborum repellendus cum dolore adipisci
          ut vel accusantium, vero at quo, dicta maxime autem quos!
        </p>

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/08/9-actividades-en-Puebla-para-descubrir-todo-el-encanto-de-la-ciudad-1024x512.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://sisolinmobiliarias.com/blog/wp-content/uploads/2018/08/ciudad-de-puebla-y-sus-maravillas.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://c0.wallpaperflare.com/preview/590/843/825/mexico-puebla-city.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section className="bg-body-tertiary py-5 mb-5">
        <div className="container text-center">
          <h2 className="text-center fw-semibold text-primary">
            Section
          </h2>
          <p className='text-body-secondary'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            mollitia veniam autem nobis, debitis labore aspernatur eligendi
            fugiat facere molestiae maxime dolorem aliquid voluptate repudiandae
            modi ratione! Debitis, enim dolor?
          </p>
          <button className="btn btn-primary">Action</button>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center fw-semibold text-body-secondary">
          Noticias
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In mollitia
          veniam autem nobis, debitis labore aspernatur eligendi fugiat facere
          molestiae maxime dolorem aliquid voluptate repudiandae modi ratione!
          Debitis, enim dolor?
        </p>
      </section>
    </>
  );
};

export default HomePagePublic;
