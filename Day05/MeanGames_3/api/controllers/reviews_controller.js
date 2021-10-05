const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Game = mongoose.model("Game");

addOne = function(req, res) {
    const gameId = req.params.gameId;
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        if (err) {
            console.log("Error finding game");
            res.status(500).json(err);
        } else {
            if (!game) {
                console.log("Game not found");
                res.status(404).json({"message" : "Game not found"});
            } else {
                const newReview = {
                    name : req.body.name,
                    review: req.body.review,
                    date: req.body.date
                }
                game.reviews.push(newReview);
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

getAll = function (req, res) {
    const gameId = req.params.gameId;
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        if (err) {
            console.log("Error finding game");
            res.status(500).json(err);
        } else {
            if (!game) {
                console.log("Game not found");
                res.status(404).json({"message" : "Game not found"});
            } else {
                res.status(200).json(game.reviews);
            }
        }
    })

}

getOne = function (req, res) {
    console.log("Get one review");
    const gameId = req.params.gameId;
    console.log(req.params);
    Game.findById(gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message" : "Error finding a document" + err});
        } else {
            if (!game) {
                res.status(404).json({"message" : "Game not found"});
            } else {
                const reviewFound = game.reviews.id(ObjectId(req.params.reviewID));
                if (!reviewFound) {
                    res.status(404).json("Review not found");
                } else {
                    res.status(200).json(reviewFound);
                }
            }
        }
    })
}

deleteOne = function (req, res) {
    console.log("Delete one review");
    const gameId = req.params.gameId;
    console.log(req.params);
    Game.findById(gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message" : "Error finding a document" + err});
        } else {
            if (!game) {
                res.status(404).json({"message" : "Game not found"});
            } else {
                const reviewFound = game.reviews.id(ObjectId(req.params.reviewID));
                if (!reviewFound) {
                    res.status(404).json("Review not found");
                } else {
                    game.reviews.id(ObjectId(req.params.reviewID)).remove(function(err, result) {
                        if (err) {
                            res.status(500).json(err)
                        } else {
                            game.save(function(err, result) {
                                if (err) {
                                    res.status(500).json(err)
                                } else {
                                    res.status(200).json(result);
                                }
                            });
                        }
                    });
                }
            }
        }
    });
}

updateOne = function(req, res) {
    console.log("Update one review");
    const gameId = req.params.gameId;
    console.log(req.params);
    Game.findById(gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message" : "Error finding a document" + err});
        } else {
            if (!game) {
                res.status(404).json({"message" : "Game not found"});
            } else {
                const reviewFound = game.reviews.id(ObjectId(req.params.reviewID));
                if (!reviewFound) {
                    res.status(404).json("Review not found");
                } else {
                    if (req.body.name) {
                        reviewFound.name = req.body.name;
                    }
                    if (req.body.review) {
                        reviewFound.review = req.body.review;
                    }
                    if (req.body.country) {
                        reviewFound.country = req.body.country;
                    }
                    game.save(function(err, result) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(result);
                        }
                    });
                }
            }
        }
    })
}

replaceOne = function(req, res) {
    console.log("Replace one review");
    const gameId = req.params.gameId;
    console.log(req.params);
    Game.findById(gameId).exec(function(err, game) {
        if (err) {
            res.status(500).json({"message" : "Error finding a document" + err});
        } else {
            if (!game) {
                res.status(404).json({"message" : "Game not found"});
            } else {
                const reviewFound = game.reviews.id(ObjectId(req.params.reviewID));
                if (!reviewFound) {
                    res.status(404).json("Review not found");
                } else {
                    game.reviews.id(ObjectId(req.params.reviewID)).remove(function(err, result) {
                        const newReview = {
                            name : req.body.name,
                            review : req.body.review,
                            date : req.body.date
                        }
                        game.reviews.push(newReview);
                        game.save(function(err, result) {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                res.status(200).json(result);
                            }
                        });
                    });
                    
                }
            }
        }
    })
}

module.exports = {
    addOne : addOne,
    getOne: getOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    replaceOne: replaceOne,
    getAll: getAll
};