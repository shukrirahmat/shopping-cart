import { describe, it, expect } from "vitest";
import { render , screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
    it("renders App page", () => {
        const {container} = render(<BrowserRouter><App/></BrowserRouter>)
        expect(container).toMatchSnapshot();
    })
})