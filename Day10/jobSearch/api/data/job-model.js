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
    postDate: String
});

mongoose.model("Job", jobSchema, "jobs");