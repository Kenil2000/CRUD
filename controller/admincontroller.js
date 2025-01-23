const Admin = require("../model/admin")
module.exports.form = async (req, res) => {
    return res.render("form")
}

module.exports.adddata = async (req, res) => {
    try {
        const admindata = await Admin.create(req.body)
        // console.log(admindata)
        return res.redirect('/viewdata')
    }
    catch (error) {
        console.log(error);
    }
}

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