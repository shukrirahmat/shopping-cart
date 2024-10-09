import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout";

describe("Checkout component", () => {
    it("renders checkout page", () => {
        const {container} = render(<BrowserRouter><Checkout/></BrowserRouter>);
        expect(container).toMatchSnapshot();
    })
})