import 'dotenv/config'
import express from "express"
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
const app=express();
const PORT=process.env.PORT||3000

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)


app.use((err,req,res,next)=>{
        const statusCode=err.statusCode||500
        const errorMessage=err.message||"Internal Server Error"
        const error={
            statusCode,
            errorMessage
        }
        return res.status(statusCode).json(error)
})

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log("Server running on port "+PORT);
})