import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  pokemonsPerPage,
  allPokemons,
  pagination,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      pagination(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      pagination(currentPage + 1);
    }
  };

  const active = styles.active;

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.items}>
          <a href="#" className={styles.a} onClick={handlePrev}>
            &lt;
          </a>
        </li>
        {pageNumbers?.map((number) => (
          <li
            className={`${styles.items} ${
              currentPage === number ? active : ""
            }`}
            key={number}
          >
            <a href="#" className={styles.a} onClick={() => pagination(number)}>
              {number}
            </a>
          </li>
        ))}
        {/* <li className={`${styles.items} ${currentPage === 1 ? active : ""}`}>
          {currentPage}
        </li> */}
        <li className={styles.items}>
          <a href="#" className={styles.a} onClick={handleNext}>
            &gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
