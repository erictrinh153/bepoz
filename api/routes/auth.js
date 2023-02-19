const router = require("express").Router();
const User = require("../models/Users");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
//Resgister

router.post("/register", async (req, res) => {
    const existingUser  = await User.find({email: req.body.email});
    if( existingUser.length === 0){
      const newUser = new User({
          email: req.body.email,
          password: Crypto.AES.encrypt(
              req.body.password,
              process.env.SECRET_KEY
              )
      });
      try {
          const user = await newUser.save();
          res.status(200).json(user);
      } catch (error) {
          res.status(500).json(error);
      }
    } else{
      res.status(500).json({status: 500, message: "User already registered"});
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
      const user = await User.find({ email: req.body.email });
        if(user.length === 0) {
          res.status(401).json({message:"User not found"});
        }else{
          const encrypted = Crypto.AES.decrypt(user[0].password, process.env.SECRET_KEY);
          const originalPassword = encrypted.toString(Crypto.enc.Utf8);
          if(originalPassword !== req.body.password) {
            res.status(401).json({message:"Wrong password or email address"});
          } else {
            const accessToken = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.SECRET_KEY, {
            expiresIn: 3600 ,
          });
      
          const { password, ...info } = user;
      
          res.status(200).json({...info, accessToken});
          }
        }
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;

