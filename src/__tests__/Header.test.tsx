import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HOME, LOGIN, SIGNUP } from "../constants/routes";

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
        expect(links.length).toEqual(5);
    });

    test("Should render logo with Home link", () => {
        const logo = screen.getByAltText("Tsume");
        const logoLink = screen.getByAltText("Tsume").closest("a");
        expect(logo).toBeVisible();
        expect(logoLink).toHaveAttribute("href", HOME);
    });

    test("Login link should have correct route", () => {
        const login = screen.getByRole("link", { name: /Login/i });
        expect(login).toHaveAttribute("href", LOGIN);
    });

    test("Sign Up link should have correct route", () => {
        const signup = screen.getByRole("link", { name: /Sign Up/i });
        expect(signup).toHaveAttribute("href", SIGNUP);
    });
});
