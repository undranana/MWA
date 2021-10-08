const mongoose = require("mongoose");
const Job = mongoose.model("Job");

getAll = function(req, res) {
    let offset = 0;
    let count = 10;
    const maxCount = 10;

    if (req.query && req.query.count) {
        count = req.query.count;
        if (count > maxCount) {
            count = maxCount;
        }
    }
    if(req.query && req.query.offset) {
        offset = req.query.offset;
    }
    if(isNaN(offset) || isNaN(count)) {
        res.status(400).json({"message": "Count and offset must be numbers"});
    }
    Job.find().skip(offset).limit(count).exec(function(err, data) {
        if (err) {
            console.log("Error finding games");
            res.status(500).json({"message" : "Error finding games"});
        } else {
            if (!data) {
                res.status(404).json({"message": "Jobs not found"});
            } else {
                console.log("Found games");
                res.status(200).json({"data": data});
            }
        }
    });
}

addOne = function(req, res) {
    console.log("Add job");
    const newJob = {
        title: req.body.title,
        salary: req.body.salary,
        description: req.body.description,
        experience: req.body.experience,    
        postDate: req.body.postDate
    }
}

module.exports = {
    getAll: getAll
}