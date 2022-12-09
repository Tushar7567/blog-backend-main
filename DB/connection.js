const mongoose = require('mongoose');

// require('dotenv').config({path:"./config.env"})

const Db = process.env.URI

mongoose.connect(Db).then(() => {
    console.log('Database connection successful');
}).catch((err) => {
    console.log('Database failed to connect');
})

// const mongoose = require("mongoose");
// require("dotenv").config({path: "config.env"});


//module.exports = () => {
  // const connectionParams = {
  // 	useNewUrlParser: true,
  // 	useUnifiedTopology: true,
  // };
  // const Db = process.env.URI
  // try {
  // 	mongoose.connect(Db);
  // 	console.log("Connected to database successfully");
  // } catch (error) {
  // 	console.log(error);
  // 	console.log("Could not connect database!");
  // }

//   const Db = process.env.URI;

//   mongoose
//     .connect(Db,{
//       	useNewUrlParser: true,
//       	useUnifiedTopology: true,
//       })
//     .then(() => {
//       console.log("Database connection successful");
//     })
//     .catch((err) => {
//       console.log("Database failed to connect");
//     });
// };
