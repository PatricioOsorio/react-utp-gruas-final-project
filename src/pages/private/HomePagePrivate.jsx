const HomePagePrivate = () => {
  return (
    <div className="container pb-5" data-aos="fade-right" data-aos-once="true">
      <h1 className="fs-1 fw-semibold mb-3">¡Bienvenido!</h1>
      <hr className="mb-5" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore
        sit eveniet ducimus iste nam laborum repellendus cum dolore adipisci ut
        vel accusantium, vero at quo, dicta maxime autem quos!
      </p>

      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="fw-semibold">Title</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            doloribus soluta quas vel libero aspernatur accusamus, ex mollitia?
            Corporis atque perspiciatis dolor velit at laborum in ea inventore
            molestiae odio!
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              odio ullam esse? Magnam beatae praesentium quibusdam harum
              suscipit reiciendis enim alias, unde porro illum labore voluptas,
              in commodi molestiae dignissimos.
            </p>
            <button className="btn btn-outline-light" type="button">
              Example button
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in
              nesciunt optio sint, saepe eligendi, quibusdam maxime veniam magni
              natus atque quam dolor, similique doloribus repellendus nobis ipsa
              voluptatibus repudiandae?
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Example button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePrivate;
