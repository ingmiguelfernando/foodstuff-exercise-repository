import { DiscountRate } from "../../types/DiscountRate";
import reducer from "./discountRateSlice";

const initialState: DiscountRate[] = [
    { id:'1000', value: 1000, discount: 0.03},
    { id:'5000', value: 5000, discount: 0.05},
    { id:'7000', value: 7000, discount: 0.07},
    { id:'10000', value: 10000, discount: 0.10},
    { id:'50000', value: 50000, discount: 0.15},
];

test("should return the initial state for Discount Rate", () => {
  expect(
    reducer(undefined, {
      type: "unknown",
    })
  ).toMatchObject(initialState);
});