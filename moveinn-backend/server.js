const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const paymentRoutes = require("./routes/paymentRoutes")
const adminRoutes = require("./routes/adminRoutes")
const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/auth",authRoutes)
app.use("/api/bookings",bookingRoutes)
app.use("/api/payment",paymentRoutes)
app.use("/api/admin", adminRoutes)

app.get("/",(req,res)=>{
res.send("MoveInn Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})