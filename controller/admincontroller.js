const Admin = require("../model/admin")
module.exports.form = async (req, res) => {
    return res.render("form")
}

//Add Admin Data
module.exports.adddata = async (req, res) => {
    try {
        const admindata = await Admin.create(req.body);
        return res.redirect('/viewdata')
    }
    catch (error) {
        console.log(error);
    }
}

//View Admin Data
module.exports.viewdata = async (req, res) => {
    try {
        const adminData = await Admin.find({});
        // console.log(adminData)
        return res.render('viewdata', {
            adminData: adminData
        })

    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}

//Delete Admin Data
module.exports.deleteData = async (req, res) => {
    try {
        let deletedData = await Admin.findByIdAndDelete(req.params.id);
        console.log(req.params)
        console.log(deletedData);
        return res.redirect("/viewdata");
    } catch (err) {
        console.log(err, "Something Went Wrong");
    }
}

module.exports.updateData = async (req, res) => {
    const adminData = await Admin.findById(req.params.id)
    // console.log(adminData)
    return res.render("updateData", {
        oldadminData: adminData
    })
}

module.exports.editData = async (req, res) => {
    try {
        const newData = await Admin.findByIdAndUpdate(req.body.EditID, req.body);
        console.log(newData);
        return res.redirect("/viewdata")
    } catch (err) {
        console.log(err)
    }

}