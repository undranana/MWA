const mongoose = require("mongoose");
const publisherSchema = new mongoose.Schema({
    name: String,
    country: String
});

const reviewSchema = new mongoose.Schema({
    name: String,
    review: String,
    date: String
});

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: Number,
    minage: Number,
    designers: [String],
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    },
    publisher: publisherSchema,
    reviews: [reviewSchema]
});

mongoose.model("Game",gameSchema, "games"); //name of the model | schema | name of the collection -- compiling the model
