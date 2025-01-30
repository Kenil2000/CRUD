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

// to open editdata page 
module.exports.updateData = async (req, res) => {
    const adminData = await Admin.findById(req.params.id)
    return res.render("updateData", {
        oldadminData: adminData
    })
}

// to update new data 
module.exports.editData = async (req, res) => {
    try {
        const newData = await Admin.findByIdAndUpdate(req.body.EditID, req.body);
        console.log(newData);
        return res.redirect("/viewdata")
    } catch (err) {
        console.log(err)
    }

}

module.exports.forgetpassword = async (req, res) => {
    return res.render("forgetpass");
}

module.exports.checkpassword = async (req, res) => {
    try {
        console.log(req.body)
        const adminData = await Admin.findOne({ email: req.body.email })
        if (adminData) {
            if (adminData.password === req.body.oldpassword) {
                console.log(adminData);
                console.log("email Matched")
                return res.render("confirmpass");
            }
        } else {
            console.log("email Not Found")
            return res.redirect('back')
        }
    } catch (error) {
        console.log(error)
        return res.redirect("back");
    }
}

module.exports.newpassword = async (req, res) => {
    try {
       
    }
    catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}