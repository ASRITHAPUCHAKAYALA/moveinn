import { useEffect,useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"

function AdminDashboard(){

const [bookings,setBookings] = useState([])
const [users,setUsers] = useState([])

useEffect(()=>{

const fetchData = async()=>{

try{

const token = localStorage.getItem("token")

const bookingsRes = await axios.get(
"http://localhost:5000/api/admin/bookings",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

const usersRes = await axios.get(
"http://localhost:5000/api/admin/users",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

setBookings(bookingsRes.data)
setUsers(usersRes.data)

}catch(error){
console.log(error)
}

}

fetchData()

},[])

const totalRevenue = bookings.reduce((sum,b)=>sum+b.totalPrice,0)

return(

<div>

<Navbar/>

<div className="max-w-6xl mx-auto py-16">

<h1 className="text-3xl font-bold mb-10">
Admin Dashboard
</h1>

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-white shadow-md p-6 rounded-lg">
<h2 className="text-lg font-bold">Total Users</h2>
<p className="text-2xl text-blue-600">{users.length}</p>
</div>

<div className="bg-white shadow-md p-6 rounded-lg">
<h2 className="text-lg font-bold">Total Bookings</h2>
<p className="text-2xl text-green-600">{bookings.length}</p>
</div>

<div className="bg-white shadow-md p-6 rounded-lg">
<h2 className="text-lg font-bold">Total Revenue</h2>
<p className="text-2xl text-purple-600">₹{totalRevenue}</p>
</div>

</div>

<h2 className="text-xl font-bold mb-4">
All Bookings
</h2>

<table className="w-full border">

<thead className="bg-gray-100">

<tr>
<th className="p-3 border">User</th>
<th className="p-3 border">City</th>
<th className="p-3 border">Vehicle</th>
<th className="p-3 border">Price</th>
</tr>

</thead>

<tbody>

{bookings.map((b)=>(

<tr key={b._id}>

<td className="border p-2">
{b.user?.email}
</td>

<td className="border p-2">
{b.city}
</td>

<td className="border p-2">
{b.vehicle}
</td>

<td className="border p-2">
₹{b.totalPrice}
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default AdminDashboard