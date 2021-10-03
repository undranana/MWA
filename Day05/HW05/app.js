const express = require("express");
const app = express();
const path = require("path");
app.set("port", 3000);
//require("./api/data/gamesModel");
require("./api/data/dbconnection");
const router = require("./api/routers/routers");

const server = app.listen(app.get("port"), function() {
    console.log("Server started on ", server.address().port);
});
app.use("/", router); 