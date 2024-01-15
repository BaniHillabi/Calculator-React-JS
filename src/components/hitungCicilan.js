import React, { useState } from "react";

const hitungCicilan = () => {
  const [nominal, setNominal] = useState("");
  const [bunga, setBunga] = useState("");
  const [periode, setPeriode] = useState("");
  const [cicilan, setCicilan] = useState("");

  const hitungCicilan = () => {
    const nominalFloat = parseFloat(nominal);
    const bungaFloat = parseFloat(bunga);
    const periodeInt = parseInt(periode);

    if (!isNaN(nominalFloat) && !isNaN(bungaFloat) && !isNaN(periodeInt)) {
      const bungaBulanan = bungaFloat / 100 / 12;
      const pembayaranBulanan =
        (nominalFloat * bungaBulanan) / (1 - Math.pow(1 + bungaBulanan, -periodeInt));
      setCicilan(pembayaranBulanan.toFixed(2));
    } else {
      alert('Masukkan angka yang valid untuk nominal, bunga, dan periode.');
    }
  };

  return (
    <div class="card text-center col-3">
      <div class="card-header">
        <h1>Cicilan Bank</h1>
      </div>
      <label>
        Nominal (Rp) :
        <input
          type="number"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Bunga (%):
        <input
          type="number"
          value={bunga}
          onChange={(e) => setBunga(e.target.value)}
        />
      </label>
      <select
        className="form-control"
        value={periode}
        onChange={(e) => setPeriode(e.target.value)}
      >
        <option value="success">12Bulan</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
        <option value="info">Info</option>
      </select>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        id="liveAlertBtn"
        onClick={hitungCicilan}
      >
        Hitung
      </button>
      <br />
      {cicilan && <p>Nominal Cicilan Bulanan: {cicilan} per bulan</p>}
    </div>
  );
};

export default hitungCicilan;
