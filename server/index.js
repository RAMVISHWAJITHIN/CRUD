require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const UserRoute=require('./routes/user.routes')
const cors=require('cors')
const app=express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to DB!'));


app.use(cors({
  origin: 'https://crud-s8uy.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use("/api/users",UserRoute)



app.listen(3000,()=>{
    console.log("server is running")
})
//jpv2Qk1CzZpYcYgZ