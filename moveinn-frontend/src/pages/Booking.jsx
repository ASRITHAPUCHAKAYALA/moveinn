import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"
import { useEffect } from "react"
import axios from "axios"

function Booking(){

const navigate = useNavigate()
const location = useLocation()

const {
city,
startDate,
endDate,
packageName,
packagePrice,
vehicleName,
vehicleCharge
} = location.state || {}

const totalPrice = packagePrice + vehicleCharge

useEffect(() => {

const token = localStorage.getItem("token")

if(!token){
alert("Please login to continue booking")
navigate("/login")
}

},[navigate])


const handleConfirm = async()=>{

try{

const token = localStorage.getItem("token")

await axios.post(
"http://localhost:5000/api/bookings",
{
city,
vehicle:vehicleName,
startDate,
endDate,
totalPrice
},
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

alert("Booking successful")

navigate("/booking-success")

}catch(error){

console.log(error)

alert("Booking failed")

}

}


const handlePayment = async () => {

try{

const order = await axios.post(
"http://localhost:5000/api/payment/create-order",
{ amount: totalPrice }
)

const options = {
key: "rzp_test_SPXN0J2bQNrZ7G",   
amount: order.data.amount,
currency: "INR",
name: "MoveInn Travel",
description: "Trip Booking",
order_id: order.data.id,

handler: async function(){

await handleConfirm()

alert("Payment Successful")

}
}

const rzp = new window.Razorpay(options)

rzp.open()

}catch(error){

console.log(error)

alert("Payment Failed")

}

}


return(

<div>

<Navbar />

<div className="max-w-4xl mx-auto py-16">

<h1 className="text-4xl font-bold text-center mb-10">
Booking Summary
</h1>

<div className="bg-white shadow-lg rounded-xl p-8">

<h2 className="text-2xl font-semibold mb-6">
Trip Details
</h2>

<p className="mb-2">
<strong>City:</strong> {city}
</p>

<p className="mb-2">
<strong>Package:</strong> {packageName}
</p>

<p className="mb-2">
<strong>Vehicle:</strong> {vehicleName}
</p>

<p className="mb-2">
<strong>Start Date:</strong> {startDate}
</p>

<p className="mb-6">
<strong>End Date:</strong> {endDate}
</p>

<hr className="my-6"/>

<p className="mb-2">
Package Price: ₹{packagePrice}
</p>

<p className="mb-2">
Vehicle Charge: ₹{vehicleCharge}
</p>

<p className="text-xl font-bold text-blue-600">
Total Price: ₹{totalPrice}
</p>

<button
onClick={handlePayment}
className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
>
Pay & Confirm Booking
</button>

</div>

</div>

</div>

)

}

export default Booking