import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },

   removeItem(state, action) {
      const index = state.findIndex((item) => item._id === action.payload._id);
      state.splice(index, 1);
    }, 

  },
});

export const { addItem,  removeItem  } = cartSlice.actions;
export default cartSlice.reducer;