import Navbar from "../components/navbar"
import { Link } from "react-router-dom"

function Vehicles() {

const vehicles = [
{
id: 1,
name: "Caravan Explorer",
capacity: 4
},
{
id: 2,
name: "MoveInn Comfort",
capacity: 6
},
{
id: 3,
name: "Luxury Camper",
capacity: 4
}
]

return (

<div>

<Navbar />

<div className="max-w-6xl mx-auto py-16">

<h1 className="text-4xl font-bold text-center mb-10">
Available Vehicles
</h1>

<div className="grid grid-cols-3 gap-8">

{vehicles.map((vehicle)=>(
<div key={vehicle.id} className="bg-white shadow-lg rounded-xl p-6">

<h2 className="text-xl font-bold">
{vehicle.name}
</h2>

<p className="text-gray-600 mt-2">
Capacity: {vehicle.capacity} People
</p>

<Link to={`/vehicle-details/${vehicle.id}`}>
<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
View Details
</button>
</Link>

</div>
))}

</div>

</div>

</div>

)

}

export default Vehicles