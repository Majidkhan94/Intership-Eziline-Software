import { useState } from "react";
import axios from "axios"
import { login, loginSuccess, loginFailed } from "../authSlice.js"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = ()=>{
  
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const { isLoading, error,  success } = useSelector((item) => item.auth)
  
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
  
      const submitHandle = async (e)=>{
            e.preventDefault();
            dispatch(login())
              try {
                const data =  { email, password };
                const response = await axios.post("/api/v1/auth/login", data);
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.data.user));
                dispatch(loginSuccess({
                  user: response.data.data.user, 
                  token: response.data.data.token}))
                if(response?.data?.data?.user.role === "admin")
                {navigate("/admindashboard")}
                else{navigate("/userprofile")}
                
        } catch (error) {
          
          dispatch(loginFailed(error.response?.data?.message || "Something went wrong!"))
        }}

    const message = error || success
    const color = error ? "text-red-500" : "text-green-600";

  
  return (<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Login</h2>
        </div>

          {message && (
            <span className={`text-sm mt-2 font-semibold ${color}`}>
              {message}
            </span>
          )}

        <form className="space-y-5" onSubmit={submitHandle}>
          
        

          <div>
            <input type="email" placeholder="Email: email@example.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200" onChange={(item)=> setemail(item.target.value)}/>
          </div>

          <div>
            <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200" onChange={(item)=> setpassword(item.target.value)}/>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-200 transition duration-300 transform hover:-translate-y-1 active:scale-95 mt-4 cursor-pointer">
            {isLoading ? "...Processing" : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Dont have an account 
            <a href="/registration" className="text-blue-600 font-bold hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  </>);

}