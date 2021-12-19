const express= require("express");
const app= express();

app.get("/", function(req,res){
 console.log(req);  // our browser getting nothing when it requests from server
res.send("Hello world");
});

app.get("/contact", function(req,res){
res.send("<h1>You can contact me at nitishjha6519@gmail.com</h1>");
});

app.get("/about", function(req,res){
    res.send("Hello, my name is nitish and i love to create things");
})

app.listen(3000, function(){
    console.log("server is running at port 3000");
});
