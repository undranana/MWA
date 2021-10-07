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
                location: {
                    type : "Point",
                    coordinates: [parseFloat(req.body.lng), parseFloat(req.body.lat)]    
                }
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

module.exports = {
    addOne : addOne,
    getOne: getOne
};