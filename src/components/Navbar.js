import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  let name = "";
  const Logout = () => {
    localStorage.setItem("token", "");
    navigate("/Login");
  };
  const getUser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    name = await json.name;
  };
  console.log(name)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                
                <Link to="/Login">
                  <button className="btn btn-success mx-1" type="submit">
                    Login
                  </button>
                </Link>
                <Link to="/Signup">
                  <button className="btn btn-success mx-1" type="submit">
                    Signup
                  </button>
                </Link>
              </form>
            ) : (
              <div className="d-flex">
                <p style = {{fontSize: "20px", color: "white"}}>{name}</p>
              <button className="btn btn-success" onClick={Logout}>
                Logout
              </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
