const express = require("express");
const controller = require("./../controllers/controller");
const router = express.Router();

router.get("/",controller.emptyParam);
router.get("/:firstNumber",controller.process);


module.exports = router