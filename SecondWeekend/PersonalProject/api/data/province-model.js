const mongoose = require("mongoose");

let famousPlacesSchema = mongoose.Schema({
    name: String
})

let provinceSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    population : String,
    famousPlaces : [famousPlacesSchema]
});

mongoose.model("Provinces", provinceSchema,"provinces");