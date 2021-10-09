const mongoose = require("mongoose");
const dbname = "jobSearching";
const dbUrl = "mongodb://localhost:27017/" + dbname;
require("./job-model");

mongoose.connect(dbUrl);

mongoose.connection.on("connected", function() {
    console.log("Mongoose connected");
})

mongoose.connection.on("disconnected", function() {
    console.log("Mongoose disconnected");
})

mongoose.connection.on("error", function(err) {
    console.log("Mongoose connection error " + err);
});

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose is disconnected by termination");
        process.exit(0);
    })
    
})

process.on("SIGTERM", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose is disconnected by termination");
        process.exit(0);
    })
});

process.on("SIGUSR2", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose is disconnected by restart");
        process.exit(0);
    });
});