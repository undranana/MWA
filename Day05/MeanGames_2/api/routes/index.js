const express = require("express");
const router = express.Router();
const controllerGames = require("../controllers/games_controler");
const controllerPublisher = require("../controllers/publisher_controller");

router.route("/games")
.get(controllerGames.gamesGetAll)
.post(controllerGames.gamesAddOne);

router.route("/games/:gameId")
.get(controllerGames.gamesGetOne)
.delete(controllerGames.deleteGame)
.patch(controllerGames.updateGame)
.put(controllerGames.replaceGame);

router.route("/games/:gameId/publishers")
.get(controllerPublisher.getOne)
.post(controllerPublisher.addOne)
.delete(controllerPublisher.deleteOne)
.patch(controllerPublisher.updateOne)
.put(controllerPublisher.replaceOne);

module.exports = router;
