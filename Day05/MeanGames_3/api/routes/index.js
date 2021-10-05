const express = require("express");
const router = express.Router();
const controllerGames = require("../controllers/games_controler");
const controllerPublisher = require("../controllers/publisher_controller");
const controllerReviews = require("../controllers/reviews_controller");

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

router.route("/games/:gameId/reviews")
.get(controllerReviews.getAll)
.post(controllerReviews.addOne)

router.route("/games/:gameId/reviews/:reviewID")
.get(controllerReviews.getOne)
.delete(controllerReviews.deleteOne)
.patch(controllerReviews.updateOne)
.put(controllerReviews.replaceOne);


module.exports = router;
