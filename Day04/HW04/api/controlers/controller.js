const dbconnection = require("./../data/dbconnection");
getGames = function(req, res){
    let offset = 0;
    let count = 9; 
    const db = dbconnection.get();
    const games = db.collection("games");
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
        if (count > 9){
            res.status(200).send("Maximum count is 9");
        }
    }
    if (req.query && req.query.offset){
        offset = parseInt(req.query.offset);
    }
    const returnGames = games.find().skip(offset).limit(count).toArray(function(err, games){
        res.status(200).json({"games" : games});
    });

    
}

module.exports = {
    getGames : getGames
};