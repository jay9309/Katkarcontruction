const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: ""
        },

        whatsapp: {
            type: String,
            default: ""
        },

        instagram: {
            type: String,
            default: ""
        },

        facebook: {
            type: String,
            default: ""
        },

        address: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Settings", settingsSchema);