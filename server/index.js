require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const UserRoute=require('./routes/user.routes')
const cors=require('cors')
const app=express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to DB!'));

app.use(cors());
app.use(express.json());
app.use("/api/users",UserRoute)



app.listen(3000,()=>{
    console.log("server is running")
})
//jpv2Qk1CzZpYcYgZ