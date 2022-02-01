import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
    beforeEach(() => {
        render(<Home />);
    });

    it("renders the only text", () => {
        const item = screen.getByText("Hello World!")
        expect(item).toBeInTheDocument;
    });
});
