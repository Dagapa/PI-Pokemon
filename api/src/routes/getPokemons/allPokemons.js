const { apiInfo } = require("./api");
const dbInfo = require("./db");

const getAllPokemon = async () => {
  const apiPoke = await apiInfo();
  const dbPoke = await dbInfo();
  return apiPoke.concat(dbPoke);
};

module.exports = getAllPokemon;
