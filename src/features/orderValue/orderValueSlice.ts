import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const orderValueSlice = createSlice({
  name: "orderValue",
  initialState,
  reducers: {
    setOrderValue: (_, action) => action.payload,
   },
});

export const { setOrderValue } = orderValueSlice.actions;

export default orderValueSlice.reducer;