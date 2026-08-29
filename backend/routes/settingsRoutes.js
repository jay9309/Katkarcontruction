const express = require("express");

const {
    getSettings,
    updateSettings
} = require("../controllers/settingsController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// PUBLIC
router.get("/", getSettings);


// ADMIN
router.put("/", protect, updateSettings);


module.exports = router;