const mongoose = require("mongoose");
const Game = mongoose.model("Game");

addOne = function(req, res) {
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function (err, game) {
    if (err) {
        console.log("Error finding game");
        res.status(500).json(err);
    } else {
        if (!game) {
            console.log("Game not found");
            res.status(404).json({"message" : "Game not found"});
        } else {
            const newPublisher = {
                name : req.body.name,
                country: req.body.country
            }
            game.publisher = newPublisher;
            game.save(function(err, result){
                if(err) {
                    res.status(500).json(err);
                } else {
                    res.status(201).json(result);
                }
            });
        }
    }
});

}

getOne = function (req, res) {
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function (err, game) {
        if (err) {
            console.log("Error finding game");
            res.status(500).json(err);
        } else {
            if (!game) {
                console.log("Game not found");
                res.status(404).json({"message" : "Game not found"});
            } else {
                res.status(200).json(game.publisher);
            }
        }
    })

}

deleteOne = function (req, res) {
    console.log("Delete publisher");
    const gameId = req.params.gameId;
    console.log(req.params);
    Game.findById(gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message" : "Error deleting a document" + err});
        } else {
            if (!game) {
                res.status(404).json({"message" : "Game not found"});
            } else {
                game.publisher.remove(function(err, result) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        game.save(function(err, result) {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                res.status(200).json(result);
                            }
                        });
                        
                    }
                });
            }
        }
    });
}

updateOne = function(req, res) {
    Students.findById(req.params.gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message": "Error finding game"});
        } else {
            const publisher = game.publisher;
            if (! publisher) {
                res.status(404).json({"message" : "Publisher not found"});
            } else {
                if (req.body.name) {
                    publisher.name = req.body.name;
                }
                if (req.body.country) {
                    publisher.country = req.body.country;
                }
                game.save(function(err, response) {
                    if (err) {
                        res.status(500).json({"message": "Error updating publisher"});
                    } else {
                        res.status(200).json(response);
                    }
                });
            }
        }
    });
}

replaceOne = function(req, res) {
    Students.findById(req.params.gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message": "Error finding game"});
        } else {
            const newPublisher = {
                name : req.body.name,
                country : req.body.country
            }
            game.publisher = newPublisher;
            game.save(function(err, response) {
                if (err) {
                    res.status(500).json({"message": "Error updating publisher"});
                } else {
                    res.status(200).json(response);
                }
            });
        }
    });
}

module.exports = {
    addOne : addOne,
    getOne: getOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    replaceOne: replaceOne
};