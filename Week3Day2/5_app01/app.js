const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require('url');
const port = 3000;

const server = http.createServer(function (req, res) {

    const query = url.parse(req.url,true).query;
    if (query.page) {
        let filename = "page" + query.page +".html";
            fs.readFile(path.join(__dirname, "public", filename), function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
    }
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/page1") {
        fs.readFile(path.join(__dirname, "public", "page1.html"), function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/page2") {
        fs.readFile(path.join(__dirname, "public", "page2.html"), function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/page3") {
        fs.readFile(path.join(__dirname, "public", "page3.html"), function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

}).listen(port);
