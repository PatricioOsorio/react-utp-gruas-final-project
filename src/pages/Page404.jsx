import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/404.css';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="container vh-100 mt-5">
        <div className="row">
          <div className="col-12 vh-100">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Parece que estás perdido</h3>

                <p>La página que estás buscando no está disponible!</p>

                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-primary"
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
