const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const ObjectId = require("mongodb").ObjectId;
const bcrypt= require("bcrypt-nodejs");

// createUserWithHashedPass = function (err, pass, req, res) {
//     let data = {
//         username: req.body.username,
//         name: req.body.name || null,
//         password: pass,
//     }
//     Users.create(data,  function(err, user) {
//         if (err) { 
//             console.log(err); res.status(400).json(err);
//         }
//         else {
//             console.log("user created", user); 
//             res.status(200).json(user);
//         }
//     });
// }
addUser = function(req, res){
    console.log("Add user");
    //bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10),(err, pass) => createUserWithHashedPass(err, pass, req, res))
    bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10),function(err, pass) {
        if (err) {
            res.status(500).json(err);
        } else {
            let data = {
                username: req.body.username,
                name: req.body.name || null,
                password: pass,
            }
            Users.create(data,  function(err, user) {
                if (err) { 
                    console.log(err); res.status(400).json(err);
                }
                else {
                    console.log("user created", user); 
                    res.status(200).json(user);
                }
            });
        }
    })
}

module.exports ={
    addUser: addUser
}