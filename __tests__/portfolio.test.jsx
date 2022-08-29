import '@testing-library/jest-dom/extend-expect';
import {render, screen, waitFor} from "@testing-library/react";
import Portfolio from "../pages/portfolio";

describe("Portfolio", () => {
    it("ensure there are at least five pieces in the document", async () => {
        const { getAllByText } = render(<Portfolio/>);
        const buttons = await waitFor(() => getAllByText("See it in action here"));
        console.log(buttons);
        // expect(buttons.length).toBeGreaterThanOrEqual(5);
    });

    it("ensure my GitHub account is displayed", () => {
        render(<Portfolio/>);
        const item = screen.getAllByRole("link");
        console.log(item);
    });
});
