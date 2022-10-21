const express = require("express");
const router = express.Router();

const { getHeroes, getHeroesById } = require("./get.hendlers");
const { postHero } = require("./post.hendlers");
const { updateHeroesById } = require("./patch.hendlers");
const { deleteHeroesById } = require("./delete.hendlers");

router.get("/api/heroes", getHeroes);
router.get("/api/heroes/:id", getHeroesById);
router.post("/api/heroes", postHero);
router.patch("/api/heroes/:id", updateHeroesById);
router.delete("/api/heroes/:id", deleteHeroesById);

module.exports = router;
