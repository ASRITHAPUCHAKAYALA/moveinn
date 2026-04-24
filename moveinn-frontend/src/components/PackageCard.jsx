function PackageCard({ title, places, price }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {places}
      </p>

      <div className="flex justify-between items-center">

        <span className="text-blue-600 font-bold text-lg">
          ₹{price}
        </span>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </button>

      </div>

    </div>
  )
}

export default PackageCard