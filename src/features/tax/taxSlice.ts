import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    setTaxRate: (_, action) => action.payload,
   },
});

export const { setTaxRate } = taxSlice.actions;

export default taxSlice.reducer;