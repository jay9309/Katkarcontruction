const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const connectDB = require("../config/db");
const Admin = require("../models/Admin");

dotenv.config();

const createAdmin = async () => {

    try {

        await connectDB();

        const existingAdmin = await Admin.findOne({
            email: "admin@katkarconstructions.com"
        });

        if (existingAdmin) {

            console.log("Admin already exists");

            process.exit();
        }


        const hashedPassword = await bcrypt.hash(
            "Admin@123",
            10
        );


        const admin = await Admin.create({

            name: "Katkar Admin",

            email: "admin@katkarconstructions.com",

            password: hashedPassword,

            role: "admin"
        });


        console.log("Admin created successfully");

        console.log("Email:", admin.email);

        console.log("Password: Admin@123");

        process.exit();

    } catch (error) {

        console.error(error);

        process.exit(1);
    }
};

createAdmin();