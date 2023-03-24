

import express from "express"
import bodyParser from "body-parser"
import connectDb from "./connectdb/connectDb.js"
import adminrouter from "./router/admin/register.js"
import candidaterouter from "./router/candidate/candidate.js"
import { ErrorHandler } from "./middleware/CustomErrorHandler.js"

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(adminrouter)
app.use(candidaterouter)
app.use(express.json())

connectDb()

app.get('/', (req, res) => {
    res.json({
        msg: 'http://localhost:3000'
    })
})

app.use(ErrorHandler)
app.listen(3000, () => {
    console.log("Server is running http://localhost:3000")
})

