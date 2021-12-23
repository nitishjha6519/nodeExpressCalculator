const express= require("express");
const app= express();
const bodyParser=require("body-parser");

app.get("/", function(req,res){
 res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));
//form data can be accessed through urlencded//

app.post("/", function(req,res){
    console.log(req.body);
    // passed data is in req.body//

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    console.log(result);
 res.send("The addition of number is " + result);
});

app.listen(3000, function(){
    console.log("server is running at port 3000");
});
