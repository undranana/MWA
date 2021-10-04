const mongoose = require("mongoose");
const Students = mongoose.model("Students");
const ObjectId = require("mongodb").ObjectId;

getAllStudents = function(req, res) {
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
    Students.find().skip(offset).limit(count).exec(function(err, students) {
        if (err) {
            res.status(500).json({"message" : "Error getting students."});
        } else {
            if (!students) {
                res.status(404).json({"message" : "Students not found"});
            } else {
                res.status(200).json({"students" : students});
            }
        }
    });
}
getOneStudent = function (req, res) {
    console.log("Get one student");
    let studentId = req.params.studentID;
    if (!mongoose.isValidObjectId(studentId)) {
        res.status(400).json({"message" : "Invalid ID"});
    } else {
        Students.findById(studentId).exec(function(err, student) {
            if (!student) {
                res.status(404).json({"message" : "Student not found"});
            } else {
                res.status(200).json({"student" : student});
            }
        });
    }
}

addStudent = function(req, res){
    console.log("Add student");
    console.log(req.body);
    let newStudnet = {
        "name" : req.body.name,
        "gpa" : parseInt(req.body.gpa),
        "studentID" : parseInt(req.body.studentID)
    };
    Students.create(newStudnet, function(err, result) {
        if (err) {
            res.status(500).json({"message" : "Error creating student" + err});
        } else {
            res.status(200).json(result);
        }
    })

}
deleteStudent = function(req, res) {
    console.log("Delete student");
    const studentID = req.params.studentID;
    console.log(req.params);
    Students.findById(studentID).deleteOne().exec(function(err, response) {
        if (err) {
            res.status(500).json({"message" : "Error deleting a document" + err});
        } else {
            if (!response) {
                res.status(404).json({"message" : "Student not found"});
            } else {
                res.status(200).json({"message" : response});
            }
        }
    });
}
updateStudent = function(req, res) {
    Students.findById(req.params.studentID).exec(function(err, student) {
        if (err) {
            res.status(500).json({"message": "Error finding game"});
        } else {
            if (req.body.name) {
                student.name = req.body.name;
            }
            if (req.body.gpa) {
                student.gpa = req.body.gpa;
            }
            student.save(function(err, response) {
                if (err) {
                    res.status(500).json({"message": "Error updating student"});
                } else {
                    res.status(200).json(response);
                }
            });
        }
    });
}
replaceStudent = function(req, res) {
    Students.findById(req.params.studentID).exec(function(err, student) {
        if (err) {
            res.status(500).json({"message": "Error finding game"});
        } else {
            if (!student) {
                res.status(404).json({"message": "Student not found"});
            } else {
                student.name = req.body.name;
                student.gpa = req.body.gpa;
                student.save(function(err, response) {
                    if (err) {
                        res.status(500).json({"message": "Error relacing student"});
                    } else {
                        res.status(200).json({"message" : response});
                    }
                });
            }
        }
    })
}

module.exports = {
    getAllStudents: getAllStudents,
    getOneStudent: getOneStudent,
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    updateStudent: updateStudent,
    replaceStudent: replaceStudent
}
