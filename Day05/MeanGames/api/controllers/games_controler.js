const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");
const Game = mongoose.model("Game");

getAll = function (req, res) {
    console.log("Get games conroller");
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

getOne = function (req, res) {
    console.log("Get one game conroller");
    const gameId = req.params.gameId;
    if (!mongoose.isValidObjectId(req.params.gameId)) {
        res.status(400).json({ "message": "invalid game ID passed" });
    } else {
        Game.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("Error in finding game : ", err);
                res.status(500).json(err);
            } else {
                console.log(game);
                if (!game) {
                    res.status(404).json({ "message": "Game not found" });
                } else {
                    res.status(200).json({ "jsondata": game });
                }
            }

        });
    }

};

addOne = function (req, res) {
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
deleteGame = function(req, res) {
    console.log("Delete game");
    const gameId = req.params.gameId;
    console.log(req.params);
    Game.findById(gameId).deleteOne().exec(function(err, response) {
        if (err) {
            res.status(500).json({"message" : "Error deleting a document" + err});
        } else {
            if (!response) {
                res.status(404).json({"message" : "Game not found"});
            } else {
                res.status(200).json({"message" : response});
            }
        }
    });
}

updateGame = function(req, res) {
    Students.findById(req.params.gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message": "Error finding game"});
        } else {
            if (req.body.title) {
                game.name = req.body.title;
            }
            if (req.body.price) {
                game.price = req.body.price;
            }
            if (req.body.minage) {
                game.minage = req.body.minage;
            }
            if (req.body.rate) {
                game.rate = req.body.rate;
            }
            game.save(function(err, response) {
                if (err) {
                    res.status(500).json({"message": "Error updating game"});
                } else {
                    res.status(200).json(response);
                }
            });
        }
    });
}

replaceGame = function(req, res) {
    Students.findById(req.params.gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message": "Error finding game"});
        } else {
            if (!game) {
                res.status(404).json({"message": "Game not found"});
            } else {
                game.title = req.body.title;
                game.price = req.body.price;
                game.minage = req.body.minage;
                game.rate = req.body.rate;
                game.save(function(err, response) {
                    if (err) {
                        res.status(500).json({"message": "Error relacing game"});
                    } else {
                        res.status(200).json({"message" : response});
                    }
                });
            }
        }
    })
}

module.exports = {
    gamesGetAll: getAll,
    gamesGetOne: getOne,
    gamesAddOne: addOne,
    deleteGame: deleteGame,
    updateGame: updateGame,
    replaceGame: replaceGame
}
