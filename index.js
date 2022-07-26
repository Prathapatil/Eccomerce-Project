let express = require("express");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");

let app = express();
app.use(express.static("assets"));
app.use(express.json());
app.use(bodyparser.json({limit:"50mb"}));
app.use(bodyparser.urlencoded({limit:"50mb",extended:true}))  

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// mongoose.connect("mongodb://localhost:27017/ecommerceproject");
// let db = mongoose.connection;
// db.on("error", error=> console.log(error));
// db.on("open",()=>console.log('Connection Established'));

mongoose.connect("mongodb://localhost:27017/ecommerce").then(()=>{
    console.log("Connection successful");
}).catch((err)=>{
    console.log("Error:" + err);
});

app.get("/", function(req,res){
    res.send("Welcome to E-commerce Back end");
    res.end();
})

app.use("/admin",require( "./routes/admin"));
app.use("/productcategory",require( "./routes/productcategory"));
app.use("/product",require( "./routes/product"));

app.listen(8081, function(){
    console.log("Backend running on 8081.....");
})