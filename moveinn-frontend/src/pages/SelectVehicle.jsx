import { useParams,useLocation,Link } from "react-router-dom"
import Navbar from "../components/navbar"

const vehicles = [
{
id:1,
name:"Caravan Explorer",
capacity:4,
extraCharge:500,
features:["AC","Bed","Charging Ports"]
},
{
id:2,
name:"MoveInn Comfort",
capacity:6,
extraCharge:800,
features:["AC","Bed","Mini Kitchen"]
},
{
id:3,
name:"Luxury Camper",
capacity:4,
extraCharge:1200,
features:["AC","Luxury Bed","Kitchen","Storage"]
}
]

function SelectVehicle(){

const { packageId } = useParams()
const location = useLocation()

const { city,startDate,endDate,packageName,packagePrice } = location.state

return(

<div>

<Navbar />

<div className="max-w-6xl mx-auto py-16">

<h1 className="text-4xl font-bold text-center mb-10">
Select Your Vehicle
</h1>

<div className="grid grid-cols-3 gap-8">

{vehicles.map(vehicle=>(
<div key={vehicle.id} className="bg-white shadow-lg rounded-xl p-6">

<h2 className="text-xl font-bold">
{vehicle.name}
</h2>

<p className="text-gray-600 mt-2">
Capacity: {vehicle.capacity} People
</p>

<p className="text-blue-600 mt-2">
Extra Charge: ₹{vehicle.extraCharge}
</p>

<ul className="mt-3 text-sm text-gray-500">

{vehicle.features.map((f,i)=>(
<li key={i}>• {f}</li>
))}

</ul>

<Link 
to={`/booking/${vehicle.id}`}
state={{
city,
startDate,
endDate,
packageName,
packagePrice,
vehicleName:vehicle.name,
vehicleCharge:vehicle.extraCharge
}}
>
<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
Select Vehicle
</button>
</Link>

</div>
))}

</div>

</div>

</div>

)

}

export default SelectVehicle