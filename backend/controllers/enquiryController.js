const Enquiry = require("../models/Enquiry");

const {
    sendContractorEmail,
    sendCustomerThankYou
} = require("../services/emailService");


// CUSTOMER SENDS ENQUIRY
const createEnquiry = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            message
        } = req.body;


        if (!name || !email || !phone || !message) {

            return res.status(400).json({

                message:
                    "Name, email, phone and message are required"
            });
        }


        const enquiry = await Enquiry.create({

            name,

            email,

            phone,

            message
        });


        // Send email to contractor
        try {

            await sendContractorEmail(enquiry);

        } catch (emailError) {

            console.error(
                "Contractor email failed:",
                emailError.message
            );
        }


        // Send automatic thank-you email
        try {

            await sendCustomerThankYou(enquiry);

        } catch (emailError) {

            console.error(
                "Customer email failed:",
                emailError.message
            );
        }


        res.status(201).json({

            message:
                "Enquiry submitted successfully",

            enquiryId: enquiry._id
        });


    } catch (error) {

        res.status(500).json({

            message: "Failed to submit enquiry",

            error: error.message
        });
    }
};


// ADMIN GETS ALL ENQUIRIES
const getEnquiries = async (req, res) => {

    try {

        const enquiries = await Enquiry.find()
            .sort({ createdAt: -1 });

        res.json(enquiries);

    } catch (error) {

        res.status(500).json({

            message: "Failed to fetch enquiries",

            error: error.message
        });
    }
};


// ADMIN UPDATES ENQUIRY STATUS
const updateEnquiry = async (req, res) => {

    try {

        const enquiry = await Enquiry.findByIdAndUpdate(

            req.params.id,

            {
                status: req.body.status
            },

            {
                new: true,
                runValidators: true
            }
        );


        if (!enquiry) {

            return res.status(404).json({

                message: "Enquiry not found"
            });
        }


        res.json(enquiry);

    } catch (error) {

        res.status(500).json({

            message: "Failed to update enquiry",

            error: error.message
        });
    }
};


// ADMIN DELETE
const deleteEnquiry = async (req, res) => {

    try {

        const enquiry = await Enquiry.findByIdAndDelete(
            req.params.id
        );


        if (!enquiry) {

            return res.status(404).json({

                message: "Enquiry not found"
            });
        }


        res.json({

            message: "Enquiry deleted successfully"
        });

    } catch (error) {

        res.status(500).json({

            message: "Failed to delete enquiry",

            error: error.message
        });
    }
};


module.exports = {
    createEnquiry,
    getEnquiries,
    updateEnquiry,
    deleteEnquiry
};