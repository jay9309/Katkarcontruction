const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");


// LOGIN
const loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const admin = await Admin.findOne({
            email: email.toLowerCase()
        });

        if (!admin) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = generateToken(admin._id);

        res.json({
            message: "Login successful",

            token,

            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// GET CURRENT ADMIN
const getCurrentAdmin = async (req, res) => {

    res.json({
        admin: req.admin
    });
};


module.exports = {
    loginAdmin,
    getCurrentAdmin
};