import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function Signup(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleSignup = async () => {

try{

await axios.post("http://localhost:5000/api/auth/signup",{
name,
email,
password
})

alert("Signup successful!")

navigate("/login")

}catch(error){

alert(error.response?.data?.message || "Signup failed")

}

}

return(

<div className="max-w-md mx-auto py-20">

<h1 className="text-3xl font-bold mb-6 text-center">
Signup
</h1>

<input
type="text"
placeholder="Name"
className="border p-3 w-full mb-4"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="border p-3 w-full mb-4"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-3 w-full mb-4"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleSignup}
className="bg-blue-600 text-white px-6 py-3 w-full"
>
Signup
</button>

<p className="mt-4 text-center">
Already have account? <Link to="/login" className="text-blue-600">Login</Link>
</p>

</div>

)

}

export default Signup