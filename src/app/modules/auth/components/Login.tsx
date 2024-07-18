import { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { getUserByToken, login } from '../core/_requests';
import { toAbsoluteUrl } from '../../../../features/helpers';
import { useAuth } from '../core/Auth';
import { loginSchema } from '../scheme/schemes';
import backgroundImage from '../../../../features/assets/images/Mesa67.png';
import loginImage from '../../../../features/assets/images/Mesa68.png';
import luna from '../../../../features/assets/images/luna.png';

const initialValues = {
  email: '',
  password: '',
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.email, values.password);
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.token);
        setCurrentUser(user);
        setSubmitting(false);
        setLoading(false);
      } catch (error) {
        saveAuth(undefined);
        setStatus('The login details are incorrect');
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="text-center mb-4">
                <b className="text-center mb-4" style={{ fontSize: '2em' }}>NU</b>
                <span className="text-center mb-4" style={{ fontSize: '1.5em', width: '100%', backgroundColor: '#0beea6', borderRadius: '10px', padding: '4px' }}>
                  <b>Pay</b>
                </span>
                FINANCE
              </h1>
              <br />
              <h3 className="card-subtitle text-left mb-4" style={{ fontSize: '2.1em' }}>
                <b>¡Bienvenido!</b>
              </h3>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <a
                    href="#"
                    className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                  >
                    <img
                      alt="Logo"
                      src={toAbsoluteUrl('media/svg/brand-logos/google-icon.svg')}
                      className="h-15px me-3"
                    />
                    Google
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="#"
                    className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                  >
                    <img
                      alt="Logo"
                      src={toAbsoluteUrl('media/svg/brand-logos/apple-black.svg')}
                      className="theme-light-show h-15px me-3"
                    />
                    <img
                      alt="Logo"
                      src={toAbsoluteUrl('media/svg/brand-logos/apple-black-dark.svg')}
                      className="theme-dark-show h-15px me-3"
                    />
                    Apple
                  </a>
                </div>
              </div><br />
              <div className="separator separator-content my-3">
                <span className="w-125px text-gray-500 fw-semibold fs-7">
                  O con tu Email
                </span>
              </div><br />
              <form onSubmit={formik.handleSubmit} noValidate id="kt_login_signin_form">
                <div className="fv-row mb-3">
                  <input
                    placeholder="Ingresa tu email"
                    {...formik.getFieldProps('email')}
                    className={clsx(
                      'form-control bg-transparent',
                      { 'is-invalid': formik.touched.email && formik.errors.email },
                      { 'is-valid': formik.touched.email && !formik.errors.email }
                    )}
                    type="email"
                    name="email"
                    autoComplete="off"
                    
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="fv-plugins-message-container">
                      <span role="alert">{formik.errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="fv-row mb-3">
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Ingresa tu contraseña"
                    {...formik.getFieldProps('password')}
                    className={clsx(
                      'form-control bg-transparent',
                      { 'is-invalid': formik.touched.password && formik.errors.password },
                      { 'is-valid': formik.touched.password && !formik.errors.password }
                    )}
                  
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{formik.errors.password}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-primary"
                    disabled={formik.isSubmitting || !formik.isValid}
                    style={{
                      backgroundColor:'#0beea6',
                  
                      color:'black'
                    }}
                  >
                    {!loading && <span className="indicator-label"><b>Ingresar</b></span>}
                    {loading && (
                      <span className="indicator-progress" style={{ display: 'block' }}>
                        Por favor espera...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span>¿No eres miembro todavía?</span> <Link to="/auth/registration" className="text-success">Registrarse</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img
              src={loginImage}
              className="img-fluid rounded-start"
              alt="Login"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
