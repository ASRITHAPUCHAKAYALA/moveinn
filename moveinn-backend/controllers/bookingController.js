const Booking = require("../models/Booking")
const User = require("../models/User")
const sendBookingEmail = require("../services/emailService")

// CREATE BOOKING
const createBooking = async (req, res) => {

try {

const { city, vehicle, startDate, endDate, totalPrice } = req.body

const userId = req.user.id

const user = await User.findById(userId)

const booking = new Booking({
user: userId,
city,
vehicle,
startDate,
endDate,
totalPrice
})

await booking.save()

await sendBookingEmail(user.email, booking)

res.status(201).json({
message: "Booking successful",
booking
})

} catch (error) {

console.log("Booking Error:", error)

res.status(500).json({
message: "Booking failed"
})

}

}


// GET USER BOOKINGS
const getMyBookings = async (req, res) => {

try {

const bookings = await Booking.find({
user: req.user.id
}).sort({ createdAt: -1 })

res.json(bookings)

} catch (error) {

console.log(error)

res.status(500).json({
message: "Failed to fetch bookings"
})

}

}


// UPDATE BOOKING STATUS (ADMIN)
const updateBookingStatus = async (req, res) => {

try {

const { status } = req.body

const booking = await Booking.findByIdAndUpdate(
req.params.id,
{ status },
{ new: true }
)

res.json({
message: "Status updated",
booking
})

} catch (error) {

console.log(error)

res.status(500).json({
message: "Failed to update status"
})

}

}


module.exports = {
createBooking,
getMyBookings,
updateBookingStatus
}