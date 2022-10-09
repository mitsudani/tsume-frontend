import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Header unit tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    });

    test("Should render links", () => {
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(4);
    });
});
