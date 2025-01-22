const express = require('express')
const app = express()
const path = require("path");

app.use(express.urlencoded())

const mongoose = require('mongoose')

app.set("view engine",'ejs'); //To attch Ejs view Engine
app.set(path.join(__dirname,'views'));// to Set path OF Views Folder


app.use("/",require("./routes/admin"))

app.listen(3000);