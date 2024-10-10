import { describe, it, expect } from "vitest";
import { render , screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    const item = {
        id: '5',
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: "men's clothing"
    }

    it("renders App page", () => {
        const {container} = render(<BrowserRouter><App items={[item]} error={null} loading={false}/></BrowserRouter>)
        expect(container).toMatchSnapshot();
    })

    it("adds item to cart", async () => {
        const user = userEvent.setup();
        render(<BrowserRouter><App items={[item]} error={null} loading={false} initialPath={"shop"}/></BrowserRouter>)
        const button = screen.getByRole("button", {name: "ADD TO CART"});
        

        await user.click(button);
        const cartNum = screen.getByRole("cartNum");
        expect(cartNum.textContent).toMatch(/1/);
        await user.click(button);
        await user.click(button);
        expect(cartNum.textContent).toMatch(/3/);

    })
})