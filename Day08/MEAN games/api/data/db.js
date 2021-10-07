const mongoose = require("mongoose");
const dbname = "meanGames";
dburl = "mongodb://localhost:27017/" + dbname;
require("./games-model");

mongoose.connect(dburl);

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected");
});
mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error",function(err){
    console.log("Mongoose error:", err);
});
//the termination
process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose is disconnected by termination.");
        process.exit(0);
    });
});
process.on("SIGTERM", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose is disconnected by termination.");
        process.exit(0);
    });
});
process.on("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose is disconnected by restart.");
        process.exit(0);
    });
});