"use client"
import { addToCart } from "@/redux/slices/cartSlice";
import { Destination } from "@/types/allTypes";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux"

const AddPackageBtn = ({ destination }: 
  { destination: Destination }) => {
  const dispatch = useDispatch();
  return<>
    <button
      className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-sky-300"
      onClick={() => dispatch(addToCart(destination))}
    >
      <ShoppingCart size={22} />
      Add Package To Cart
    </button>

    <button className="w-full mt-4 border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white py-4 rounded-2xl text-lg font-bold transition-all duration-300">
      Book Now
    </button>
  </>
}
export default AddPackageBtn