import React from "react";
import "./App.css";
import { Garage } from "./Components/Garage";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header/>
      <h1>Aula - Componentes React da Conway</h1>
      <Garage />
      <Garage />
      <Garage />
      <Garage />
      <Footer/>
    </div>
  );
}
