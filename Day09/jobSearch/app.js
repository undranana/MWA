const express = require("express");
const path = require("path");
const app = express();
require("./api/data/dbconnection");
const routes = require("./api/routers/routers");

app.set("port", 3000);

app.use("/api", routes);

const server = app.listen(app.get("port"), function() {
    console.log("Server started on", server.address().port);
});