import { Navbar } from "../Components/Navbar";

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Administrator. Here is your system overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium">Total Users</h3>
            <p className="text-4xl font-extrabold text-blue-600 mt-2">1,284</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium">Active Sessions</h3>
            <p className="text-4xl font-extrabold text-indigo-600 mt-2">42</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium">System Errors</h3>
            <p className="text-4xl font-extrabold text-red-500 mt-2">03</p>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">User Management</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-4">Name</th>
                <th className="pb-4">Email</th>
                <th className="pb-4">Role</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4 font-semibold text-gray-800">John Doe</td>
                <td className="py-4 text-gray-600">john@example.com</td>
                <td className="py-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">User</span></td>
                <td className="py-4 text-blue-600 cursor-pointer font-medium hover:underline">Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};