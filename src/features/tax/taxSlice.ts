import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const taxRateSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    setTaxRate: (_, action) => action.payload,
   },
});

export const { setTaxRate } = taxRateSlice.actions;

export default taxRateSlice.reducer;