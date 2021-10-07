const mongoose = require("mongoose");
let provinceSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
});

mongoose.model("Provinces", provinceSchema,"provinces");