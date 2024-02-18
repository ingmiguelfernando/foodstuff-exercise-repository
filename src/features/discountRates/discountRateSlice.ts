import { createSlice } from "@reduxjs/toolkit";
import { DiscountRate } from "../../types/DiscountRate";


const initialState: DiscountRate[] = [
    { id:'1000', value: 1000, discount: 0.03},
    { id:'5000', value: 5000, discount: 0.05},
    { id:'7000', value: 7000, discount: 0.07},
    { id:'10000', value: 10000, discount: 0.10},
    { id:'50000', value: 50000, discount: 0.15},
];

const discountRateSlice = createSlice({
  name: "discountRates",
  initialState,
  reducers: { },
});

export default discountRateSlice.reducer;