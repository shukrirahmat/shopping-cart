import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../components/Home.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
    it("renders home page", () => {
        const {container} = render(<BrowserRouter><Home/></BrowserRouter>);
        expect(container).toMatchSnapshot();
    })
})