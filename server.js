const express = require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');


const app=express();
// const allowedOrigins=["ecom-frontend-umber.vercel.app","ecom-frontend-git-main-sahana-p-k-s-projects.vercel.app",
// "ecom-frontend-gbivgka0h-sahana-p-k-s-projects.vercel.app" 
// ]

// 

app.use(cors({
    origin: 'ecom-frontend-umber.vercel.app',
  }));
app.use(express.json())

connectDB()

app.use("/auth",router)
app.use("/cart",cartrouter)

app.get('/',(req,res)=>{
    res.send('Hello,World')
})

const port = 5000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

