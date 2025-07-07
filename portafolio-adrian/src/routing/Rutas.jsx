import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import Inicio from "../components/pages/Inicio";
import About from "../components/pages/About";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <section id="content" className="content">
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
