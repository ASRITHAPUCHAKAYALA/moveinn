import Navbar from "../components/navbar"
import Hero from "../components/hero"
import TravelPlanner from "../components/TravelPlanner"

function Home() {
  return (
    <div>

      <Navbar />
      <TravelPlanner />
      <Hero />

      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Popular MoveInn Vans
        </h2>

        <p className="text-gray-500 mt-2">
          Choose the best vehicle for your journey
        </p>
      </div>

    </div>
  )
}

export default Home