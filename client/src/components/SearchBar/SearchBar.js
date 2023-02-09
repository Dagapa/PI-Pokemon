import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, cleanPokemons } from "../../redux/actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanPokemons(dispatch))
    dispatch(getPokemonByName(name));
    setName("");
  };

  return (
    <div className={styles.search}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={name}
          className={styles.input}
        />
        <button className={styles.btn}>Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
