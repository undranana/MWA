const mongoose = require("mongoose");

let courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

let studentsSchema = mongoose.Schema({
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
    courses: [courseSchema]
});

mongoose.model("Students", studentsSchema,"students");