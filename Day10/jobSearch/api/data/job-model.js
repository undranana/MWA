const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
    state: String
});
const jobSchema = mongoose.Schema({
    title: String,
    salary: Number,
    location: locationSchema,
    description: String,
    experience: String,
    skills: [String],
    postDate: String,
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

mongoose.model("Job", jobSchema, "jobs");