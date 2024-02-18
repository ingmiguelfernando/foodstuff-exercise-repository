import { configureStore } from "@reduxjs/toolkit";
import discountRatesReducer from "../features/discountRates/discountRateSlice"
import taxRateReducer from "../features/taxRates/taxRateSlice"
import taxReducer from "../features/tax/taxSlice"

export const store = configureStore({
  reducer: {
   discountRates: discountRatesReducer,
   taxRates: taxRateReducer,
   tax: taxReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


