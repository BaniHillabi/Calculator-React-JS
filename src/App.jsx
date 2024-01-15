import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
