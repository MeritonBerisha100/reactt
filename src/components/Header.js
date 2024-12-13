import React from "react";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          NEXT INVEST
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">
                Investment opportunities
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                How it works
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About us
              </a>
            </li>
          </ul>
          <form className="auth-form d-flex my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0 login-btn"
              type="button"
            >
              Login
            </button>
            <button
              className="btn btn-outline-danger my-2 my-sm-0 register-btn"
              type="button"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
