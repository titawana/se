const express = require("express");
const {
    registerUser, loginUser, currentUser
} = require("../controllers/usersController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();




router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/current", validateToken, currentUser);

module.exports = router;