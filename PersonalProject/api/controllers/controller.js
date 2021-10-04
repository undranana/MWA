const mongoose = require("mongoose");
const Provinces = mongoose.model("Provinces");
const ObjectId = require("mongodb").ObjectId;

getAllProvinces = function(req, res) {
    let count = 10;
    let offset = 0;
    let maxCount = 10;
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
        if (count > maxCount) {
            count = maxCount;
        }
    }

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    Provinces.find().skip(offset).limit(count).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message" : "Error getting provinces."});
        } else {
            if (!province) {
                res.status(404).json({"message" : "Provinces not found"});
            } else {
                res.status(200).json({"province" : province});
            }
        }
    });
}
getOneProvince = function (req, res) {
    console.log("Get one province");
    let provincetId = req.params.provincetId;
    if (!mongoose.isValidObjectId(provincetId)) {
        res.status(400).json({"message" : "Invalid ID"});
    } else {
        Provinces.findById(provincetId).exec(function(err, province) {
            if (!province) {
                res.status(404).json({"message" : "Province not found"});
            } else {
                res.status(200).json({"province" : province});
            }
        });
    }
}

addProvince = function(req, res){
    console.log("Add province");
    console.log(req.body);
    let newProvince = {
        "name" : req.body.name,
        "population" : parseInt(req.body.population)
    };
    Provinces.create(newProvince, function(err, result) {
        if (err) {
            res.status(500).json({"message" : "Error creating province" + err});
        } else {
            res.status(200).json(result);
        }
    })

}
deleteProvince = function(req, res) {
    console.log("Delete province");
    const provincetId = req.params.provincetId;
    console.log(req.params);
    Provinces.findById(provincetId).deleteOne().exec(function(err, response) {
        if (err) {
            res.status(500).json({"message" : "Error deleting a document" + err});
        } else {
            if (!response) {
                res.status(404).json({"message" : "Province not found"});
            } else {
                res.status(200).json({"message" : response});
            }
        }
    });
}
updateProvince = function(req, res) {
    Provinces.findById(req.params.provincetId).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message": "Error finding province"});
        } else {
            if (req.body.name) {
                province.name = req.body.name;
            }
            if (req.body.population) {
                province.population = req.body.population;
            }
            province.save(function(err, response) {
                if (err) {
                    res.status(500).json({"message": "Error updating province"});
                } else {
                    res.status(200).json(response);
                }
            });
        }
    });
}

replaceProvince = function(req, res) {
    Provinces.findById(req.params.provincetId).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message": "Error finding student"});
        } else {
            if (!province) {
                res.status(404).json({"message": "Province not found"});
            } else {
                province.name = req.body.name;
                province.population = req.body.population;
                province.save(function(err, response) {
                    if (err) {
                        res.status(500).json({"message": "Error relacing province"});
                    } else {
                        res.status(200).json({"message" : response});
                    }
                });
            }
        }
    })
}

module.exports = {
    getAllProvinces: getAllProvinces,
    getOneProvince: getOneProvince,
    addProvince: addProvince,
    deleteProvince: deleteProvince,
    updateProvince: updateProvince,
    replaceProvince: replaceProvince
}
