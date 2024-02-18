import { configureStore } from "@reduxjs/toolkit";
import discountRatesReducer from "../features/discountRates/discountRateSlice"
import taxRateReducer from "../features/taxRates/taxRateSlice"

export const store = configureStore({
  reducer: {
   discountRates: discountRatesReducer,
   taxRates: taxRateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


