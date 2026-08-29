const express = require("express");

const {
    createEnquiry,
    getEnquiries,
    updateEnquiry,
    deleteEnquiry
} = require("../controllers/enquiryController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// CUSTOMER
router.post("/", createEnquiry);


// ADMIN
router.get("/", protect, getEnquiries);

router.put("/:id", protect, updateEnquiry);

router.delete("/:id", protect, deleteEnquiry);


module.exports = router;