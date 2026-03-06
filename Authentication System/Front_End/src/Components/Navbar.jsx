import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../authSlice";

export const Navbar = () => {
  const { isAuthenticated, user } = useSelector((item) => item.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MERN_Auth
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>
            
            {isAuthenticated ? (
              <>
                {/* Profile Link */}
                <Link 
                  to={user?.role === "admin" ? "/admindashboard" : "/userprofile"}
                  className="text-blue-600 font-bold hover:text-blue-800 transition"
                >
                  {user?.role === "admin" ? "Admin Panel" : "My Profile"}
                </Link>

                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="text-red-600 font-bold hover:text-red-800 transition border-l pl-6 border-gray-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};