const mongoose = require("mongoose");
const Provinces = mongoose.model("Provinces");
const ObjectId = require("mongodb").ObjectId;

getAll = function(req, res) {
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
                res.status(200).json(province.famousPlaces);
            }
        }
    });
}
getOne = function (req, res) {
    console.log("Get one province");
    let provincetId = req.params.provincetId;
    if (!mongoose.isValidObjectId(provincetId)) {
        res.status(400).json({"message" : "Invalid ID"});
    } else {
        Provinces.findById(provincetId).exec(function(err, province) {
            if (!province) {
                res.status(404).json({"message" : "Province not found"});
            } else {
                const placeFound = game.famousPlaces.id(ObjectId(req.params.placeID));
                if (!placeFound) {
                    res.status(404).json("Place not found");
                } else {
                    res.status(200).json(placeFound);
                }
            }
        });
    }
}

addOne = function(req, res){
    console.log("Add province");
    console.log(req.body);
    let provinceId = req.params.provinceId;
    Provinces.findById(provinceId).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message" : "Error finding province" + err});
        } else {
            const newPlace = {
                name: req.body.name
            }
            if (!province) {
                res.status(404).json({"message" : "Province not found" + err})
            } else {
                province.famousPlaces.push(newPlace);
                province.save(function(err, result){
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(201).json(result);
                    }
                });
            }
        }
    })

}
deleteOne = function(req, res) {
    console.log("Delete province");
    const provincetId = req.params.provincetId;
    console.log(req.params);
    Provinces.findById(provincetId).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message" : "Error finding a document" + err});
        } else {
            if (!response) {
                res.status(404).json({"message" : "Province not found"});
            } else {
                province.famousPlaces.id(ObjectId(req.params.placeID)).remove(function(err, result) {
                    if (err) {
                        res.status(500).json(err)
                    } else {
                        province.save(function(err, result) {
                            if (err) {
                                res.status(500).json(err)
                            } else {
                                res.status(200).json(result);
                            }
                        });
                    }
                });
            }
        }
    });
}
updateOne = function(req, res) {
    Provinces.findById(req.params.provincetId).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message": "Error finding province"});
        } else {
            const placeFound = province.famousPlaces.id(ObjectId(req.params.placeID));
            if (req.body.name) {
                placeFound.name = req.body.name;
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

replaceOne = function(req, res) {
    Provinces.findById(req.params.provincetId).exec(function(err, province) {
        if (err) {
            res.status(500).json({"message": "Error finding student"});
        } else {
            if (!province) {
                res.status(404).json({"message": "Province not found"});
            } else {
                const placeFound = province.famousPlaces.id(ObjectId(req.params.placeID));
                if (!placeFound) {
                    res.status(404).json("Plaace not found");
                } else {
                    province.famousPlaces.id(ObjectId(req.params.placeID)).remove(function(err, result) {
                        const newPlace = {
                            name : req.body.name
                        }
                        province.famousPlaces.push(newPlace);
                        province.save(function(err, result) {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                res.status(200).json(result);
                            }
                        });
                    });
                }
            }
        }
    })
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    addOne: addOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    replaceOne: replaceOne
}
