import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import taxReducer from "../features/tax/taxSlice";
import taxRatesReducer from "../features/taxRates/taxRateSlice";
import orderValueReducer from "../features/orderValue/orderValueSlice";
import discountReducer from "../features/discount/discountSlice";
import discountRatesReducer from "../features/discountRates/discountRateSlice";

function render(
  ui,
  {   
    preloadedState,
    store = configureStore({
      reducer: { 
        tax: taxReducer, 
        taxRates:taxRatesReducer, 
        orderValue: orderValueReducer,
        discount: discountReducer,
        discountRates: discountRatesReducer
      }, preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };