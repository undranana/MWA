const express = require("express");
const router = express.Router();
const controllerGames = require("../controllers/games_controler");

router.route("/games")
.get(controllerGames.gamesGetAll)
.post(controllerGames.gamesAddOnde);

router.route("/games/:gameId")
.get(controllerGames.gamesGetOne)

module.exports = router;
