const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const Mongodb = require("./config/db")

Mongodb.connectDB()

const errorHandler = require("./middleware/errorHandler").error;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/sports", require("./routes/sports"))
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);

})



