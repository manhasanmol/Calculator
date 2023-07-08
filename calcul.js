const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var sign = req.body.sign;
    var result = eval(num1 + sign + num2);
    res.send("the result of calculation is "+result);
});

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmical.html")
});

app.post("/bmi",function(req,res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var result = w/((h*0.3048)*(h*0.3048));
    res.send("your BMI is "+result);
});

app.listen(3000,function(){
    console.log("server begins");
});