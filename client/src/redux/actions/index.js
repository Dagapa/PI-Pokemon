import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_NAME = "ORDER_NAME";
export const FILTER_TYPE = "FILTER_TYPE";
export const ORDER_STR = "FILTER_STR";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const POST_POKEMON = "POST_POKEMON";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/pokemons";
      let pokemons = await axios.get(url);
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons.data.allPokes,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const cleanPokemons = (dispatch) => {
  return dispatch({
    type: CLEAN_POKEMONS,
    payload: [],
  });
};

export const getAlltypes = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/types";
      let types = await axios.get(url);
      return dispatch({
        type: GET_ALL_TYPES,
        payload: types.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const orderName = (payload) => {
  return {
    type: ORDER_NAME,
    payload,
  };
};

export const filterType = (payload) => {
  console.log(payload);
  return {
    type: FILTER_TYPE,
    payload,
  };
};

export const filterStr = (payload) => {
  return {
    type: ORDER_STR,
    payload,
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    const pokeName = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    try {
        return dispatch({
          type: GET_POKEMON_NAME,
          payload: [pokeName.data],
        });
      
    } catch (err) {
      console.error(err);
    }
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/pokemons/${id}`);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export const cleanDetail = (dispatch) => {
  return dispatch({
    type: CLEAN_DETAIL,
    payload: [],
  });
};

export const postPokemon = (payload) => {
  return async () => {
    try {
      const createPoke = await axios.post(
        "http://localhost:3001/pokemons",
        payload
      );
      return createPoke;
    } catch (err) {
      console.error(err);
    }
  };
};
