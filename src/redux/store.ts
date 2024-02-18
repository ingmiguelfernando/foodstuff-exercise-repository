import { configureStore } from "@reduxjs/toolkit";
import discountRatesReducer from "../features/discountRates/discountRateSlice"

export const store = configureStore({
  reducer: {
   discountRates: discountRatesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


