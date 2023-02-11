const axios = require("axios");
const express = require("express");
const { Type } = require("../db");

const router = express.Router();

let types;

router.get("/", async (req, res) => {
  if (!types) {
    const type = await axios.get("https://pokeapi.co/api/v2/type");
    types = type.data.results.map((element) => element.name);
  }

  try {
    await Type.bulkCreate(
      types.map((type) => ({
        name: type,
      }))
    );

    const allTypes = await Type.findAll();
    return res.status(200).send(allTypes);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
