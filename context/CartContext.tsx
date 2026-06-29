// "use client";

// import { createContext, useContext, useState } from "react";
// import { TouristPlace } from "@/types/allTypes";

// interface CartContextType {
//   cart: TouristPlace[];
//   addToCart: (item: TouristPlace) => void;
//   removeFromCart: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | null>(null);

// export const CartProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [cart, setCart] = useState<TouristPlace[]>([]);

//   const addToCart = (item: TouristPlace) => {
//     setCart((prev) => [...prev, item]);
//   };

//   const removeFromCart = (id: string) => {
//     setCart(cart.filter((item) => item._id !== id));
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error("Cart Context Error");
//   }

//   return context;
// };