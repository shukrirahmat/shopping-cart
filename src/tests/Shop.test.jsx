import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop.jsx";

describe("Shop component", () => {

    it("renders Shop page", () => {
        const {container} = render(<Shop items={[]} loading={false} addToCart={() => {}} />);
        expect(container).toMatchSnapshot();
    })

    it("show loading text", () => {
        render(<Shop items={[]} loading={true} addToCart={() => {}} />);
        const loadingtext = screen.getByRole('paragraph').textContent;
        expect(loadingtext).toMatch(/LOADING.../);
    })

})