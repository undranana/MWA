const express = require("express");
const app = express();
const path = require("path");
app.set("port", 5353)
const server = app.listen(app.get("port"), function(){
    console.log("Server is running on port ", server.address().port);
});