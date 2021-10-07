const express = require("express");
const app = express();
const path = require("path");
require("./api/data/dbconnection");
const router = require("./api/routes/index");

app.use(express.urlencoded({extended : false}));
app.use(express.json({extended : false}));

app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,"public")));

app.use("/api",router);

app.set("port", 3000);
const server = app.listen(app.get("port"), function() {
    console.log("Server started on ", server.address().port);
});