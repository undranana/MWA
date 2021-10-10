const mongoose = require("mongoose");

let usersSchema = mongoose.Schema({
    name : String,
    username : {
        type: String,
        unique: true,
        required: true
    },
    password : String
});

mongoose.model("Users", usersSchema,"users");