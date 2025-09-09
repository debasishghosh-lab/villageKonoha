import Card from "./Card.jsx";

import Hashirama from "./assets/Hasirama.jpeg";
import Hiruzen from "./assets/Hiruzen.jpeg";
import Kakashi from "./assets/kakashi.jpg";
import Minato from "./assets/minato.jpeg";
import Naruto from "./assets/naruto.jpg";
import Tobirama from "./assets/Tobirama.jpeg";
import Tsunade from "./assets/tsunade.jpg";
import { useNavigate } from "react-router-dom";
function Hokages() {
    const navigate = useNavigate();

    return(
        
        <>  
            <div className="hokage-page">
            <nav className="navbar">
                <h1>KONOHA HOKAGES</h1>
                 <button className="back-button" onClick={() => navigate("/")}>
                     ← Back to Welcome
            </button>
            </nav>
           
            <div className="card-container">
            <Card img={Hashirama} title="Hashirama Senju" text="The First Hokage" />
            <Card img={Tobirama} title="Tobirama Senju" text="The Second Hokage" />
            <Card img={Hiruzen} title="Hiruzen Sarutobi" text="The Third Hokage" />
            <Card img={Minato} title="Minato Namikaze" text="The Fourth Hokage" />
            <Card img={Tsunade} title="Tsunade Senju" text="The Fifth Hokage" />
            <Card img={Kakashi} title="Kakashi Hatake" text="The Sixth Hokage" />
            <Card img={Naruto} title="Naruto Uzumaki" text="The Seventh Hokage" />
            </div>
             <footer className="footer">
                <p>Keep your heart filled with the Will of Fire 🔥</p>
            </footer>
            </div>
            
        </>
    )
}

export default Hokages;