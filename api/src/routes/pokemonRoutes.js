const express = require("express");
const { Pokemon, Type } = require("../db");
const { getAllPokemon } = require("./index");

const router = express.Router();

router.get("/", async (req, res) => {
  const allPokes = await getAllPokemon();
  try {
    if (allPokes.length > 0) {
      return res.status(200).send({ allPokes });
    }
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allPokesId = await getAllPokemon();
  try {
    const pokemon = allPokesId.find((item) => item.id === id);
    if (!pokemon) {
      return res.status(404).send({ error: "Pokemon not found" });
    }
    return res.status(200).send(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const allPokes = await getAllPokemon();
  const { name, hp, attack, defense, speed, height, weight, img, types } =
    req.body;
  try {
    if (name) {
      const exist = allPokes.find((item) => item.name === name);
      if (exist) {
        return res.status(409).send({ error: "Pokemon already exists" });
      }
      const newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        types,
      });
      const typeDb = await Type.findAll({
        where: {
          name: types,
        },
      });
      newPokemon.addType(typeDb);
      return res.status(201).send(newPokemon);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
