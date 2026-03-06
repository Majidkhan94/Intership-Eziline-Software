import { useState } from "react";
import axios from "axios"
import { register,registerSuccess,registerFailed } from "../authSlice.js"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Registration = ()=>{

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {isLoading, error, success} = useSelector((item) => item.auth)

    const submitHandle = async (e)=>{
      e.preventDefault();
      dispatch(register())
      try {
          const userdata = { username, email, password, role: "user" }
          const response = await axios.post("/api/v1/auth/registration", userdata)
          dispatch(registerSuccess(response.data.message))
          navigate("/login");
      } catch (error) {
          dispatch(registerFailed(error.response?.data?.message || "Something went wrong!"))
      }}

    const message = error || success
    const color = error ? "text-red-500" : "text-green-600";
  
  return (<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">User Portal</h2>
        </div>

      {message && (
        <span className={`text-sm mt-2 font-semibold ${color}`}>
          {message}
        </span>
      )}

        <form className="space-y-5" onSubmit={submitHandle  }>
          
          <div>
            <input type="text" placeholder="Username" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200" onChange={(e)=> setusername(e.target.value)} />
          </div>

          <div>
            <input type="email" placeholder="Email: email@example.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200" onChange={(e)=>setemail(e.target.value)} />
          </div>

          <div>
            <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200" onChange={(e)=> setpassword(e.target.value)}/>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-200 transition duration-300 transform hover:-translate-y-1 active:scale-95 mt-4 cursor-pointer">
            {isLoading ? "...Processing" : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account? 
            <a href="/login" className="text-blue-600 font-bold hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  </>);
}