import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop.jsx";

describe("Shop component", () => {

    const item = {
        id: '69',
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    it("renders Shop page", () => {
        const {container} = render(<Shop items={[item]} loading={false} addToCart={() => {}} />);
        expect(container).toMatchSnapshot();
    })

    it("show loading text", () => {
        render(<Shop items={[item]} loading={true} addToCart={() => {}} />);
        const loadingtext = screen.getByRole('paragraph').textContent;
        expect(loadingtext).toMatch(/LOADING.../);
    })

})