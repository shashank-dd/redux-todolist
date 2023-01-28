const express = require("express");

const  mongoose  = require("mongoose");


const dotenv = require("dotenv").config()

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => { console.log("connect to cloud db") })

const data = require("./routes/data");




const app = express();
// const cors = require("cors");

// app.use(cors({
//     origin: "*",
// }))
const port = process.env.PORT || 8080
app.use(express.json());                                

app.use("/", data)
app.get("*", (req, res) => {
    res.status(404).json("page not found")
})
app.listen(port, () => {
    console.log(`server started at port http://localhost:${port}`)
})

