import { Link } from "react-router-dom"

function Navbar() {

const user = JSON.parse(localStorage.getItem("user"))

const handleLogout = () => {
localStorage.removeItem("token")
localStorage.removeItem("user")
window.location.href = "/"
}

return (

<nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

<h1 className="text-2xl font-bold text-blue-600">
MoveInn
</h1>

<ul className="flex gap-8 text-gray-700 font-medium items-center">

<li><Link to="/">Home</Link></li>

<li><Link to="/vehicles">Vehicles</Link></li>

<li><Link to="/booking">Book</Link></li>
<li>
<Link to="/my-trips">My Trips</Link>
</li>

{user ? (

<>
<li className="font-semibold text-blue-600">
Hi, {user.name}
</li>

<li>
<button
onClick={handleLogout}
className="bg-red-500 text-white px-4 py-2 rounded"
>
Logout
</button>
</li>
</>

) : (

<>
<li><Link to="/login">Login</Link></li>
<li><Link to="/signup">Signup</Link></li>
</>

)}

</ul>

</nav>

)

}

export default Navbar