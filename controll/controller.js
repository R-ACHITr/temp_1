const { models } = require("mongoose");
const User = require("../models/userSchema");
const userService = require("../services/service");
get = async (req,res) =>{
  try {
    // const users = await User.find(); 
    const users = await userService.getAllUsers();
    res.status(200).json(users); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" }); 
  }
}

post = async (req,res) =>{
  const {name, email, phone, work, password, cpassword} = req.body;
  if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error : "feild error "});
  }

  try {
    await userService.createUser({ name, email, phone, work, password, cpassword });  
    res.status(201).json({ message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(422).json({ error: err.message });  
  }
};

getParticular = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await userService.getUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
}

del = async (req, res) => {
  const { email } = req.params;

  try {
      await userService.deleteUser(email);     
    
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
}

update = async (req, res) => {
  const { email } = req.params; 
  const { name, phone, work, password, cpassword } = req.body;

  if (!name && !phone && !work && !password && !cpassword) {
    return res.status(422).json({ error: "At least one field must be provided to update" });
  }

  try {
    await userService.updateUser(email, { name,email, phone, work, password, cpassword });  

    res.status(200).json({ message: "User updated successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error:err.message });
  }
}


module.exports = {get,post,getParticular,del,update};