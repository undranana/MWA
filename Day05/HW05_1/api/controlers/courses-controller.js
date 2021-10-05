const mongoose = require("mongoose");
const Students = mongoose.model("Students");
const ObjectId = require("mongodb").ObjectId;

getAll = function (req, res) {
    const studentID = req.params.studentID;
    let count = 10;
    let offset = 0;
    const maxCount = 10;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
        if (count > maxCount) {
            count = maxCount;
        }
    }
    if (isNaN(count) || isNaN(offset)) {
        res.status(401).json({"message": "Count and offset should be numbers"});
    }
    Students.findById(studentID).select("courses").exec(function(err, courses) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!courses) {
                res.status(404).json({"message" : "Courses not found"});
            } else {
                res.status(200).json(courses);
            }
        }
    });
}

addOne = function(req,res) {
    const studentID = req.params.studentID;
    Students.findById(studentID).exec(function(err, student) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!student) {
                res.status(404).json({"message": "Student not found"});
            } else {
                const newCourse = {
                    name: req.body.name
                }
                student.courses.push(newCourse);
                console.log(student);
                student.save(function(err, response) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(response);
                    }
                });
            }
        }
    });
}

getOne = function(req,res) {
    console.log("Get one course");
    const studentID = req.params.studentID;
    Students.findById(studentID).exec(function(err, student) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (!student) {
                res.status(404).json({"message": "Student not found"});
            } else {
                const course = student.courses.id(req.params.courseID);
                if (!course) {
                    res.status(404).json({"message": "Course not found"});
                } else {
                    res.status(200).json(course);
                }
            }
        }
    });
}

deleteOne = function(req, res) {
    const studentID = req.params.studentID;
    const courseID = req.params.courseID;
    Students.findById(studentID).exec(function(err,student) {
        if (err) {
            res.status(500).json(err)
        } else {
            if (!student) {
                res.status(404).json({"message": "Student not found"})
            } else {
                console.log(student);
                const courseFound = student.courses.id(ObjectId(courseID));
                console.log(courseFound);
                if (!courseFound) {
                    res.status(404).json({"message": "Course not found"})
                } else {
                    student.courses.id(courseID).remove();
                    student.save(function(err, response) {
                        if(err) {
                            res.status(500).json(err)
                        } else {
                            res.status(200).json(response)
                        }
                    });
                }
            }
        }
    })
}

updateOne = function(req, res) {
    const studentID = req.params.studentID;
    const courseID = req.params.courseID
    Students.findById(studentID).exec(function(err,student) {
        if (err) {
            res.status(500).json(err)
        } else {
            if (!student) {
                res.status(404).json({"message": "Student not found"})
            } else {
                console.log(student);
                const courseFound = student.courses.id(ObjectId(courseID));
                console.log(courseFound);
                if (!courseFound) {
                    res.status(404).json({"message": "Course not found"})
                } else {
                    if (req.body.name) {
                        courseFound.name = req.body.name;
                    }
                    student.save(function(err, response) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(response);
                        }
                    });
                }
            }
        }
    })
}

replaceOne = function(req, res) {
    const studentID = req.params.studentID;
    const courseID = req.params.courseID
    Students.findById(studentID).exec(function(err,student) {
        if (err) {
            res.status(500).json(err)
        } else {
            if (!student) {
                res.status(404).json({"message": "Student not found"})
            } else {
                console.log(student);
                const courseFound = student.courses.id(ObjectId(courseID));
                console.log(courseFound);
                if (!courseFound) {
                    res.status(404).json({"message": "Course not found"})
                } else {
                    student.courses.id(ObjectId(courseID)).remove(function(err, response) {
                        if (err) {
                            res.status(500).json(err)
                        } else {
                            const newCourse = {
                                name: req.body.name
                            }
                            student.courses.push(newCourse);
                            student.save(function(err, response) {
                                if (err) {
                                    res.status(500).json(err);
                                } else {
                                    res.status(200).json(response)
                                }
                            });
                        }
                    });
                }
            }
        }
    })
}

module.exports = {
    getAll: getAll,
    addOne: addOne,
    getOne: getOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    replaceOne: replaceOne
}