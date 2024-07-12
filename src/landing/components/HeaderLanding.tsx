import React from "react";
import { Link } from "react-router-dom";
import FloatingChatButton from "./FloatingChatButton";

const HeaderLanding = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center flex-equal">
          <button
            className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none"
            id="kt_landing_menu_toggle"
          >
            <i className="ki-duotone ki-abstract-14 fs-2hx text-dark">
              <span className="path1">Hola</span>
              <span className="path2"></span>
            </i>
          </button>
          <Link to="/" className="text-dark text-decoration-none fs-3 fw-bold">
            LOGO
          </Link>
        </div>

        <div className="d-lg-block" id="kt_header_nav_wrapper">
          <div
            className="d-lg-block p-5 p-lg-0"
            data-kt-drawer="true"
            data-kt-drawer-name="landing-menu"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="200px"
            data-kt-drawer-direction="start"
            data-kt-drawer-toggle="#kt_landing_menu_toggle"
            data-kt-swapper="true"
            data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
          >
            <div
              className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-600 menu-state-title-primary nav nav-flush fs-5 fw-semibold"
              id="kt_landing_menu"
            >
              <div className="menu-item">
                <a
                  className="menu-link nav-link active py-3 px-4 px-xxl-6 text-dark"
                  href="#kt_body"
                  data-kt-scroll-toggle="true"
                  data-kt-drawer-dismiss="true"
                >
                  Productos
                </a>
              </div>

              <div className="menu-item">
                <a
                  className="menu-link nav-link py-3 px-4 px-xxl-6 text-dark"
                  href="#how-it-works"
                  data-kt-scroll-toggle="true"
                  data-kt-drawer-dismiss="true"
                >
                  Soluciones
                </a>
              </div>

              <div className="menu-item">
                <a
                  className="menu-link nav-link py-3 px-4 px-xxl-6 text-dark"
                  href="#achievements"
                  data-kt-scroll-toggle="true"
                  data-kt-drawer-dismiss="true"
                >
                  Tarifas
                </a>
              </div>

              <div className="menu-item">
                <a
                  className="menu-link nav-link py-3 px-4 px-xxl-6 text-dark"
                  href="#team"
                  data-kt-scroll-toggle="true"
                  data-kt-drawer-dismiss="true"
                >
                  Contacta un asesor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-equal text-end ms-1">
          <Link
            to="/auth/login"
            className="btn btn-success"
            style={{
              backgroundColor: "#0beea6",
              color: "#000",
              borderRadius: "20px",
              padding: "7px 50px",
            }} // Añadido borderRadius
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>

      <FloatingChatButton /> {/* Añadimos el botón flotante */}

    </div>
  );
};

export default HeaderLanding;



