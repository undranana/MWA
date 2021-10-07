const MongoClient = require("mongodb").MongoClient;

const dbName = process.env.DATABASENAME;
const dburl = process.env.DATABASEUERL + dbName;
let _connection = null;

const open = function(){
    MongoClient.connect(dburl,  function(err, client){
        if(err){
            console.log("DB connection failed :"+err);
            return;
        }
        _connection = client.db(dbName);
        console.log("DB connection opened");
    }
    )};
    
const get = function(){
    return _connection;
};

module.exports = {
    get:get,
    open:open
}