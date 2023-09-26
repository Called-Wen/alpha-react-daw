import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext.js";

function Navbar() {

  const { isLoggedIn, handleLogout } = useContext(LoginContext);

  console.log('isLoggedIn Navbar:', isLoggedIn);



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span>&larr;</span>Wen DAW<span>&rarr;</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
            {isLoggedIn ? (
          <button
            className="btn btn-link nav-link"
            onClick={handleLogout}
          >
            Terminar Sessão
          </button>
        ) : (
          <Link className="nav-link" to="/Extra">
            Iniciar Sessão
          </Link>
        )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
