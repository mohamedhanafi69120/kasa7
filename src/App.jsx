import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos";
import Erreur from "./pages/Erreur/Erreur";
import Logement from "./pages/Logement/Logement";
import Footer from "./components/Footer/Footer";

import "./sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
