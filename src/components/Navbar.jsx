import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <hr />
      <div className="container text-center">
        <div className="row">
          <div className="col-6 col-md-4">
            <Link to="/" className="btn btn-primary">
              Beranda
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link to="/HitungBMI" className="btn btn-primary">
              Body Mass Index
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link to="/HitungCicilan" className="btn btn-primary">
              Hitung Cicilan
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
