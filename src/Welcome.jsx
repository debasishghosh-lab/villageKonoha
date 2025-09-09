import MedicalIcon from "./assets/medical.jpeg";
import HokageIcon from "./assets/hokage.webp";
import PoliceIcon from "./assets/police.jpeg";

import LeftImage from "./assets/LeftImage.png";
import RightImage from "./assets/RightImage.png";

import "./Welcome.css";
import Card from "./Card";

import { useNavigate } from "react-router-dom";


function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-page">
      <nav className="navbar">
        <h1>Welcome to Konoha</h1>
      </nav>

      <div className="content-area">
        

        <div className="section-cards">
          
          <Card img={MedicalIcon} title="Medical Department" onClick={() => navigate("/medical")} />
          <Card img={HokageIcon} title="Hokages" onClick={() => navigate("/hokages")} />

          <Card img={PoliceIcon} title="Police Force" onClick={() => navigate("/police")} />
        
        </div>

        
      </div>

      <footer className="footer">
        <p>Keep your heart filled with the Will of Fire 🔥</p>
      </footer>
    </div>
  );
}

export default Welcome;
