import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = async () => {

try{

const res = await axios.post("http://localhost:5000/api/auth/login",{
email,
password
})

localStorage.setItem("token", res.data.token)
localStorage.setItem("user", JSON.stringify(res.data.user))

alert("Login successful")

navigate("/")

}catch(error){

alert(error.response?.data?.message || "Login failed")

}

}

return(

<div className="max-w-md mx-auto py-20">

<h1 className="text-3xl font-bold mb-6 text-center">
Login
</h1>

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
onClick={handleLogin}
className="bg-blue-600 text-white px-6 py-3 w-full"
>
Login
</button>

<p className="mt-4 text-center">
No account? <Link to="/signup" className="text-blue-600">Signup</Link>
</p>

</div>

)

}

export default Login