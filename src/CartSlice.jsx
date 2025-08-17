import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // ✅ Holds all cart products
  },
  reducers: {
    // ✅ Add Item
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++; // Increase quantity if already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with qty 1
      }
    },

    // ✅ Remove Item
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // ✅ Update Quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// ✅ Export actions to use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// ✅ Export reducer to use in store.js
export default cartSlice.reducer;
