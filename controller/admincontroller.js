const Admin = require("../model/admin") 
module.exports.form = async (req, res) => {
    try {
        const data = await Admin.create(req.body);

    } catch (error) {
        console.log(error);
    }
}