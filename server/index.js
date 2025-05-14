const express=require('express')
const mongoose=require('mongoose')
const UserRoute=require('./routes/user.routes')
const cors=require('cors')
const app=express();

mongoose.connect('mongodb+srv://usernameoffline404:jpv2Qk1CzZpYcYgZ@cluster0.k5ow8xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to DB!'));

app.use(cors());
app.use(express.json());
app.use("/api/users",UserRoute)



app.listen(3000,()=>{
    console.log("server is running")
})
//jpv2Qk1CzZpYcYgZ