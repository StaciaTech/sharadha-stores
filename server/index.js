import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoConnect } from "./config/Database.js"


const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())


MongoConnect()


import logRouter from "./app/Routes/LogRouter.js"


// API endpoints - surveyor's

app.use("/user", logRouter)


app.get("/", (req, res) => {
    res.send("<h1>Welcome To Your Node Server</h1>")
})


const PORT = process.env.PORT || 8000
const server = app.listen(PORT, () => console.log(`localhost ---------------------: ${PORT}`));
