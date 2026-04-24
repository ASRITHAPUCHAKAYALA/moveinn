const express = require("express")
const router = express.Router()

const {getAllBookings,getAllUsers} = require("../controllers/adminController")

const protect = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/adminMiddleware")

router.get("/bookings",protect,adminMiddleware,getAllBookings)
router.get("/users",protect,adminMiddleware,getAllUsers)

module.exports = router