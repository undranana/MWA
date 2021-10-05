const express = require("express");
const coursesController = require("../controlers/courses-controller");
const router = express.Router();
const controller = require("./../controlers/controller");
const courses_controller = require("./../controlers/courses-controller");

router.route("/students/")
.get(controller.getAllStudents)
.post(controller.addStudent);

router.route("/students/:studentID")
.get(controller.getOneStudent)
.delete(controller.deleteStudent)
.patch(controller.updateStudent)
.put(controller.replaceStudent);

router.route("/students/:studentID/courses")
.get(courses_controller.getAll)
.post(courses_controller.addOne);

router.route("/students/:studentID/courses/:courseID")
.get(courses_controller.getOne)
.delete(courses_controller.deleteOne)
.patch(courses_controller.updateOne)
.put(courses_controller.replaceOne);


module.exports = router;