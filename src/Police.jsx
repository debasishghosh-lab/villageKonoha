import React from "react";
import styles from "./Police.module.css";
import Card from "./Card";

import Itachi from "./assets/itachi.jpeg";
import Sasuke from "./assets/sasuke.jpeg";

import { useNavigate } from "react-router-dom";

function Police() {
  const navigate = useNavigate();

  return (
    <div className={styles.policePage}>
      <nav className={styles.navbar}>
        <h1>Konoha Police Force</h1>
      </nav>

      <div className={styles.sectionCards}>
        <Card
          img={Itachi}
          title="Itachi Uchiha"
          text="
          Self-sacrifice… a nameless shinobi who protects peace within its shadow. That is a true shinobi.
          "
          className={styles.card}
        />
        <Card
          img={Sasuke}
          title="Sasuke Uchiha"
          text="No man chooses evil because it is evil; he only mistakes it for happiness"
          className={styles.card}
        />
      </div>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Back to Welcome Page
        </button>
      </div>

      <footer className={styles.footer}>
        <p>Keep your heart filled with the Will of Fire 🔥</p>
      </footer>
    </div>
  );
}

export default Police;
