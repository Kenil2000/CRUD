const express = require('express')
const routes = express();
const admincontroller = require("../controller/admincontroller")

routes.get("/form", admincontroller.form)



module.exports = routes;