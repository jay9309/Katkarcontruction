const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["upcoming", "ongoing", "completed"],
            default: "upcoming"
        },

        plans: [
            {
                type: String
            }
        ],

        threeD: [
            {
                type: String
            }
        ],

        elevation: [
            {
                type: String
            }
        ],

        projection: [
            {
                type: String
            }
        ],

        siteImages: [
            {
                type: String
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Project", projectSchema);