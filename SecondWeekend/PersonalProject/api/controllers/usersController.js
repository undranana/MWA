const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const ObjectId = require("mongodb").ObjectId;
const bcrypt= require("bcrypt-nodejs");

createUserWithSaltAndHashedPass = function(err, pass, salt, req, res) {
    if (err) {
        res.status(500).json(err);
    } else {
        let data = {
            username: req.body.username,
            name: req.body.name || null,
            password: pass,
        }
        Users.create(data, function(err, user) {
            if (err) { 
                console.log(err); res.status(400).json(err);
            }
            else {
                console.log("user created", user); 
                res.status(200).json(user);
            }
        });
    }
}
createUserWithSalt = function (salt, req, res) {
    return bcrypt.hashSync(req.body.password, salt, (err, pass) => createUserWithSaltAndHashedPass(err, pass, salt, req, res))
}

addUser = function(req, res){
    console.log("Add user");
    // bcrypt.genSaltSync(10,function(err, salt) {
    //     if (err) {

    //     } else {
    //         createUserWithSalt(salt, req, res);
    //         //bcrypt.hashSync(req.body.password, salt,(err, pass) => )
    //     }
    // })

    var username= req.body.username;
    var name= req.body.name || null;
    var password= bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create({username: username, name: name, password: password}, function(err, user) {
        if (err) { 
            console.log(err); 
            res.status(400).json(err);
        }
        else {
            console.log("user created", user); 
            res.status(200).json(user);
        }
    });

    
}

module.exports ={
    addUser: addUser
}