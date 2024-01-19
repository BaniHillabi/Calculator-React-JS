import React from "react";
import { Route, Routes } from "react-router-dom";

import HitungBMI from "../pages/HitungBMI";
import HitungCicilan from "../pages/HitungCicilan";
import NotFound from "../pages/NotFound";
import HitungHarga from "../pages/HitungHarga";
import KonversiBiner from "../pages/KonversiBiner";
import KonversiOktal from "../pages/KonversiOktal";
import KonversiDesimal from "../pages/KonversiDesimal";
import KonversiHeksaDesimal from "../pages/KonversiHeksadesimal";

const Utama = () => {
  return (
    <Routes>
      <Route exact path="/" Component={HitungHarga} />
      <Route path="/HitungBMI" Component={HitungBMI} />
      <Route path="/HitungCicilan" Component={HitungCicilan} />
      <Route path="/KonversiBiner" Component={KonversiBiner} />
      <Route path="/KonversiOktal" Component={KonversiOktal} />
      <Route path="/KonversiDesimal" Component={KonversiDesimal} />
      <Route path="/KonversiHeksadesimal" Component={KonversiHeksaDesimal} />
      <Route path="/*" Component={NotFound} />
    </Routes>
  );
};

export default Utama;
