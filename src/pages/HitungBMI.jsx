import React, { useState } from "react";
import Navbar from "../components/Navbar";

const HitungBMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("-");
  const [status, setStatus] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const tinggiMeter = height / 100;
      const hasil = (weight / tinggiMeter ** 2).toFixed(2);
      setBMI(hasil);

      if (hasil < 18.5) {
        setStatus("Anda Kurus ~ Makan yang banyak");
      } else if (hasil < 24.9) {
        setStatus("Anda Amaann ~ Pertahankan");
      } else if (hasil < 29.9) {
        setStatus("Anda Gemuk ~ Jangan lupa Olahraga");
      } else {
        setStatus("Anda Obesitas ~ Gak tau lagi");
      }
    } else {
      setBMI("-");
      if (!height && !weight) {
        setStatus("Isi Formnya dulu!!");
      } else if (!weight) {
        setStatus("Isi Beratmu!!");
      } else {
        setStatus("Isi Tinggimu!!");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="App container col-sm-6">
        <div class="card text-center">
          <div class="card-header">
            <h1>Body Mass Index</h1>
          </div>
          <div className="card-body">
            <div className="input-group my-2">
              <span className="input-group-text">Berat (kg)</span>
              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Tinggi (cm)</span>
              <input
                type="number"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="d-grid gap-2 ">
              <button
                type="button"
                className="btn btn-primary"
                id="liveAlertBtn"
                onClick={calculateBMI}
              >
                Hitung
              </button>
            </div>
            <h2>BMI : {bmi}</h2>
            <div id="liveAlertPlaceholder">
              <div>
                <div class="alert alert-success alert-dismissible" role="alert">
                  <div>
                    <p>{status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HitungBMI;
