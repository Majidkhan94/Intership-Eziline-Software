import dotenv from "dotenv"; dotenv.config({path: ".env"})
import express from "express"; const app = express();
import cors from "cors"
import helmet from "helmet"
import cookieparser from "cookie-parser"
import {connectionString} from "./DBConnection/connectionString.js"
import { router } from "./Router/router.js";

// Middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use(cookieparser())
app.use(helmet())
app.use(cors({origin: process.env.CORS_ORIGIN, credentials: true}))



// Database
connectionString()
.then(()=>{ app.listen(process.env.PORT,()=>console.log(`http://localhost:${process.env.PORT}`))})


// Router
app.use("/api/v1/auth", router)



// api Error to JSON Convert

app.use((err,req,res,next)=>{

  const status = err.status || 500
  const message = err.message || "Internal Server Error";

  res.status(status)
  .json({status: status, message: message})
})