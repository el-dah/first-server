let a = "this thing on?";

console.log(a);

console.log("this thing on?");

// all lets were changed to const, const is only for 
const foodData = [
    {
      name: "pizza",
      cost: "$4",
      tastiness: 9
    },
    {
      name: "taco",
      cost: "$3",
      tastiness: 8
    },
  ]

  



//import express
const express = require("express");

//create an app instane - calling express() returns an object
const app = express ();

app.use(express.static("public"));
//first route
app.get("/", (request,response) => {
    console.log("A request was made to the '/' route!");
    response.send("HELLO CLASS!!!");
});

app.get("/data", (request, response) => {
  console.log("A request to the data route");
  console.log(request.path);
  response.json(foodData);
});

// this was using AI 
app.get("/data/:name", (req, res)=>{
  console.log(req.params)
  const { name } = req.params;
  const item = foodData.find(obj => obj.name === name)
  res.json(item)

})

app.listen(3000, () => {
console.log("app is listening at localhost:3000");
});

//second route



//app.get("/about", (request,response) => {})