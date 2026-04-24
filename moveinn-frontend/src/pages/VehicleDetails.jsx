import { useParams } from "react-router-dom"
import Navbar from "../components/navbar"

const vehicles = [
{
id: 1,
name: "Caravan Explorer",
capacity: 4,
features: ["Air Conditioning","Bed","Mini Kitchen","Power Outlets"]
},
{
id: 2,
name: "MoveInn Comfort",
capacity: 6,
features: ["AC","Bed","Storage","Charging Ports"]
},
{
id: 3,
name: "Luxury Camper",
capacity: 4,
features: ["Luxury Bed","Kitchen","TV","Bathroom"]
}
]

function VehicleDetails() {

const { id } = useParams()

const vehicle = vehicles.find(v => v.id === parseInt(id))

if (!vehicle) {
return <div>Vehicle not found</div>
}

return (

<div>

<Navbar />

<div className="max-w-5xl mx-auto py-16">

<h1 className="text-4xl font-bold mb-6">
{vehicle.name}
</h1>

<p className="text-gray-600 mb-6">
A fully equipped travel van designed for comfortable trips.
</p>

<div className="grid grid-cols-2 gap-8">

<div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
Vehicle Image
</div>

<div>

<h2 className="text-2xl font-semibold mb-4">
Features
</h2>

<ul className="space-y-2 text-gray-700">

<li>Capacity: {vehicle.capacity} People</li>

{vehicle.features.map((feature,index)=>(
<li key={index}>• {feature}</li>
))}

</ul>

<p className="text-gray-600 mt-6">
Price depends on selected travel package.
</p>

<button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
Choose Travel Package
</button>

</div>

</div>

</div>

</div>

)

}

export default VehicleDetails