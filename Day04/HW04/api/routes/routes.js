const express = require("express");
const router = express.Router();
const controllers = require("./../controlers/controller");

router.get("/", controllers.getGames);

module.exports = router;