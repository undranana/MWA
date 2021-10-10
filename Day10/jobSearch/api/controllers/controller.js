const mongoose = require("mongoose");
const Job = mongoose.model("Job");

runGeoSearch = function(req, res) {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    console.log("geo search");
    console.log(lng,lat);

    const minDist = 0;
    const maxDist = 1000;
    const query = {
        location2:{
            $near: {
                $geometry: {
                    type:"Point",
                    cootrdinates: [lng, lat]
                },
                $maxDistance: maxDist,
                $minDistance: minDist
            }
        }
    }
    Job.find(query).exec(function(err, jobs){
        console.log("In geo search");
        res.status(200).json({"message" : jobs});
    });
}

getAll = function(req, res) {
    console.log(req.query);
    if (req.query && req.query.lng) {
        runGeoSearch(req, res);
        return;
    }

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

getOne = function(req, res) {
    console.log("Get one game");
    const jobId = req.params.jobId;
    if (!mongoose.isValidObjectId(jobId)) {
        res.status(400).json({"message" : "Invalid object ID"});
    } else {
        Job.findById(jobId).exec(function(err, job) {
            if (err) {
                res.status(500).json({"message" : "Error finding job"})
            } else {
                res.status(200).json(job)                                                                                                    
            }
        });
    }
}

addOne = function(req, res) {
    console.log("Add job");

    const newJob = {
        title: req.body.title,
        salary: parseInt(req.body.salary),
        description: req.body.description,
        experience: req.body.experience,    
        postDate: req.body.postDate,
        skills: req.body.skills.split(",")
    }
    console.log(newJob)
    Job.create(newJob, function(err, result) {
        if (err) {
            res.status(500).json({"message" : "Error creating job"})
        } else {
          res.status(201).json(result);  
        }
    })
}

deleteOne = function(req, res) {
    console.log("Delete job");
    const jobId = req.params.jobId;
    if (!mongoose.isValidObjectId(jobId)) {
        res.status(400).json({"message" : "Invalid object ID"});
    } else {
        Job.findById(jobId).deleteOne().exec(function(err, response) {
            if (err) {
                res.status(500).json({"message": "Error deleting job"});
            } else {
                if (!response) {
                    res.status(404).json({"message": "Job not found"})
                } else {
                    res.status(200).json({response});
                }
            }
        });
    }
}

updateJob = function(req, res) {
    console.log("Update job");
    const jobId = req.params.jobId;
    if (!mongoose.isValidObjectId(jobId)) {
        res.status(400).json({"message" : "Invalid object ID"});
    } else {
        Job.findById(jobId).exec(function(err, job) {
            if (err) {
                res.status(500).json({"message":"Error finding job not found"})
            } else {
                if (!job) {
                    res.status(404).json({"message" : "Job not found"})
                } else {
                    if (req.body.title) {
                        job.title = req.body.title;
                    }
                    if (req.body.salary) {
                        job.salary = req.body.salary
                    }
                    if (req.body.description) {
                        job.description = req.body.description
                    }
                    if(req.body.experience) {
                        job.experience = req.body.experience
                    }
                    if(req.body.postDate) {
                        job.postDate = req.body.postDate
                    }
                }
                job.save(function(err, response) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(response);
                    }
                })
            }
        });
    }

}

replaceJob = function(req,res) {
    console.log("Replace job");
    const jobId = req.params.jobId;
    if (!mongoose.isValidObjectId(jobId)) {
        res.status(400).json({"message" : "Invalid object ID"});
    } else {
        Job.findById(jobId).exec(function(err, job) {
            if (err) {
                res.status(500).json(err)
            } else {
                if(!job) {
                    res.status(404).json({"message" : "Job not found"});
                } else {
                    job.title = req.body.title,
                    job.salary = req.body.salary,
                    job.description = req.body.description,
                    job.experience = req.body.experience,
                    job.postDate = req.body.experience
                    job.save(function(err, response) {
                        if(err) {
                            res.status(500).json(err)
                        } else {
                            res.status(200).json(response);
                        }
                    });
                }
            }
        });
    }

}

module.exports = {
    getAll: getAll,
    addOne: addOne,
    getOne: getOne,
    deleteOne: deleteOne,
    updateJob: updateJob,
    replaceJob: replaceJob
}