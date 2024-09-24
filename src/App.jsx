import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos";
import "./sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
