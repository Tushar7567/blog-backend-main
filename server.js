const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")

app.use("/home", data1)
console.log(data1);

app.get("/",(req,res)=>{
    res.send("You are connected")
})

// app.listen(5000,()=>{
//     console.log("server running");
// })

app.listen(process.env.PORT||8080,()=>{
    console.log("server running");
})