import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem";

describe("cart item component", () => {
  const item = {
    id: "69",
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
    amount: 3,
  };

  it("renders cart item", () => {
    const { container } = render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call the modify function when number is entered", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    const input = screen.getByRole("textbox");

    await user.type(input, "a2b");

    expect(modifyAmount).toHaveBeenCalled();
  });

  it("should not call the modify fuction when non numeric entered", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    expect(modifyAmount).not.toHaveBeenCalled();

    const input = screen.getByRole("textbox");
    await user.type(input, "abc");

    expect(modifyAmount).not.toHaveBeenCalled();
  });

  it("should call the modify function when exiting focus with less than 1", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    const input = screen.getByRole("textbox");

    await user.clear(input);
    await user.tab()

    expect(modifyAmount).toHaveBeenCalled();
  });

  it("should not call the modify function when exiting focus with more than 1", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    const input = screen.getByRole("textbox");

    await user.click(input);
    await user.tab()

    expect(modifyAmount).not.toHaveBeenCalled();
  });

  it("should call the modify function when + button is clicked", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    const button = screen.getByRole("button", {name: "+"});

    await user.click(button)

    expect(modifyAmount).toHaveBeenCalled();
  });

  it("should call the modify function when - button is clicked", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    const button = screen.getByRole("button", {name: "-"});

    await user.click(button)

    expect(modifyAmount).toHaveBeenCalled();
  });

  it("should not call the modify function when - button is clicked at 1", async () => {
    const modifyAmount = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={{
            id: "69",
            title: "test product",
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
            amount: 1,
          }}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );
    const button = screen.getByRole("button", {name: "-"});

    await user.click(button)
    await user.click(button)

    expect(modifyAmount).not.toHaveBeenCalled();
  });

  it("should not call the modify function when no button is clicked", async () => {
    const modifyAmount = vi.fn();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={() => {}}
        modifyAmount={modifyAmount}
      />
    );

    expect(modifyAmount).not.toHaveBeenCalled();
  });

  it("should call the remove function when - remove button is clicked", async () => {
    const removeItem = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={removeItem}
        modifyAmount={() => {}}
      />
    );
    const button = screen.getByRole("button", {name: /Remove/i});

    await user.click(button)

    expect(removeItem).toHaveBeenCalled();
  });

  it("should not call the remove function when - remove button is not clicked", async () => {
    const removeItem = vi.fn();
    render(
      <CartItem
        item={item}
        key={item.id}
        removeItem={removeItem}
        modifyAmount={() => {}}
      />
    );

    expect(removeItem).not.toHaveBeenCalled();
  });
});
