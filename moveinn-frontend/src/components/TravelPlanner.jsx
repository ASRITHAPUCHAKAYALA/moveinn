import { useState } from "react"
import { cities } from "../data/cities"
import { generatePackages } from "../utils/generatePackages"
import { Link } from "react-router-dom"

function TravelPlanner(){

const [city,setCity] = useState("")
const [startDate,setStartDate] = useState("")
const [endDate,setEndDate] = useState("")
const [packages,setPackages] = useState([])

const calculateDuration = () => {

if(!startDate || !endDate) return 0

const start = new Date(startDate)
const end = new Date(endDate)

const diff = end - start

return diff / (1000 * 60 * 60 * 24)

}

const handleFindPackages = () => {

if(!city) return

const places = cities[city]

const duration = calculateDuration()

const generatedPackages = generatePackages(places,duration)

setPackages(generatedPackages)

}

return(

<div className="max-w-6xl mx-auto py-16">

<h2 className="text-3xl font-bold text-center mb-8">
Plan Your Stay & Travel
</h2>

<div className="flex gap-4 justify-center flex-wrap">

<select
className="border p-3 rounded-lg"
onChange={(e)=>setCity(e.target.value)}
>

<option>Select City</option>

{Object.keys(cities).map((cityName)=>(
<option key={cityName} value={cityName}>
{cityName}
</option>
))}

</select>

<input
type="date"
className="border p-3 rounded-lg"
onChange={(e)=>setStartDate(e.target.value)}
/>

<input
type="date"
className="border p-3 rounded-lg"
onChange={(e)=>setEndDate(e.target.value)}
/>

<button
onClick={handleFindPackages}
className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
Find Packages
</button>

</div>

<div className="grid grid-cols-3 gap-8 mt-10">

{packages.map((pkg)=>(
<div key={pkg.id} className="bg-white shadow-lg p-6 rounded-xl">

<h3 className="text-xl font-bold">
{pkg.name}
</h3>

<p className="text-gray-600 mt-3">
Route: {pkg.route.join(" → ")}
</p>

<p className="text-sm text-gray-500 mt-2">
Stay: {pkg.stay}
</p>

<p className="text-sm text-gray-500">
Duration: {pkg.duration}
</p>

<ul className="mt-2 text-sm text-gray-500">

{pkg.features.map((feature,index)=>(
<li key={index}>• {feature}</li>
))}

</ul>

<p className="text-blue-600 font-bold mt-4">
₹{pkg.price}
</p>

<Link 
to={`/select-vehicle/${pkg.id}`}
state={{
city,
startDate,
endDate,
packageName: pkg.name,
packagePrice: pkg.price
}}
>
<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
Select Package
</button>
</Link>

</div>
))}

</div>

</div>

)

}

export default TravelPlanner