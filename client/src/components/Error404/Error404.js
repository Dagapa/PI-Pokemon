import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";
import pikachu from "../../assets/pokemon_go_play_game_charcter_icon-icons.com_69165.svg";

const Error404 = () => {
  return (
    <div>
      <h1 className={styles["title-404"]}>404</h1>
      <img src={pikachu} />
      <p className={styles["text-404"]}>Oops! Pagina no encontrada.</p>
      <p>Regrese a la página inicial, es mejor.</p>
      <Link to={'/Home'}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};
export default Error404;
