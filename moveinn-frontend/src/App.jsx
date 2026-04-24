import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Vehicles from "./pages/vehicles"
import VehicleDetails from "./pages/VehicleDetails"
import SelectVehicle from "./pages/SelectVehicle"
import Booking from "./pages/Booking"
import BookingSuccess from "./pages/BookingSuccess"
import MyTrips from "./pages/MyTrips"
import AdminDashboard from "./pages/AdminDashboard"


import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicle-details/:id" element={<VehicleDetails />} />
        <Route path="/select-vehicle/:packageId" element={<SelectVehicle />} />
        <Route path="/booking/:vehicleId" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-trips" element={<MyTrips/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App