import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AUK: 0.0685,
    WLG: 0.08,
    WAI: 0.0625,
    CHC: 0.04,
    TAS: 0.0825
};

const taxRateSlice = createSlice({
  name: "taxRates",
  initialState,
  reducers: { },
});

export default taxRateSlice.reducer;