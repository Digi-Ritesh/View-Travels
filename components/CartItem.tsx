"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/slices/cartSlice";

import { Destination } from "@/types/allTypes";

import {
  MapPin,
  Trash2,
  Minus,
  Plus,
} from "lucide-react";

export default function CartItem({
  item,
}: {
  item: Destination & { quantity: number };
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative w-full md:w-72 h-60 shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 288px"
          className="object-cover"
          loading="eager"
        />
      </div>

      {/* Details */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <h3 className="text-2xl font-bold text-sky-600">
              ₹{item.price}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-gray-500 mt-3">
            <MapPin size={18} />
            <span>
              {item.city}, {item.state}
            </span>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                dispatch(decreaseQuantity(item._id))
              }
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
            >
              <Minus size={18} />
            </button>

            <span className="text-xl font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item._id))
              }
              className="w-10 h-10 rounded-full bg-sky-600 text-white hover:bg-sky-700 flex items-center justify-center transition"
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            onClick={() =>
              dispatch(removeFromCart(item._id))
            }
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          >
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}