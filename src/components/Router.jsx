import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/Apropos";

const Router = () => {
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

export default Router;
