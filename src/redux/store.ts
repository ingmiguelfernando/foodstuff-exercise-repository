import { configureStore } from "@reduxjs/toolkit";
import discountRatesReducer from "../features/discountRates/discountRateSlice"
import taxRateReducer from "../features/taxRates/taxRateSlice"
import taxReducer from "../features/tax/taxSlice"
import discountReducer from "../features/discount/discountSlice"
import orderValueReducer from "../features/orderValue/orderValueSlice"

export const store = configureStore({
  reducer: {
    discountRates: discountRatesReducer,
    taxRates: taxRateReducer,
    tax: taxReducer,
    discount: discountReducer,
    orderValue: orderValueReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


