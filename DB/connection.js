const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('dotenv').config({path:"./config.env"})

const Db = process.env.URI

// mongoose.connect(Db).then(() => {
//     console.log('Database connection successful');
// }).catch((err) => {
//     console.log('Database failed to connect');
// })

const connectDB = async () => {
    try {
       mongoose.connect(Db);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}

connectDB().then(() => {
    app.listen(process.env.PORT||8080, () => {
        console.log("server running");
    })
})

