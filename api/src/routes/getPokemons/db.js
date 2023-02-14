const axios = require("axios");
const { Pokemon, Type } = require("../../db");

const dbInfo = async () => {
  console.log(Type);
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = dbInfo;
