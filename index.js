import express  from "express";
import { connectDB } from "./db.connect.js";

const app = express()


connectDB()

const port = 8080
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})



