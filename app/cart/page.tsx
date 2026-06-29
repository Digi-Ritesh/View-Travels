"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const { cartItems, totalItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Your tour package✈️</h1>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-[50vh]">
          <h2 className="text-3xl font-semibold text-gray-500">
            Your tour package is Empty✈️
          </h2>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-3">
              Order Summary
            </h2>

            <div className="flex justify-between text-lg mb-4">
              <span>Total Items</span>
              <span className="font-semibold">{totalItems}</span>
            </div>

            <div className="flex justify-between text-lg mb-6">
              <span>Total Price</span>
              <span className="font-bold text-green-600">
                ₹{totalPrice}
              </span>
            </div>

            <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold transition">
              Proceed to Checkout
            </button>

            <button className="w-full mt-4 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white py-3 rounded-xl font-semibold transition">
              Continue Viewing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}