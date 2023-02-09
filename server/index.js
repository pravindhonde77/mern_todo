import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js"

const app=express()
app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))


app.use("/",Routes)

Connection()

const PORT=8080
app.listen(PORT,()=> console.log(`Your server is running successfully on PORT ${PORT}`))