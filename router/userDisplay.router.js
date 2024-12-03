const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

require("../db/conn");


router.post("/login" , async (req,res)=>{
  try{
    const {email,password} = req.body;
    if(!email || !password)
      {
        return res.status(400).json({error:"enter all feilds"});
      }
      const userLogin = await User.findOne({email : email});
    }catch(err){
      
    }
  })
  module.exports = router;