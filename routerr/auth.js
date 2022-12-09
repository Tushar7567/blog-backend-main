const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('../DB/connection');
const User = require('../model/userSchema');

router.get("/",(req,res)=>{
    res.send("You are connected from router.js")
})

router.post("/signup", async(req,res)=>{
    // console.log(req.body);
    // res.json({message : req.body})
    res.send("SigUp")


    const {name, email, phone, password, cpassword} = req.body;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({ error : "Please fill the value properly"});
    }

    try{
        const userExist = await User.findOne({email : email});
        
        if(userExist){
            console.log( "Email already exist");
            return res.status(422).json({ error : "Email already exist"});
        }else if(password != cpassword){
            console.log( "Password does not match");
            return res.status(422).json({ error : "Password does not match"});
        } else{
            const user = new User({name, email, phone, password, cpassword});

            await user.save();
    
            console.log(user);
            res.status(201).json({ message : "User registered successfully"});
           
        }



        // .then((userExist) => {
        //     if(userExist){
        //         return res.status(422).json({ error : "Email already exist"});

        //     }

        //     const user = new User({name, email, phone, password, cpassword});

        //     user.save().then(() => {
        //         return res.status(201).json({ message : "User registered successfully"});
        //     }).catch((err) => res.status(500).json({ error : "Failed to registered"}));
            
        // })
    }
    catch(err) {
        console.log(err);
    };

})

router.post('/signin', async (req,res) => {
    // console.log(req.body);
    // res.json({message : "Success"})
    res.send("SignIn")


   try{
        const {email, password} = req.body;

        if( !email || !password ){
            return res.status(400).json({ error : "Please fill the data"});
        } 

        const userLogin = await User.findOne({email : email})
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"});
            }else{
                res.json({message : "User signin successfully"});
            }
        }else{
            res.status(400).json({error: "Invalid Credentials"});
        }
        // res.json({message : "User signin successfully"});
   }
   catch(err){
    console.log(err);
   }
})

module.exports = router;




// const router = require("express").Router();
// const { User, validate } = require("../model/userSchema");
// const bcrypt = require("bcrypt");

// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		console.log(error);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await User.findOne({ email: req.body.email });
// 		if (user)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(12));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new User({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

// module.exports = router;
