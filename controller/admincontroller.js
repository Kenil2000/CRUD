const Admin = require("../model/admin")
module.exports.form = async (req, res) => {
    return res.render("form")
}

module.exports.adddata = async (req, res) => {
    try {
        const admindata = await Admin.create(req.body)
        return res.redirect("back")
    }
    catch (error) {
        console.log(error);
    }
}