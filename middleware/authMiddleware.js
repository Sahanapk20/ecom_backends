const jwt = require ('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const authHeader=req.header("Authorization")

    if(!authHeader) return res.status(401).json({messgae:"Invalid Authorization"})

        const token= authHeader.split(" ")[1]
        if(!token) return res.status(401).json({message:"no token provided"})
            try{
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        req.user=verified
        next()
        }
        catch(err){
            return res.status(401).json({message:"Ivalid Token"})
        }
}  
module.exports=authMiddleware
// Authorization:Bearer,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdhZTRhZDEyZDc4MDI5YmQzODVkZSIsImlhdCI6MTc0MjE4ODExOH0.9lCIVGuEqwsXQzezece0gjaJcLwu736bTdQyO2QDgwc