import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setDiscount: (_, action) => action.payload,
   },
});

export const { setDiscount } = discountSlice.actions;

export default discountSlice.reducer;