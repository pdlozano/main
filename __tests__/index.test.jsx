import '@testing-library/jest-dom/extend-expect';
import {render, screen} from "@testing-library/react";
import Home from "../pages/index";

describe("Homepage", () => {
    beforeEach(() => {
        render(<Home/>);
    });

    it("make sure my name is in the document", () => {
        const item = screen.getByText(/David/);
        expect(item).toBeInTheDocument();
    });

    it("social media is in the document", () => {
        const items = [
            /Email/,
            /Phone/,
            /GitHub/,
        ];

        items.map((item) => {
            const test = screen.getByLabelText(item);
            expect(test).toBeInTheDocument();
        });
    })
});
