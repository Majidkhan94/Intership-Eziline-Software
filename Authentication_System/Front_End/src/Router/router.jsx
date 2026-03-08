import {Routes, Route} from "react-router-dom"
import { Adminregistration } from "../Pages/Adminregistration.jsx"
import { Home } from "../Pages/Home.jsx"
import { Login } from "../Pages/Login.jsx"
import { Registration } from "../Pages/Registration.jsx"
import { AdminDashboard } from "../Pages/AdminDashboard.jsx"
import { Userprofile } from "../Pages/Userprofile.jsx"
import { ProtectedRoute } from "../Components/ProtectedRoute.jsx"



export const Router = () => {
return(<>
  <Routes>
                  {/* Allroutes */}
    
    <Route path="/" element= {<Home />} />
    <Route path= "/registration" element ={<Registration />} />
    <Route path= "/login" element ={<Login />} />
    <Route path= "/adminregistration" element ={<Adminregistration />} />
    <Route path= "/userprofile" element ={<Userprofile />} />
    
      {/* Protected Routes */}
    <Route path="/admindashboard" element={
        <ProtectedRoute adminOnly={true}>
          <AdminDashboard />
        </ProtectedRoute>
      } />



</Routes>
</>
)

}