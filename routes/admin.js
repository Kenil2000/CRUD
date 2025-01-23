const express = require('express')
const routes = express();
const admincontroller = require("../controller/admincontroller")

routes.get("/form", admincontroller.form)

routes.post("/adddata", admincontroller.adddata);

routes.get("/viewdata",admincontroller.viewdata)

module.exports = routes;