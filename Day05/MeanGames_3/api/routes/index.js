const express = require("express");
const router = express.Router();
const controllerGames = require("../controllers/games_controler");

router.route("/games")
.get(controllerGames.gamesGetAll)
.post(controllerGames.gamesAddOne);

router.route("/games/:gameId")
.get(controllerGames.gamesGetOne)
.delete(controllerGames.deleteGame)
.patch(controllerGames.updateGame)
.put(controllerGames.replaceGame);

module.exports = router;
