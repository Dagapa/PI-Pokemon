import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.pokemones}>
        <Link to={"/home"}>Pokemones</Link>
      </div>
      <div className={styles.nav_home}>
        <Link to={"/"}>Start</Link>
      </div>
      <div >
        <Link to={"/create"}>Create</Link>
      </div>
    </nav>
  );
};

export default NavBar;
