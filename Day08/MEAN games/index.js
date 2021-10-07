require("dotenv").config({"path":".env"});
const express = require("express");
const app = express();
const path = require("path");
require("./api/data/dbconnection").open();
require("./api/data/db");
const routes = require("./api/routes");

if (isNaN(process.env.port)) {
    process.env.port = 6000;
}
process.env.port = process.env.port || 6000;

app.set("port",process.env.port);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,"public")));//middleware

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use("/api", routes);

const server = app.listen(app.get("port"),function(){
    console.log("Server started on port ", server.address().port);
})
