import HeaderNavbar from "../components/HeaderNavbar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HOME, HOW_IT_WORKS } from "../constants/routes";

describe("Header unit tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <HeaderNavbar />
            </MemoryRouter>
        );
    });

    test("Should render links", () => {
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(2);
    });

    test("Should have correct href", () => {
        const navbarLinks = screen.getAllByRole("link");
        const navbarRoutes = [HOME, HOW_IT_WORKS];

        navbarLinks.forEach((link, index) => {
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", navbarRoutes[index]);
        });
    });
});
