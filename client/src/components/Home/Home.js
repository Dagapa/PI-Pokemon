import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemons, getPokemons } from "../../redux/actions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Nav from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [order, setOrder] = useState("");
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getPokemons());
    
  };

  return (
    <div>
      {allPokemons.length > 0 ? (
        <div>
          <Nav />
          <div className={styles.home}>
            <div className={styles.filters}>
              <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
              <button
                className={styles.btn}
                onClick={(event) => {
                  handleClick(event);
                }}
              >
                Clear filters
              </button>
            </div>
            <div>
              <div className={styles.cards}>
                {currentPokemons.map((element, index) => {
                  return (
                    <div key={index} className={styles.card}>
                      <Card
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        image={element.img}
                        types={element.types}
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <Pagination
                  pokemonsPerPage={pokemonsPerPage}
                  allPokemons={allPokemons.length}
                  pagination={pagination}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
