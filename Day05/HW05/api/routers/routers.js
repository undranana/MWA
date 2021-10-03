const express = require("express");
const router = express.Router();
const cotroller = require("./../controllers/controller");

router.get("/games", cotroller.getAll);
router.get("/games/:gameId", cotroller.getOne);

module.exports = router;