const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controller");

router.route("/jobs")
.get(controller.getAll)
.post(controller.addOne)

router.route("/jobs/:jobId")
.get(controller.getOne)
.delete(controller.deleteOne)
.patch(controller.updateJob)
.put(controller.replaceJob)
module.exports = router