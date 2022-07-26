let express = require("express");
let bodyparser = require("body-parser");
const { json } = require("body-parser");
let router = express.Router();

router.post("/login", async(req,res)=>{
    let body = req.body;
    let status =  "";
    if(body.data.username == "admin" && body.data.password == "admin")
        status="Success";
    else
        status="Failed";
        let data = {data:{status:status}}; 
        res.end(JSON.stringify(data));
});

module.exports = router;