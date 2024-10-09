import { describe, it, expect } from "vitest";
import { render , screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    const item = {
        id: '69',
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    it("renders App page", () => {
        const {container} = render(<BrowserRouter><App items={[item]} error={null} loading={false}/></BrowserRouter>)
        expect(container).toMatchSnapshot();
    })
})