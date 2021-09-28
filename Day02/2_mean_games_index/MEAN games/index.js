const express = require("express");
const app = express();
const path = require("path");
app.set("port",3000);

// app.get("/",function(req, res){
//     console.log("GET request");
//     res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
// })
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname,"public")));//middleware

const server = app.listen(app.get("port"),function(){
    console.log("Server started on port ", server.address().port);
})
