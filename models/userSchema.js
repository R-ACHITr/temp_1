const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
  name :{
    type : String,
    required : true
  },
  email :{
    type : String,
    required : true
  },
  phone :{
    type : Number,
    required : true
  },
  work :{
    type : String,
    required : true
  },
  password :{
    type : String,
    required : true
  },
  cpassword :{
    type : String,
    required : true
  },
})

const User = mongoose.model('USER' , userSchema);

module.exports = User;