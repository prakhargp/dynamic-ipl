const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;
app.use(cors());
const index = require("./index.js")
index();
console.log("Hellooo World")

app.get("/",(req,res)=>{
res.sendFile(__dirname + "/public/index.html");
})
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
  })

app.use(express.static(__dirname + "/public"))

app.listen(port, function() {
    console.log("Runnning on " + port);
  });

module.exports = app; 