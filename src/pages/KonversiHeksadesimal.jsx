import React, { useState } from "react";
import Navbar from "../components/Navbar";

const KonversiHeksaDesimal = () => {
  const [HeksaDesimal, setHeksaDesimal] = useState("");
  const [Konversi, setKonversi] = useState("");
  const [Result, setResult] = useState("");

  const hitung = () => {
    if (HeksaDesimal && Konversi) {
      if (Konversi === "KeDesimal") {
        setResult(HeksaDesimal ? parseInt(HeksaDesimal, 16).toString(10) : "");
      } else if (Konversi === "KeOktal") {
        setResult(HeksaDesimal ? parseInt(HeksaDesimal, 16).toString(8) : "");
      } else {
        setResult(HeksaDesimal ? parseInt(HeksaDesimal, 16).toString(2) : "");
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
            <h1>Konversi Bilangan HeksaDesimal</h1>
          </div>
          <div className="card-body">
            <div className="input-group my-2">
              <span className="input-group-text">HeksaDesimal</span>
              <input
                
                className="form-control"
                value={HeksaDesimal}
                onChange={(e) => setHeksaDesimal(e.target.value)}
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
                <option value="KeDesimal">Desimal</option>
                <option value="KeOktal">Oktal</option>
                <option value="KeBiner">Biner</option>
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

export default KonversiHeksaDesimal;
