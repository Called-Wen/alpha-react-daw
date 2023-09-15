import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Footer() {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 px-5 my-4  border-top mt-auto py-3 bg-body-tertiary shadow">
      <div className="col-md-4 d-flex align-items-center">
        <Link
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        ></Link>
        <span className="mb-3 mb-md-0 text-body-secondary">
          &copy; 2k23 DAW/DMI, Desenvolvido por Wen Macie.
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link className="text-body-secondary" href="#"></Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" href="#"></Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" href="#"></Link>
        </li>
      </ul>

      {/* 
  Aqui temos o componete dentro do componente
*/}
      <SearchForm />
    </footer>
  );
}

export default Footer;
