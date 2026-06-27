"use client";

import { Destination, } from '@/types/allTypes';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  cartItems: Destination[];
  totalItems: number;
  totalPrice: number;
}

const initialState : initialStateType = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
}

// Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Destination> ) => {
        state.cartItems.push(action.payload)},
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer