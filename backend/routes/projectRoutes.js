const express = require("express");

const {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// PUBLIC
router.get("/", getProjects);

router.get("/:id", getProject);


// ADMIN ONLY
router.post("/", protect, createProject);

router.put("/:id", protect, updateProject);

router.delete("/:id", protect, deleteProject);


module.exports = router;