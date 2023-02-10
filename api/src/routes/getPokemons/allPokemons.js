const { apiInfo } = require("./api");
const dbInfo = require("./db");

const getAllPokemon = async () => {
  const apiPoke = await apiInfo();
  const dbPoke = await dbInfo();
  console.log(dbPoke.length, apiPoke.length);
  return apiPoke.concat(dbPoke);
  // return [...apiPoke,...dbPoke];
};

module.exports = getAllPokemon;
