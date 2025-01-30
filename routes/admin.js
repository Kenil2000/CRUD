const express = require('express')
const routes = express();
const admincontroller = require("../controller/admincontroller")

routes.get("/form", admincontroller.form)// to open form page

routes.post("/adddata", admincontroller.adddata); // to add admin data to the database

routes.get("/viewdata",admincontroller.viewdata); // to open view data page

routes.get("/delete/:id",admincontroller.deleteData); // to delete single record using id 

routes.get("/update/:id",admincontroller.updateData); // to update single record using id

routes.post("/editData",admincontroller.editData) // to edit admin data 

routes.get("/forgetpassword",admincontroller.forgetpassword); 

routes.post("/checkpassword",admincontroller.checkpassword)

routes.post("newpassword",admincontroller.newpassword)

module.exports = routes;