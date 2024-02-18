import reducer from "./taxRateSlice";

const initialState = {
    AUK: 0.0685,
    WLG: 0.08,
    WAI: 0.0625,
    CHC: 0.04,
    TAS: 0.0825
};

test("should return the initial state for tax rates", () => {
  expect(
    reducer(undefined, {
      type: "unknown",
    })
  ).toMatchObject(initialState);
});