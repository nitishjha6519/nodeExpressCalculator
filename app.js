const express= require("express");
const app= express();

app.get("/", function(req,res){
 console.log(req);  // our browser getting nothing when it requests from server
res.send("Hello world");
});

app.listen(3000, function(){
    console.log("server is running at port 3000");
});
