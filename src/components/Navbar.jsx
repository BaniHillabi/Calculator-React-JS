import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Kalkulatorku
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Hitung Harga
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/HitungBMI" className="nav-link">
                Body Mass Index
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/HitungCicilan" className="nav-link">
                Hitung Cicilan
              </Link>
            </li>

            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Konversi
              </button>
              <ul class="dropdown-menu dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/KonversiBiner">
                    Konversi Biner
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/KonversiOktal">
                    Konversi Oktal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/KonversiDesimal">
                    Konversi Desimal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/KonversiHeksaDesimal">
                    Konversi Heksadesimal
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
