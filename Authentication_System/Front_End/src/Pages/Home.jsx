import { Navbar } from "../Components/Navbar"; 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../authSlice"; // Ensure path is correct

export const Home = () => {
  const { isAuthenticated } = useSelector((item) => item.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> 
      
      <header className="relative bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Build Your Future with <br />
            <span className="text-blue-600">Modern Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience seamless authentication and secure profile management.
          </p>
          
          <div className="flex justify-center gap-4 mt-6">
            {!isAuthenticated ? (
              <>
                <Link 
                  to="/login" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Login
                </Link>
                <Link 
                  to="/registration" 
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all"
                >
                  Registration
                </Link>
              </>
            ) : (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-50 text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-red-100 transition-all border border-red-200"
              >
                {/* Logout Icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};