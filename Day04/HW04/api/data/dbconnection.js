MongoDBClient = require("mongodb").MongoClient;
const dbname = "meanGames";
const dburl = "mongodb://localhost:27017/" + dbname;
let _connection = null;

const open = function(){
    MongoDBClient.connect(dburl,function(err, client){
        if (err) {
            console.log("DB connection failed: " + err);
        } else {
            _connection = client.db(dbname);
            console.log("Connection opened");
        }
    })
};

const get = function(){
    return _connection;
}

module.exports = {
    open : open,
    get : get
}