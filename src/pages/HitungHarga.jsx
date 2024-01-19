import React, { useState } from "react";
import Navbar from "../components/Navbar";
const HitungHarga = () => {
  const [hargaAwal, setHargaAwal] = useState("");
  const [PPN, setPPN] = useState();
  const [diskon, setDiskon] = useState();
  const [hargaAkhir, setHargaAkhir] = useState(null);

  const calculatePrice = () => {
    if (hargaAwal) {
      const harga = parseFloat(hargaAwal);
      const discount = parseFloat(diskon);
      const pajak = parseFloat(PPN);

      const hitungDiskon = harga * ((100 - discount) / 100);
      const total = hitungDiskon * ((100 + pajak) / 100);

      setHargaAkhir(
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(total)
      );
    } else {
      setHargaAkhir("-");
    }
  };

  return (
    <>
      <Navbar />

      <div className="App container col-sm-6">
        <div className="card text-center">
          <div className="card-header bg-danger text-white">
            <h1>Hitung Harga Akhir</h1>
          </div>
          <div className="card-body">
            <div className="input-group my-2">
              <span className="input-group-text">Harga Awal</span>
              <input
                type="number"
                className="form-control"
                value={hargaAwal}
                onChange={(e) => setHargaAwal(e.target.value)}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Diskon (%)</span>
              <input
                type="number"
                className="form-control"
                value={diskon}
                onChange={(e) => setDiskon(e.target.value)}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">PPN (%)</span>
              <input
                className="form-control"
                value={PPN}
                onChange={(e) => setPPN(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-grid gap-2 mb-4">
              <button
                className="btn btn-danger"
                type="button"
                onClick={calculatePrice}
              >
                Hitung
              </button>
            </div>
            <input
              className="form-control"
              type="text"
              value={hargaAkhir || "-"}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HitungHarga;
