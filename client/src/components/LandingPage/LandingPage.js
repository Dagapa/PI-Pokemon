import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import Logo from "../../assets/pokemon-logo.png";

export default function LandingPage() {
  return (
    <div className={styles.bg}>
      <img src={Logo} alt="Logo" className={styles.image} />
      <Link to="/home">
        <button className={styles.init}>Iniciar</button>
      </Link>
    </div>
  );
}
