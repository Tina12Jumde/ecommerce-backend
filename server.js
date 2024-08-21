import express from "express"
import dotenv from "dotenv"

dotenv.config ({path:"./config.env"})

let app = express()

let port =process.env.port ||8888

app.listen(port,()=>{
    console.log(`server is running on port ${port} , http://localhost:${port} ! `) 
})