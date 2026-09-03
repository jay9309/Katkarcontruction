const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");


// ==========================================
// UPLOAD IMAGE TO CLOUDINARY
// ==========================================

const uploadToCloudinary = (file, folder) => {

    return new Promise((resolve, reject) => {

        const uploadStream =
            cloudinary.uploader.upload_stream(
                {
                    folder: `katkar-constructions/${folder}`,
                    resource_type: "image"
                },

                (error, result) => {

                    if (error) {
                        reject(error);
                    } else {
                        resolve(result.secure_url);
                    }

                }
            );

        uploadStream.end(file.buffer);

    });
};


// ==========================================
// GET ALL PROJECTS
// ==========================================

const getProjects = async (req, res) => {

    try {

        const { status } = req.query;

        const filter = {};

        if (status) {
            filter.status = status;
        }

        const projects = await Project.find(filter)
            .sort({ createdAt: -1 });

        res.status(200).json(projects);

    } catch (error) {

        console.error("GET PROJECTS ERROR:", error);

        res.status(500).json({
            message: "Failed to fetch projects",
            error: error.message
        });

    }

};


// ==========================================
// GET SINGLE PROJECT
// ==========================================

const getProject = async (req, res) => {

    try {

        const project = await Project.findById(
            req.params.id
        );

        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });

        }

        res.status(200).json(project);

    } catch (error) {

        console.error("GET PROJECT ERROR:", error);

        res.status(500).json({
            message: "Failed to fetch project",
            error: error.message
        });

    }

};


// ==========================================
// CREATE PROJECT
// ==========================================

const createProject = async (req, res) => {

    try {

        console.log("Creating project...");
        console.log("BODY:", req.body);
        console.log("FILES:", req.files);


        const {
            title,
            description,
            location,
            status
        } = req.body;


        // -----------------------------------
        // VALIDATION
        // -----------------------------------

        if (!title || !description || !location) {

            return res.status(400).json({
                message:
                    "Title, description and location are required"
            });

        }


        // -----------------------------------
        // FILE ARRAYS
        // -----------------------------------

        const plans = [];
        const threeD = [];
        const elevation = [];
        const projection = [];
        const siteImages = [];


        // -----------------------------------
        // UPLOAD PLANS
        // -----------------------------------

        if (req.files?.plans) {

            for (const file of req.files.plans) {

                const url =
                    await uploadToCloudinary(
                        file,
                        "plans"
                    );

                plans.push(url);

            }

        }


        // -----------------------------------
        // UPLOAD 3D
        // -----------------------------------

        if (req.files?.threeD) {

            for (const file of req.files.threeD) {

                const url =
                    await uploadToCloudinary(
                        file,
                        "3d"
                    );

                threeD.push(url);

            }

        }


        // -----------------------------------
        // UPLOAD ELEVATION
        // -----------------------------------

        if (req.files?.elevation) {

            for (const file of req.files.elevation) {

                const url =
                    await uploadToCloudinary(
                        file,
                        "elevation"
                    );

                elevation.push(url);

            }

        }


        // -----------------------------------
        // UPLOAD PROJECTION
        // -----------------------------------

        if (req.files?.projection) {

            for (const file of req.files.projection) {

                const url =
                    await uploadToCloudinary(
                        file,
                        "projection"
                    );

                projection.push(url);

            }

        }


        // -----------------------------------
        // UPLOAD SITE IMAGES
        // -----------------------------------

        if (req.files?.siteImages) {

            for (const file of req.files.siteImages) {

                const url =
                    await uploadToCloudinary(
                        file,
                        "site-images"
                    );

                siteImages.push(url);

            }

        }


        // -----------------------------------
        // CREATE PROJECT
        // -----------------------------------

        const project = await Project.create({

            title,

            description,

            location,

            status: status || "upcoming",

            plans,

            threeD,

            elevation,

            projection,

            siteImages

        });


        console.log(
            "Project created:",
            project._id
        );


        res.status(201).json({

            message:
                "Project created successfully",

            project

        });


    } catch (error) {

        console.error(
            "CREATE PROJECT ERROR:",
            error
        );

        if (
    error.http_code ||
    error.statusCode ||
    /status code - 4\d{2}/.test(error.message || "")
) {
    console.error("CLOUDINARY ERROR:");
    console.error("Message:", error.message);
    console.error("HTTP Code:", error.http_code);
    console.error("Status Code:", error.statusCode);

    return res.status(502).json({
        message: "Cloudinary upload failed",
        error: error.message,
        http_code: error.http_code
    });
}

        res.status(500).json({

            message:
                "Failed to create project",

            error: error.message

        });

    }

};


// ==========================================
// UPDATE PROJECT
// ==========================================

const updateProject = async (req, res) => {

    try {

        const project =
            await Project.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );


        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });

        }


        res.json({

            message:
                "Project updated successfully",

            project

        });


    } catch (error) {

        console.error(
            "UPDATE PROJECT ERROR:",
            error
        );

        res.status(500).json({

            message:
                "Failed to update project",

            error: error.message

        });

    }

};


// ==========================================
// DELETE PROJECT
// ==========================================

const deleteProject = async (req, res) => {

    try {

        const project =
            await Project.findByIdAndDelete(
                req.params.id
            );


        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });

        }


        res.json({

            message:
                "Project deleted successfully"

        });


    } catch (error) {

        console.error(
            "DELETE PROJECT ERROR:",
            error
        );

        res.status(500).json({

            message:
                "Failed to delete project",

            error: error.message

        });

    }

};


module.exports = {

    getProjects,

    getProject,

    createProject,

    updateProject,

    deleteProject

};