//const dbConnection = require("./../data/dbconnection").get();
const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Game = mongoose.model("Game");

getAll = function (req, res) {
    console.log("GET getAll");
    let offset = 0;
    let count = 10;
    const maxCount = 10;
    if(req.query && req.query.offset) {
        offset = parseInt(offset);
    }
    if(req.query && req.query.count) {
        count = parseInt(req.query.count);
        if (count > maxCount) {
            count = maxCount;
        }
    }
    console.log(req.query);
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({"message" : "Offset and Count should be numbers."});
    }
    Game.find().skip(offset).limit(count).exec(function(err, games){
        if (err) {
            res.status(500).json({"message" : "Error retrieving data " + err});
        } else {
            res.status(200).json(games);
        }
    });

}
getOne = function(req, res) {
    let gameid = req.params.gameId;
    if (!mongoose.isValidObjectId(gameid)) {
        res.status(400).json({"message" : "Invalid game ID"});
    } else {
        Game.find({"_id" : gameid}).exec(function(err, game) {
           if (err) {
               res.status(500).json({"message" : "Error finding the game"});
           } else {
               if (!game) {
                    res.status(404).json({"message" : "Game not found"});
               } else {
                   res.status(200).json({"game" : game});
               }
           }
        })
    }
}

module.exports = {
    getAll : getAll,
    getOne : getOne
};