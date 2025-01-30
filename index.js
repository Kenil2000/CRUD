const express = require('express')
const app = express()
const path = require("path");
const db = require('./config/mongoose'); //to Set path OF mongoose file

app.use(express.urlencoded())// to decode POST request (Compulsory for POST Request)


app.set("view engine", 'ejs'); //To attch Ejs view Engine
app.set(path.join(__dirname, 'views'));// to Set path OF Views Folder


app.use("/", require("./routes/admin"))

app.listen(3000);