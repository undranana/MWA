
const dbConnection = require("./../data/dbconnection");
const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");
const Game = mongoose.model("Game");

const runGeoSearch = function(req, res) {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    const minDist = 0;
    const maxDist = 1000;

    const query = {
        "publisher.location": {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                $maxDistance: maxDist,
                $maxDistance: minDist
            }
        }
    }
    Game.find(query).exec(function(err, games){
        console.log("In geo search");
        res.status(200).json({"message" : games});
    });
}

const getAll = function (req, res) {
    console.log("Get games conroller");

    if (req.query && req.query.lng) {
        runGeoSearch(req, res);
        return;
    }

    let offset = 0;
    let count = 5;
    const maxCount = 10;
    //db connection
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
        if (count > maxCount) {
            count = maxCount;
        }
    }
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString offset and count should be integers." });
    }
    Game.find().skip(offset).limit(count).exec(function (err, games) {
        if (err) {
            console.log("Error in finding games : ", err);
            res.status(500).json(err);
        } else {
            console.log("Found games");
            res.status(200).json(games);
        }


    });
};

const getOne = function (req, res) {
    console.log("Get one game conroller",req.params.gameId);
    const gameId = req.params.gameId;
    if (!mongoose.isValidObjectId(req.params.gameId)) {
        res.status(400).json({ "message": "invalid game ID passed" });
    } else {
        Game.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("Error in finding game : ", err);
                res.status(500).json(err);
            } else {
                if (!game) {
                    res.status(404).json({ "message": "Game not found" });
                } else {
                    res.status(200).json({ "data": game });
                }
            }

        });
    }

};

const addOne = function (req, res) {
    console.log("Add game request");
    const newGame = {
        title: req.body.title,
        price: req.body.price
    };
    Game.create(newGame, function (err, result) {
        if (err) {
            console.log("Error in creating a game : ", err);
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = {
    gamesGetAll: getAll,
    gamesGetOne: getOne,
    gamesAddOne: addOne
}
