console.log("start");
const child_process = require("child_process");
const new_process = child_process.spawn("node",["./fib"],{stdio: "inherit"});
console.log("end");