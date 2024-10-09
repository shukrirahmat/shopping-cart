import Cart from "../components/Cart";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("cart component", () => {
    const item = {
        id: '69',
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        amount: 3
    }

    it("renders Cart page", () => {
        const container = render(<BrowserRouter><Cart cartItems={[item]} removeItem={() => {}} modifyAmount={() => {}}/></BrowserRouter>);
        expect(container).toMatchSnapshot();
    })

    it("draw empty message when no items", () => {
        render(<BrowserRouter><Cart cartItems={[]} removeItem={() => {}} modifyAmount={() => {}}/></BrowserRouter>);
        const emptyText = screen.queryByRole("paragraph", {name: /Your shopping cart is empty/i});
        expect(emptyText).toBeTruthy;
    })
})