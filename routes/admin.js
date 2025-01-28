const express = require('express')
const routes = express();
const admincontroller = require("../controller/admincontroller")

routes.get("/form", admincontroller.form)

routes.post("/adddata", admincontroller.adddata);

routes.get("/viewdata",admincontroller.viewdata);

routes.get("/delete/:id",admincontroller.deleteData);

routes.get("/update/:id",admincontroller.updateData);

routes.post("/editData",admincontroller.editData)

module.exports = routes;