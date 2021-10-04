const express = require("express");
const router = express.Router();
const controller = require("./../controlers/controller");

router.route("/students/")
.get(controller.getAllStudents)
.post(controller.addStudent);

router.route("/students/:studentID")
.get(controller.getOneStudent)
.delete(controller.deleteStudent)
.patch(controller.updateStudent)
.put(controller.replaceStudent);


module.exports = router;