const express = require("express");
const dotenv = require("dotenv");

// const data = require("./MOCK_DATA.json")
const app = express();
app.use(express.json());

dotenv.config({path:"./config.env"});
const router =require("./router/index");
require("./db/conn");

const PORT = process.env.PORT;
app.use(router);

app.listen(PORT , ()=>{
  console.log(`Server started at port ${PORT}`);
})
