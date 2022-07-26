let express = require("express");
let bodyparser = require("body-parser");
let mongoose = require("mongoose");
let User = require("../models/User");

let router = express.Router();

router.post("/register", async(req,res)=>{
    try
    {
    let body = req.body;
    let user = new User();
    user.name = body.data.name;
    user.email = body.data.email;
    user.mobileno = body.data.mobileno;
    user.password = body.data.password;
a
    user.save().then(result=>{
        res.end(JSON.stringify({status:"Success", data:result}));
    },err=>{
        res.end(JSON.stringify({status:"Failed", data:err}));
    });
}
catch{
    res.end(JSON.stringify({status:"Failed", data:"Something went wrong..."}));
}
});

module.exports = router;