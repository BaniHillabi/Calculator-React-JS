import React, { useState } from "react";
import Navbar from "../components/Navbar";

const KonversiBiner = () => {
  const [Biner, setBiner] = useState("");
  const [Konversi, setKonversi] = useState("");
  const [Result, setResult] = useState("");

  const hitung = () => {
    if (Biner && Konversi) {
      if (Konversi === "KeOktal") {
        setResult(Biner ? parseInt(Biner, 2).toString(8) : "");
      } else if (Konversi === "KeDesimal") {
        setResult(Biner ? parseInt(Biner, 2).toString(10) : "");
      } else {
        setResult(Biner ? parseInt(Biner, 2).toString(16) : "");
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
            <h1>Konversi Bilangan Biner</h1>
          </div>
          <div className="card-body">
            <div className="input-group my-2">
              <span className="input-group-text">Biner</span>
              <input
                type="number"
                className="form-control"
                value={Biner}
                onChange={(e) => setBiner(e.target.value)}
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
                <option value="KeDesimal">Desimal</option>
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

export default KonversiBiner;
