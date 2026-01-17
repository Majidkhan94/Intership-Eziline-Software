import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Removefromcart } from "../Store/CartSlice";
import { useState } from "react";

export let Checkout = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { Cartitems, Totalprice, Totalquantity } = useSelector(
    (state) => state.Cart
  );

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "Cash on Delivery"
  });

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleConfirmOrder = () => {
    alert("Order Confirmed! Thank you for shopping.");
    // Clear the cart
    Cartitems.forEach(item => dispatch(Removefromcart(item.Id)));
    navigate("/products");
  };

  if (Cartitems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-4">
          Your Cart is Empty
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="cursor-pointer px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium tracking-wide"
        >
          Go Back to Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <h2 className="text-3xl font-light text-gray-900 mb-8">Checkout</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Billing Form */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-medium mb-4">Billing Details</h3>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>Cash on Delivery</option>
              <option>Credit / Debit Card</option>
              <option>UPI / Wallet</option>
            </select>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96 bg-gray-50 rounded-2xl p-7 shadow-sm">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Order Summary</h3>
          <div className="space-y-4 mb-6">
            {Cartitems.map((item) => (
              <div key={item.Id} className="flex justify-between">
                <span>{item.Title} x {item.quantity}</span>
                <span>Rs {item.numericPrice * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between text-xl font-medium text-gray-900">
              <span>Total ({Totalquantity} items)</span>
              <span>Rs {Totalprice}</span>
            </div>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="w-full mt-6 bg-[#ff9500] text-white py-4 rounded-full text-lg font-medium hover:bg-[#e68900] transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-black/10"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};
