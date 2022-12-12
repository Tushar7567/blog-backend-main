const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const cors = require("cors")

require('./DB/connection')
const User = require('./model/userSchema')

const router = require('./routerr/auth')

const cookieParser = require('cookie-parser');

app.use(express.json()) // application understands the data(in the form of json which app doesnot understand)
// app.use(express.urlencoded());
app.use(cors());


app.use("/home", data1)
console.log(data1);


// app.use("/api/users", registerRoutes);
app.use("/", router);

// app.use("/admin", (req,res)=>{
//     console.log("Admin page");
//     res.send("Welcome to Admins page",req.parentUser);
// })

app.use(cookieParser());

// app.listen(5000,()=>{
//     console.log("server running");
// })

app.listen(process.env.PORT||8080,()=>{
    console.log("server running");
})
