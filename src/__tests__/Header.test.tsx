import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HOME, LOGIN } from "../constants/routes";

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

    test("Should render logo with Home link", () => {
        const logo = screen.getByAltText("Tsume");
        const logoLink = screen.getByAltText("Tsume").closest("a");
        expect(logo).toBeVisible();
        expect(logoLink).toHaveAttribute("href", HOME);
    });

    test("Should render login link", () => {
        const login = screen.getByRole("link", { name: /Login/i });
        expect(login).toHaveAttribute("href", LOGIN);
    });

    // WIP / TO-DO: Change button to link
    test("Should render Sign Up link", () => {
        const signup = screen.getByRole("button", { name: /Sign Up/i });
    });
});
