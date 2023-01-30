const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const apiInfo = require("./getPokemons/api");
const dbInfo = require("./getPokemons/db");
const pokeRoute = require("./pokemonRoutes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('pokemons', pokeRoute);

const getAllPokemon = async () => {
  const apiPoke = await apiInfo();
  const dbPoke = await dbInfo();
  return apiPoke.concat(dbPoke);
};

module.exports = { router, getAllPokemon };
