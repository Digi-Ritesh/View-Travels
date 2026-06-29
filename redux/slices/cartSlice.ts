import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Destination } from "@/types/allTypes";

export type CartItem = Destination & {
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
};

const initialState: CartState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (state: CartState) => {
  state.totalItems = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  state.totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Destination>) => {
      const existing = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (existing) {
        existing.quantity+= 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      calculateTotals(state);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      calculateTotals(state);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload
      );

      if (item) {
        item.quantity+=1;
      }

      calculateTotals(state);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity-=1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i._id !== action.payload
        );
      }

      calculateTotals(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
       state.totalItems = 0;
       state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;