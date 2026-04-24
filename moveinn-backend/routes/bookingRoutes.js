const express = require("express")
const router = express.Router()

const { createBooking, getMyBookings, updateBookingStatus } = require("../controllers/bookingController")

const protect = require("../middleware/authMiddleware")

router.post("/", protect, createBooking)

router.get("/my-bookings", protect, getMyBookings)
router.put("/status/:id",protect,updateBookingStatus)

module.exports = router