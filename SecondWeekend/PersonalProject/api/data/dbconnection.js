const mongoose = require("mongoose");
const dbname = "provinces";
const dburl = "mongodb://localhost:27017/" + dbname;
require("./province-model");
require("./user-model");

mongoose.connect(dburl);

mongoose.connection.on("connected", function() {
    console.log("Mongoose connected");
});
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error", function() {
    console.log("Mongoose connection error");
});

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected by termination");
        process.exit(0);
    });
});
process.on("SIGTERM", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected by termination");
        process.exit(0);
    });
    
});
process.on("SIGUSR2", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected by restart");
        process.exit(0);
    });
});