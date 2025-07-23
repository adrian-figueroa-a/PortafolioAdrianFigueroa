import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/footer";
import Inicio from "../components/pages/Inicio";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
