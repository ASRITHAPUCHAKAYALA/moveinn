const Booking = require("../models/Booking")
const User = require("../models/User")

const getAllBookings = async (req,res)=>{

try{

const bookings = await Booking.find()
.populate("user","email")

res.json(bookings)

}catch(error){

console.log(error)

res.status(500).json({
message:"Failed to fetch bookings"
})

}

}

const getAllUsers = async (req,res)=>{

try{

const users = await User.find()

res.json(users)

}catch(error){

console.log(error)

res.status(500).json({
message:"Failed to fetch users"
})

}

}

module.exports = {
getAllBookings,
getAllUsers
}