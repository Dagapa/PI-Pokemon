import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail, cleanPokemons } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.pokeDetail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => {
      dispatch(cleanDetail(dispatch), cleanPokemons(dispatch));
    };
  }, [dispatch, props.match.params.id]);

  const renderTypes = () => {
    if (myPokemon && myPokemon.types) {
      const pokeDetails = myPokemon.types;
      return pokeDetails.map((element) => {
        if (typeof element.type === "undefined") {
          return <button className={styles.types}>{element.name}</button>;
        } else {
          return <button className={styles.types}>{element.type.name}</button>;
        }
      });
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{myPokemon.name}</h2>
        <p className={styles.id}>{myPokemon.id}</p>
        <img src={myPokemon.img} />
        {renderTypes()}
        <h5 className={styles.stats}>HP: {myPokemon.hp}</h5>
        <h5 className={styles.stats}>Attack: {myPokemon.attack}</h5>
        <h5 className={styles.stats}>Defense: {myPokemon.defense}</h5>
        <h5 className={styles.stats}>Speed: {myPokemon.speed}</h5>
        <h5 className={styles.stats}>Height: {myPokemon.height}</h5>
        <h5 className={styles.stats}>Weight: {myPokemon.weight}</h5>
      </div>
      <div>
        <Link to="/home">
          <button className={styles.btn}>Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
