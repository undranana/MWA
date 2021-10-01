const express = require("express");
const app = express();
const path = require("path");
const routes = require("./api/routes");

app.set("port",3000);

const server = app.listen(3000,function(){
    console.log("Server started on " + server.address().port);
});

app.use("/",routes);