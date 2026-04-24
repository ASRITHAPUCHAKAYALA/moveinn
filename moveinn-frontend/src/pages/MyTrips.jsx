import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"

function MyTrips(){

const [bookings,setBookings] = useState([])
const [loading,setLoading] = useState(true)

const navigate = useNavigate()

useEffect(()=>{

const fetchBookings = async()=>{

try{

const token = localStorage.getItem("token")

if(!token){
alert("Please login first")
navigate("/login")
return
}

const res = await axios.get(
"http://localhost:5000/api/bookings/my-bookings",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

setBookings(res.data)

}catch(error){
console.log(error)
}
finally{
setLoading(false)
}

}

fetchBookings()

},[navigate])


if(loading){
return(
<div>
<Navbar/>
<div className="text-center mt-20 text-lg">
Loading your trips...
</div>
</div>
)
}

return(

<div>

<Navbar/>

<div className="max-w-5xl mx-auto py-16">

<h1 className="text-3xl font-bold mb-8 text-center">
My Trips
</h1>

{bookings.length===0 ? (

<p className="text-center text-gray-500">
No bookings yet
</p>

):( 

bookings.map((trip)=>(

<div
key={trip._id}
className="bg-white shadow-md rounded-lg p-6 mb-6"
>

<h2 className="text-xl font-bold text-blue-600">
{trip.city}
</h2>

<p className="mt-2">
<strong>Vehicle:</strong> {trip.vehicle}
</p>

<p>
<strong>Start Date:</strong> {new Date(trip.startDate).toLocaleDateString()}
</p>

<p>
<strong>End Date:</strong> {new Date(trip.endDate).toLocaleDateString()}
</p>

<p className="font-bold text-green-600 mt-2">
Total Price: ₹{trip.totalPrice}
</p>

</div>

))

)}

</div>

</div>

)

}

export default MyTrips