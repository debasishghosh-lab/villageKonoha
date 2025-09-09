import React from "react";
import Card from "./Card";
import Sakura from "./assets/sakura.jpeg"; 
import Shizune from "./assets/shizune.jpeg"; 
import { useNavigate } from "react-router-dom";
import "./Medical.css";

function Medical() {
  const navigate = useNavigate();

  return (
    <div className="medical-page">
      <nav className="navbar">
        <h1>Konoha Medical Department</h1>
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Welcome
        </button>
      </nav>

      <div className="medical-cards">
        <Card img={Sakura} title="Sakura Haruno" text="Chief Medic " />
        <Card img={Shizune} title="Shizune" text=" Supporting Medic" />
      </div>

      <footer className="footer">
        <p>Keep your heart filled with the Will of Fire 🔥</p>
      </footer>
    </div>
  );
}

export default Medical;
