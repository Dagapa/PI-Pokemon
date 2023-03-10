import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ name, image, types, id }) {
  const itemTypes = types.map((type) => type);
  const detailTypes = itemTypes.map((type) => type);

  function capitalize(name) {
    if (name.length === 0) {
      return "";
    }
    if (name.charAt(0).toUpperCase() === name.charAt(0)) {
      return name;
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div>
      <NavLink className={styles.none} to={`/pokemons/${id}`}>
        <div>
          <p className={styles.id}>{id}</p>
          <img
            className={styles.img}
            src={image}
            alt="Pokemon"
            width="200px"
            height="250vh"
          />
          <h2>{capitalize(name)}</h2>
          <div className={styles.types}>
            {detailTypes?.map((element, index) => {
              if (typeof element.type !== "undefined") {
                return (
                  <button className={styles.typesButton} key={index}>
                    {" "}
                    {element.type.name}{" "}
                  </button>
                );
              } else {
                return (
                  <button className={styles.typesButton} key={index}>
                    {" "}
                    {element.name}{" "}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </NavLink>
    </div>
  );
}
