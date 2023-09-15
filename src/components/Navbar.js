import { useState } from "react";
import { Link } from "react-router-dom";

function LoginButton({ onLogin }) {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <Link className="nav-link" onClick={handleLogin}>
      Iniciar Sessão
    </Link>
  );
}

function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <Link className="nav-link" onClick={handleLogout}>
      Terminar Sessão
    </Link>
  );
}

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userList = [
    { nome: "admin", password: "admin" },
    { nome: "wen", password: "1234" },
  ];

  const inputName = "wen";
  const inputPassword = "1234";

  const handleLogin = () => {
    console.log("Handle Login called");
    console.log("Input Name:", inputName);
    console.log("Input Password:", inputPassword);

    let validCredentials = false;
    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].nome === inputName &&
        userList[i].password === inputPassword
      ) {
        validCredentials = true;
        break;
      }
    }

    if (validCredentials) {
      setIsLoggedIn(true);
    } else {
      console.log("Credenciais inválidas. Tente novamente.");
      alert("Credenciais inválidas. Tente novamente.");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span>&larr;</span>Wen Fase<span>&rarr;</span>
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
                <LogoutButton onLogout={handleLogout} />
              ) : (
                <LoginButton onLogin={handleLogin} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
