const axios = require("axios");
const express = require("express");
const { Type } = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const type = await axios.get("https://pokeapi.co/api/v2/type");
  const response = type.data;
  try {
    let types = response.results.map((element) => element.name);
    types.forEach((type) => {
      Type.findOrCreate({
        where: {
          name: type,
        },
      });
    });
    const allTypes = await Type.findAll();
    return res.status(200).send(allTypes);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
