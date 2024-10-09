import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemCard from "../components/ItemCard";

describe("Item card component", () => {
    const item = {
        id: '69',
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    it("renders card", () => {
        const {container} = <ItemCard item={item} key={item.id} addToCart={() => {}}/>
        expect(container).toMatchSnapshot();
    })

    it("increase amount when clicking +", async () => {
        const user = userEvent.setup();

        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button", {name: "+"});
        await user.click(button);
        await user.click(button);
        await user.click(button);

        expect(input.value).toMatch(/4/);
    })

    it("it decreases value when clicking -", async () => {
        const user = userEvent.setup();

        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button", {name: "-"});
        
        await user.clear(input);
        await user.type(input, "10");
        await user.click(button);
        await user.click(button);
        expect(input.value).toMatch(/8/);

    })

    it("updates price when changing amount", async () => {
        const user = userEvent.setup();

        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        const price = screen.getByRole("priceTag");
        
        expect(price.textContent).toMatch("13.50$");

        await user.clear(input);
        await user.type(input, "10")

        expect(price.textContent).toMatch("135.00$");

    })

    it("filters alphabet in input", async () => {
        const user = userEvent.setup();
        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        
        await user.clear(input);
        await user.type(input, "1a2b");
        await user.tab();
        
        expect(input.value).toMatch(/12/);

    })

    it("fixes the amount when value is empty", async () => {
        const user = userEvent.setup();
        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        
        await user.clear(input);
        await user.tab();
        
        expect(input.value).toMatch(/1/);

    })

    it("fixes the amount when value is below 1", async () => {
        const user = userEvent.setup();
        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        
        await user.clear(input);
        await user.type(input, "0");
        await user.tab();
        
        expect(input.value).toMatch(/1/);
    })

    it("fixes the amount when value is higher than 99", async () => {
        const user = userEvent.setup();
        render(<ItemCard item={item} key={item.id} addToCart={() => {}}/>);
        const input = screen.getByRole("textbox");
        
        await user.clear(input);
        await user.type(input, "1000");
        await user.tab();
        
        expect(input.value).toMatch(/99/);
    })

    it("should call the addToCart function when clicked", async () => {
        const addToCart = vi.fn();
        const user = userEvent.setup();
        render(<ItemCard item={item} key={item.id} addToCart={addToCart}/>);
        const button = screen.getByRole("button", {name: /ADD TO CART/});

        await user.click(button);

        expect(addToCart).toHaveBeenCalled();

    })

    it("should not call the addToCart function when not clicked", async () => {
        const addToCart = vi.fn();
        render(<ItemCard item={item} key={item.id} addToCart={addToCart}/>);

        expect(addToCart).not.toHaveBeenCalled();

    })
})