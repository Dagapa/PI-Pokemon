import React from "react";
import { Link } from "react-router-dom";
import pokeBola from "../../assets/Pokeball_icon-icons.com_67533.svg";
import create from "../../assets/Bag_icon-icons.com_67588.svg";
import all from '../../assets/Pokemon_Go-17_icon-icons.com_67645.svg'
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.pokemones}>
        <Link to={"/home"}>
          <div className={styles.nav_all}>
            <img src={all}/>
            <h3>Pokemones</h3>
          </div>
        </Link>
      </div>
      <div className={styles.nav_home}>
        <Link to={"/"}>
          <img src={pokeBola} />
        </Link>
      </div>
      <div>
        <Link to={"/create"}>
          <div className={styles.nav_create}>
            <img src={create} />
            <h3>Create</h3>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
