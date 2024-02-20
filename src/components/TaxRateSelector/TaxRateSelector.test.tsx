import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import TaxRateSelector from "./index";
import { render, screen } from "../../utils/test-utils";
import React from "react";

const taxRates = {
  AUK: 0.0685,
  WLG: 0.08,
  WAI: 0.0625,
  CHC: 0.04,
  TAS: 0.0825,
}

describe("<TaxRateSelector />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<TaxRateSelector />, { preloadedState: { taxRates } });
    expect(container).toBeInTheDocument();
  });

  it("should render a select element", () => {
    render(<TaxRateSelector />, { preloadedState: { taxRates } });
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should render a default option", () => {
    render(<TaxRateSelector />, { preloadedState: { taxRates } });
    expect(screen.getByText("Select a tax rate")).toBeInTheDocument();
  });

  it("should render options for each tax rate", () => {
    render(<TaxRateSelector />, { preloadedState: { taxRates } });
    Object.entries(taxRates).forEach(([key, value]) => {
      expect(screen.getByText(`${key} (${(value * 100).toFixed(2)}%)`)).toBeInTheDocument();
    });
  });
});