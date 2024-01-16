import React from "react";
import { Route, Routes } from "react-router-dom";

import HitungBMI from "../pages/HitungBMI";
import HitungCicilan from "../pages/HitungCicilan";
import Beranda from "../pages/Beranda";
import NotFound from "../pages/NotFound";

const Utama = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Beranda} />
      <Route path="/HitungBMI" Component={HitungBMI} />
      <Route path="/HitungCicilan" Component={HitungCicilan} />
      <Route path="/*" Component={NotFound} />
    </Routes>
  );
};

export default Utama;
