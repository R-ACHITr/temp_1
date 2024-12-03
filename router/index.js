const express = require("express");
const app = express();
app.use(express.json());
app.use(require("./user.router"));
app.use(require("./userDisplay.router"));
module.exports = app;







// const { error } = require("console");
// const express = require("express");
// const router = express.Router();
// require("../db/conn");
// const User = require("../models/userSchema");
// // using async awiat
// const auth = require("../controll/controller");

// const user = require("./user.router");
// app.use(user);
// router.user;

// router.post('/register' , auth.post)
// router.get('/users', auth.get);

// router.get('/user/:email', auth.getParticular);

// router.delete('/user/:email', auth.del);

// router.put('/user/:email', auth.update);

// module.exports = router;













// normal approach
// router.get('/' , (req,res) =>{
//   res.send(`hello world from the server rouer js`);
// });

// router.post('/register' , (req,res)=>{
//   const {name, email, phone, work, password, cpassword} = req.body;
//   if(!name || !email || !phone || !work || !password || !cpassword){
//     return res.status(422).json({error : "feild error "});
//   }

//   User.findOne({email : email})
//   .then((userExist)=>{
//     if(userExist){
//       return res.status(422).json({error : "Email already exist"});
//     }
//     const user = new User({name, email, phone, work, password, cpassword})
//     user.save().then(()=>{
//       res.status(201).json({message :"success"});
//     }).catch((err)=> res.status(500).json({error : "failed"}))

//   }).catch(err =>{console.log(err);});
// })


// router.get('/' , (req,res) =>{
//   res.send(`hello world from the server rouer js`);
// });

