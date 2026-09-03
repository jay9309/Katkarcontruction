const express = require("express");

const {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
} = require("../controllers/projectController");

const protect =
    require("../middleware/authMiddleware");

const upload =
    require("../middleware/uploadMiddleware");


const router = express.Router();


// ==========================================
// PUBLIC
// ==========================================

router.get("/", getProjects);

router.get("/:id", getProject);


// ==========================================
// ADMIN
// ==========================================

router.post(
    "/",
    protect,
    upload.fields([
        {
            name: "plans",
            maxCount: 10
        },
        {
            name: "threeD",
            maxCount: 10
        },
        {
            name: "elevation",
            maxCount: 10
        },
        {
            name: "projection",
            maxCount: 10
        },
        {
            name: "siteImages",
            maxCount: 20
        }
    ]),
    createProject
);


router.put(
    "/:id",
    protect,
    updateProject
);


router.delete(
    "/:id",
    protect,
    deleteProject
);


module.exports = router;