import React, { useState } from "react";

const HitungBMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const tinggiMeter = height / 100;
      const hasil = (weight / tinggiMeter ** 2).toFixed(2);
      setBMI(hasil);

      if (hasil < 18.5) {
        setStatus(" Kurus ~ Makan yang banyak");
      } else if (hasil < 24.9) {
        setStatus(" Amaann ~ Pertahankan");
      } else if (hasil < 29.9) {
        setStatus(" Gemuk ~ Jangan lupa Olahraga");
      } else {
        setStatus(" Obesitas ~ Gak tau lagi");
      }
    } else {
      setBMI(null);
      setStatus(null);
    }
  };

  return (
    <div class="card text-center col-3">
      <div class="card-header">
        <h1>Body Mass Index</h1>
      </div>
      <label>
        Berat (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Tinggi (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        id="liveAlertBtn"
        onClick={calculateBMI}
      >
        Hitung
      </button>
      <br />
      <h2>BMI: {bmi}</h2>
      <div id="liveAlertPlaceholder">
        <div>
          <div class="alert alert-success alert-dismissible" role="alert">
            <div>
              <p>
                Anda {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitungBMI;
