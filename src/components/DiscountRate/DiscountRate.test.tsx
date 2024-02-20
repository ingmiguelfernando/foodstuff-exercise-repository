import DiscountRate from "./index";
import { render, screen } from "../../utils/test-utils";
import { cleanup } from "@testing-library/react";
import React from "react";

describe("<DiscountRate />", () => {
    afterEach(cleanup);

    const preloadedState = {
        orderValue: 0,
        discount: 0,
        discountRates: [
            { id: '1000', value: 1000, discount: 0.03 },
            { id: '5000', value: 5000, discount: 0.05 },
            { id: '7000', value: 7000, discount: 0.07 },
            { id: '10000', value: 10000, discount: 0.10 },
            { id: '50000', value: 50000, discount: 0.15 },
        ]
    }

    it("renders without crashing", () => {
        const { container } = render(<DiscountRate />, { preloadedState });
        expect(container).toBeInTheDocument();
    });

    it("should render a div with the text 'Discount'", () => {
        render(<DiscountRate />);
        expect(screen.getByText("Discount")).toBeInTheDocument();
    });

    it("should render a div with the text '0.00%'", () => {
        render(<DiscountRate />);
        expect(screen.getByText("0.00%")).toBeInTheDocument();
    });

    it("should render a div with the text '3.00%'", () => {
        render(<DiscountRate />, { preloadedState: { ...preloadedState, orderValue: 1000 } });
        expect(screen.getByText("3.00%")).toBeInTheDocument();
    });

    it("should render a div with the text '10.00%'", () => {
        render(<DiscountRate />, { preloadedState: { ...preloadedState, orderValue: 8000 } });
        expect(screen.getByText("7.00%")).toBeInTheDocument();
    });
});