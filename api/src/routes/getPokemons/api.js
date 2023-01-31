const axios = require("axios");

const apiInfo = async () => {
  try {
    let initialURL = "https://pokeapi.co/api/v2/pokemon";
    let pokemons = [];

    // limit to 40 pokemons
    while (initialURL != null && pokemons.length < 80) {
      let res = await axios.get(initialURL);
      let pokemonsData = res.data;
      let tempPokemons = pokemonsData.results.map((element) => ({
        name: element.name,
        url: element.url,
      }));
      pokemons.push(...tempPokemons);
      initialURL = pokemonsData.next;
      consol

      //subrequest Data Pokemons
      let pokesWithData = await Promise.all(
        pokemons.map(async (element) => {
          let pokemon = await axios.get(element.url);
          return {
            id: pokemon.data.id,
            name: pokemon.data.name,
            img: pokemon.data.sprites.other.home.front_default,
            types: pokemon.data.types.map(item => item),
            hp: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
          };
        })
      );
      return pokesWithData;
    }
  } catch (err) {
    console.error(err);
  }
};

async function apiDetail(arg) {
  try {
    const apiDetail = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${arg}`
    );
    const data = await apiData.data;
    const pokemonDetail = {
      id: data.id,
      name: data.name,
      img: data.sprites.other.home.front_default,
      types: data.types.map((type) => type.name),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
    };
    return pokemonDetail;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { apiInfo, apiDetail };
