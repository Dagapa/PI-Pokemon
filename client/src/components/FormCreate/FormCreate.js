import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAlltypes, postPokemon, cleanPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FormCreate.module.css";

const PokemonCreate = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const newPokemon = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    img: "",
  };

  const [input, setInput] = useState(newPokemon);

  //Validate a inputs value

  let noEmpty = /\S+/;
  let validateName = /^[a-z]+$/i;
  let validateNum = /^\d+$/;
  let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;

  const validate = (input) => {
    let errors = {};
    if (
      !noEmpty.test(input.name) ||
      !validateName.test(input.name) ||
      input.name.length < 3
    ) {
      errors.name =
        "Name required. Only string of more than two characters and without numbers";
    }
    if (!validateNum.test(input.hp) || parseInt(input.hp) < 1) {
      errors.hp = "Number required. Higher than one";
    }
    if (!validateNum.test(input.attack) || parseInt(input.attack) < 1) {
      errors.attack = "Number required. Higher than one";
    }
    if (!validateNum.test(input.defense) || parseInt(input.defense) < 1) {
      errors.defense = "Number required. Higher than one";
    }
    if (!validateNum.test(input.speed) || parseInt(input.speed) < 1) {
      errors.speed = "Number required. Higher than one";
    }
    if (!validateNum.test(input.height) || parseInt(input.height) < 1) {
      errors.height = "Number required. Higher than one";
    }
    if (!validateNum.test(input.weight) || parseInt(input.weight) < 1) {
      errors.weight = "Number required. Higher than one";
    }
    if (!validateUrl.test(input.img)) {
      errors.img = "URL required";
    }

    return errors;
  };

  // handle functions
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, event.target.value],
      });
      event.target.value = "Select type";
    } else {
      alert("Two types of pokemon at most");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      dispatch(postPokemon(input));
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        img: "",
      });
      dispatch(cleanPokemons(dispatch));
      history.push("/home");
    } else {
      alert("Error. Check the form");
    }
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  };

  useEffect(() => {
    dispatch(getAlltypes());
  }, [dispatch]);


  return (
    <div className={styles.container}>
      <Link to="/home">
        <button className={styles.btn}>Go Back</button>
      </Link>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className={styles.h2}>Create a pokemón!</h2>
        <div className={styles.div}>
          <div className={styles.divito}>
            <label className={styles.label}>Name:</label>
            <input
              className={styles.input}
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Name"
            />
            <p className={styles.p}>{errors.name}</p>
            <label className={styles.label}>HP:</label>
            <input
              className={styles.input}
              type="number"
              value={input.hp}
              name="hp"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="HP"
            />
            <p className={styles.p}>{errors.hp}</p>
            <label className={styles.label}>Attack:</label>
            <input
              className={styles.input}
              type="number"
              value={input.attack}
              name="attack"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Attack"
            />
            <p className={styles.p}>{errors.attack}</p>
            <label className={styles.label}>Defense:</label>
            <input
              className={styles.input}
              type="number"
              value={input.defense}
              name="defense"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Defense"
            />
            <p className={styles.p}>{errors.defense}</p>
          </div>
          <div className={styles.divito}>
            <label className={styles.label}>Speed:</label>
            <input
              className={styles.input}
              type="number"
              value={input.speed}
              name="speed"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Speed"
            />
            <p className={styles.p}>{errors.speed}</p>
            <label className={styles.label}>Height:</label>
            <input
              className={styles.input}
              type="number"
              value={input.height}
              name="height"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Height"
            />
            <p className={styles.p}>{errors.height}</p>
            <label className={styles.label}>Weight:</label>
            <input
              className={styles.input}
              type="number"
              value={input.weight}
              name="weight"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Weight"
            />
            <p className={styles.p}>{errors.weight}</p>
            <label className={styles.label}>Image:</label>
            <input
              className={styles.input}
              type="text"
              value={input.img}
              name="img"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="URL Image..."
            />
            <p className={styles.p}>{errors.img}</p>
          </div>
        </div>
        <div>
          <select
            className={styles.select}
            onChange={(event) => {
              handleSelect(event);
            }}
          >
            <option>Select type</option>
            {types?.map((element) => {
              return (
                <option key={element.id} value={element.name}>
                  {element.name}
                </option>
              );
            })}
          </select>
          {input.types.map((element) => {
            return (
              <div className={styles.typesSelect} key={element}>
                <p className={styles.pTypes}>{element}</p>
                <button
                  className={styles.btnDelete}
                  onClick={() => {
                    handleDelete(element);
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <button className={styles.btnCreate} type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default PokemonCreate;
