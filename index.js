const express = require("express");
const mogoose = require("mongoose")
mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => { console.log("connect to cloud db") })
const login = require("./routes/login.js")
const register = require("./routes/register.js")
const data = require("./routes/data.js");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv").config()
const port = process.env.PORT || 8080
app.use(express.json());                                
app.use("/login", login)
app.use("/register", register)
app.use("/data", data)
app.get("*", (req, res) => {
    res.status(404).json("page not found")
})
app.listen(port, () => {
    console.log(`server started at port  ${port}   `)
})

