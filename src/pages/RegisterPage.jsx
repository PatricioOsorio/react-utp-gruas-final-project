import img from '../assets/icons/register.svg';
import { URL_REGISTER } from '../endpoints';
import { helpHttpAsync } from '../helpers/helpHttpAsync';
import SweetAlertToast from '../components/SweetAlertToast';
import { useFormik } from 'formik';
import { registerValidationSchema } from '../validationSchemas/register';

const RegisterPage = () => {
  const handleSubmit = async (form) => {
    const options = {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: {
        userName: form.email,
        password: form.password,
      },
    };

    try {
      const response = await helpHttpAsync().post(URL_REGISTER, options);

      if (response == '¡Registro correcto!') {
        SweetAlertToast('success', 'Registro correcto!');
        handleReset();
      } else {
        SweetAlertToast('error', '¡Correo o contraseña incorrecta!');
      }
    } catch (error) {
      SweetAlertToast('error', '¡Ocurrió error en el registro!');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      console.log('Formulario enviado:', values);
      handleSubmit(values);
    },
  });

  const handleReset = () => formik.resetForm();

  return (
    <>
      <div className="container-fluid">
        <div className="container mb-5">
          <div className="row mt-5 mh-100 d-flex align-content-center">
            <div className="col-lg-6 d-flex align-content-center justify-content-center ">
              <img
                src={img}
                alt=""
                className="img-fluid"
                style={{ maxWidth: '350px' }}
              />
            </div>
            <div className="col-lg-5 px-4 py-5 form-login-register">
              <h1 className="fs-1 fw-semibold mb-3">Registro</h1>
              <hr className="mb-5" />

              <form
                onSubmit={formik.handleSubmit}
                className={`needs-validation ${
                  formik.touched.length > 0 && formik.isValid
                    ? 'was-validated'
                    : ''
                }`}
                noValidate
              >
                <div className="mb-3">
                  <label className="form-label fw-semibold " htmlFor="email">
                    Correo electronico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? 'is-invalid'
                        : formik.touched.email
                        ? 'is-valid'
                        : ''
                    }`}
                    placeholder="Correo electronico"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password
                        ? 'is-invalid'
                        : formik.touched.password
                        ? 'is-valid'
                        : ''
                    }`}
                    placeholder="Contraseña"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label fw-semibold"
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? 'is-invalid'
                        : formik.touched.confirmPassword
                        ? 'is-valid'
                        : ''
                    }`}
                    placeholder="Confirmar Contraseña"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>

                <div className="d-flex justify-content-between">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Recuerdame
                    </label>
                  </div>
                  <div className="mb-3">
                    <a href="#">¿Olvidó su contraseña?</a>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary me-1" type="submit">
                    <i className="fa-solid fa-paper-plane me-1"></i>
                    Registro
                  </button>

                  <button
                    className="btn btn-outline-secondary mx-1"
                    type="reset"
                    onClick={handleReset}
                  >
                    <i className="fa-solid fa-broom me-1"></i>Limpiar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
