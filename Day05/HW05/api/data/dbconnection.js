const mongoose = require("mongoose");
const dbname = "meanGames";
const dburl = "mongodb://localhost:27017/" + dbname;
require("./gamesModel");
mongoose.connect(dburl);

mongoose.connection.on("connected", function() {
    console.log("Mongoose connection on");
});
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose connection off");
});
mongoose.connection.on("error", function() {
    console.log("Error during Mongoose connection");
});

//terminations
process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose connection closed by termination");
    })
    process.exit(0);
});
process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose connection closed by termination");
    })
    process.exit(0);
}); 
process.on("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose is disconnected by restart.");
        process.exit(0);
    });
}); 