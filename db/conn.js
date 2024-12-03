const mongoose = require("mongoose");



const db=process.env.DATABASE;
mongoose.connect(db).then(() => {
  console.log(`Connection established`);
}).catch((err) => console.log(`Not connected: ${err}`));