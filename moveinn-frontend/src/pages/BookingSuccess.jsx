import Navbar from "../components/navbar"

function BookingSuccess(){

const bookingId = "MVN" + Math.floor(Math.random()*100000)

return(

<div>

<Navbar />

<div className="max-w-3xl mx-auto py-20 text-center">

<h1 className="text-4xl font-bold text-green-600 mb-6">
Booking Confirmed 🎉
</h1>

<p className="text-lg text-gray-600 mb-4">
Your MoveInn travel + stay package has been successfully booked.
</p>

<p className="text-xl font-semibold mb-6">
Booking ID: {bookingId}
</p>

<p className="text-gray-500 mb-10">
Please save your booking ID for future reference.
</p>

<a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Back to Home
</a>

</div>

</div>

)

}

export default BookingSuccess