import React, { useState } from "react";
import Navbar from "../components/Navbar";

const KonversiDesimal = () => {
  const [Desimal, setDesimal] = useState("");
  const [Konversi, setKonversi] = useState("");
  const [Result, setResult] = useState("");

  const hitung = () => {
    if (Desimal && Konversi) {
      if (Konversi === "KeOktal") {
        setResult(Desimal ? parseInt(Desimal, 10).toString(8) : "");
      } else if (Konversi === "KeBiner") {
        setResult(Desimal ? parseInt(Desimal, 10).toString(2) : "");
      } else {
        setResult(Desimal ? parseInt(Desimal, 10).toString(16) : "");
      }
    } else {
      alert("isi dulu");
    }
  };

  return (
    <>
      <Navbar />

      <div className="App container col-sm-6">
        <div className="card text-center">
          <div className="card-header bg-danger text-white">
            <h1>Konversi Bilangan Desimal</h1>
          </div>
          <div className="card-body">
            <div className="input-group my-2">
              <span className="input-group-text">Desimal</span>
              <input
                type="number"
                className="form-control"
                value={Desimal}
                onChange={(e) => setDesimal(e.target.value)}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Pilihan Konversi</span>
              <select
                className="form-select"
                onChange={(e) => setKonversi(e.target.value)}
                defaultValue={0}
              >
                <option value="0" disabled hidden>
                  Pilih...
                </option>
                <option value="KeOktal">Oktal</option>
                <option value="KeBiner">Biner</option>
                <option value="KeHeksaDesimal">Heksadesimal</option>
              </select>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-grid gap-2 mb-4">
              <button className="btn btn-danger" type="button" onClick={hitung}>
                Hitung
              </button>
            </div>
            <input
              className="form-control"
              type="text"
              value={Result || "-"}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KonversiDesimal;
