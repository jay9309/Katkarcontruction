const Project = require("../models/Project");


// GET ALL PROJECTS
const getProjects = async (req, res) => {

    try {

        const { status } = req.query;

        let filter = {};

        if (status) {
            filter.status = status;
        }

        const projects = await Project.find(filter)
            .sort({ createdAt: -1 });

        res.json(projects);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch projects",
            error: error.message
        });
    }
};


// GET SINGLE PROJECT
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

        res.json(project);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch project",
            error: error.message
        });
    }
};


// CREATE PROJECT
const createProject = async (req, res) => {

    try {

        const {
            title,
            description,
            location,
            status,
            plans,
            threeD,
            elevation,
            projection,
            siteImages
        } = req.body;


        if (!title || !description || !location) {

            return res.status(400).json({
                message: "Title, description and location are required"
            });
        }


        const project = await Project.create({

            title,

            description,

            location,

            status: status || "upcoming",

            plans: plans || [],

            threeD: threeD || [],

            elevation: elevation || [],

            projection: projection || [],

            siteImages: siteImages || []
        });


        res.status(201).json({

            message: "Project created successfully",

            project
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to create project",
            error: error.message
        });
    }
};


// UPDATE PROJECT
const updateProject = async (req, res) => {

    try {

        const project = await Project.findByIdAndUpdate(
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

            message: "Project updated successfully",

            project
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to update project",
            error: error.message
        });
    }
};


// DELETE PROJECT
const deleteProject = async (req, res) => {

    try {

        const project = await Project.findByIdAndDelete(
            req.params.id
        );

        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });
        }

        res.json({
            message: "Project deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to delete project",
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