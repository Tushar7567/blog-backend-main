const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const cors = require("cors")

require('./DB/connection')
const User = require('./model/userSchema')

const router = require('./routerr/auth')

app.use(express.json()) // application understands the data(in the form of json which app doesnot understand)
// app.use(express.urlencoded());
app.use(cors());


app.use("/home", data1)
console.log(data1);

// app.get("/",(req,res)=>{
//     res.send("You are connected")
// })

// app.get("/", (req,res)=>{
//     // res.cookie('test', 'oktoken');
//     res.send("You are connected to Contact page")
// })

// app.use("/api/users", registerRoutes);
app.use("/", router);

// app.listen(5000,()=>{
//     console.log("server running");
// })

app.listen(process.env.PORT||5000,()=>{
    console.log("server running");
})

// require("dotenv").config({path: "config.env"});
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connection = require("./DB/connection");
// const registerRoutes = require("./routerr/register");
// const authRoutes = require("./routerr/auth");

// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // routes
// app.use("/api/users", registerRoutes);
// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("You are connected");
// });

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));
