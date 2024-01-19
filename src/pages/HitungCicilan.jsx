import React, { useState } from "react";
import Navbar from "../components/Navbar";

const HitungCicilan = () => {
  const [nominal, setNominal] = useState("");
  const [bunga, setBunga] = useState("");
  const [periode, setPeriode] = useState("");
  const [result, setResult] = useState(null);

  const hitung = () => {
    if (nominal && bunga && periode) {
      let pinjaman = nominal / periode;
      let Bunga = (nominal * bunga) / 100 / periode;
      let total = pinjaman + Bunga;
      
      setResult(
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(total)
      );
    } else {
      setResult(null);
    }
  };

  return (
    <>
      <Navbar />

      <div className="App container col-sm-6">
        <div className="card text-center">
          <div className="card-header">
            <h1>Cicilan Bank</h1>
          </div>
          <div className="card-body">
            <div className="input-group my-2">
              <span className="input-group-text">Nominal</span>
              <input
                type="number"
                name="nominal"
                className="form-control"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Bunga</span>
              <input
                type="number"
                name="bunga"
                className="form-control"
                value={bunga}
                onChange={(e) => setBunga(e.target.value)}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Periode</span>
              <select
                className="form-select"
                name="periode"
                onChange={(e) => setPeriode(e.target.value)}
                defaultValue={0}
              >
                <option value="0" disabled hidden>
                  Pilih...
                </option>
                <option value="3">3 Bulan</option>
                <option value="6">6 Bulan</option>
                <option value="12">12 Bulan</option>
              </select>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-grid gap-2 mb-4">
              <button
                className="btn btn-primary"
                type="button"
                onClick={hitung}
              >
                Hitung
              </button>
            </div>
            <input
              className="form-control"
              type="text"
              value={result || "-"}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HitungCicilan;
