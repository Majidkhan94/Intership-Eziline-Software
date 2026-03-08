import { Navbar } from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginSuccess } from "../authSlice"; // Apne slice ka sahi path check karein

export const Userprofile = () => {
  const { user } = useSelector((item) => item.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedToken = localStorage.getItem("token");

    if (!user && savedUser && savedToken) {
      dispatch(loginSuccess({ user: savedUser, token: savedToken }));
    } 
    // 3. Agar kahin bhi data nahi hai, tabhi Login par bhejien
    else if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h1 className="text-3xl font-bold">Profile Details</h1>
            <p className="opacity-90">Manage your personal information and account settings</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Personal Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-gray-900 font-semibold text-lg">{user.username}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Email Address</label>
                    <p className="text-gray-900 font-semibold text-lg">{user.email}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Account Security</h2>
                <div className="space-y-4">
                  <button className="w-full text-left bg-gray-50 p-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">
                    Change Password
                  </button>
                  <button className="w-full text-left bg-gray-50 p-3 rounded-lg text-red-600 hover:bg-red-50 font-medium">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t flex justify-end">
             <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700">
               Edit Profile
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};