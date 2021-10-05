const express = require("express");
const app = express();
const path = require("path");
require("./api/data/db");
const routes = require("./api/routes");
app.set("port",3000);


app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname,"public")));//middleware

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use("/api", routes);

const server = app.listen(app.get("port"),function(){
    console.log("Server started on port ", server.address().port);
})
