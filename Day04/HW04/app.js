const express = require("express");
const app = express();
const path = require("path");
const router = require("./api/routes/routes");
require("./api/data/dbconnection").open();

app.set("port",3000);
const server = app.listen(app.get("port"),function(){
    console.log("Server started on ",server.address().port);
});

app.use("/", router);