const mongoose = require("mongoose");
let provinceSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    gpa : {
        type : Number,
        max : 4,
        min : 1,
        default : 1
    },
    studentID : {
        type : Number,
        required : true
    }
});

mongoose.model("Provinces", provinceSchema,"provinces");