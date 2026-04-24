export function generatePackages(cityPlaces,duration){

if(!cityPlaces) return []

return [

{
id:1,
name:"City Highlights Stay Package",
route:cityPlaces.slice(0,3),
duration:"1 Day",
stay:"Overnight Stay in Caravan",
features:["AC","Bed","Charging Ports"],
price:4500
},

{
id:2,
name:"Explorer Travel + Stay Package",
route:cityPlaces.slice(1,4),
duration:"1 Day / 1 Night",
stay:"Comfort Caravan Stay",
features:["AC","Bed","Mini Kitchen"],
price:5500
},

{
id:3,
name:"Full Experience Travel Package",
route:cityPlaces.slice(0,4),
duration:"2 Days / 1 Night",
stay:"Luxury Camper Stay",
features:["AC","Bed","Kitchen","Storage"],
price:7000
}

]

}