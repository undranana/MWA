const games_data = require("../data/games.json");
getAll = function(req, res){
    console.log("Get games conroller");
    let offset = 0;
    let count = 5;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset);
    }
    if(req.query && req.query.count){
        count = parseInt(req.query.count);
    }
    const pageGames = games_data.slice(offset, offset + count);
    res.status(200).json({"jsondata":pageGames});
};

getOne = function(req, res){
    console.log("Get one game conroller");
    const gameIndex = req.params.gameId;
    const gameData = games_data[gameIndex];
    res.status(200).json({
        "jsonData":gameData
    });
};

addOnde = function(req, res){
    console.log(req.body);
    res.status(200).json(req.body);
}

module.exports={
    gamesGetAll:getAll,
    gamesGetOne:getOne,
    gamesAddOnde:addOnde
}
