import { useSelector, useDispatch } from "react-redux";
import { Removefromcart, Increment, Decrement } from "../Store/CartSlice";
import { useNavigate } from "react-router-dom";

export let Cart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { Cartitems, Totalprice, Totalquantity } = useSelector(
    (state) => state.Cart
  );

  if (Cartitems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-4">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything yet</p>
        <button
          onClick={() => navigate("/products")}
          className="cursor-pointer px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium tracking-wide"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="space-y-8">
            {Cartitems.map((item) => (
              <div
                key={item.Id}
                className="flex flex-col sm:flex-row gap-5 py-6 bg-white rounded-xl shadow-sm items-center"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={item.CardImage}
                    alt={item.Title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.Title}
                    </h3>
                    <p className="text-lg font-medium text-gray-800 mt-1">
                      Rs {item.numericPrice}
                    </p>
                  </div>

                  <div className="flex justify-between px-10 w-full items-center gap-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                      <button
                        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition text-gray-700 font-medium"
                        onClick={() => dispatch(Decrement(item.Id))}
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-medium text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition text-gray-700 font-medium"
                        onClick={() => dispatch(Increment(item.Id))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(Removefromcart(item.Id))}
                      className="cursor-pointer px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96 xl:w-95 lg:sticky lg:top-6 lg:self-start">
          <div className="bg-gray-50 rounded-2xl p-7 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Order Summary</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({Totalquantity} items)</span>
                <span>Rs {Totalprice}</span>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between text-xl font-medium text-gray-900">
                  <span>Total</span>
                  <span>Rs {Totalprice}</span>
                </div>
              </div>
            </div>

            <button
            onClick={() => navigate("/checkout")}
              className="cursor-pointer w-full bg-[#ff9500] text-white py-4 rounded-full text-lg font-medium hover:bg-[#e68900] transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-black/10"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate("/products")}
              className="cursor-pointer w-full mt-4 text-gray-600 hover:text-gray-900 py-3 transition text-center"
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
