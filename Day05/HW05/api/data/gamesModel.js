const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    year : Number,
    rate : {
        type : Number,
        min : 1,
        max : 5,
        default : 1
    },
    price : Number,
    minAge : Number,
    
});

mongoose.model("Game",gameSchema,"games");