import FooterNavbar from "../components/FooterNavbar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { CONTACT, FAQ, HOME, TERMS_OF_USE } from "../constants/routes";

describe("Header unit tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <FooterNavbar />
            </MemoryRouter>
        );
    });

    test("Should render links", () => {
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(4);
    });

    test("Should have correct href", () => {
        const footerNavbarLinks = screen.getAllByRole("link");
        const footerNavbarRoutes = [HOME, FAQ, TERMS_OF_USE, CONTACT];

        footerNavbarLinks.forEach((link, index) => {
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", footerNavbarRoutes[index]);
        });
    });
});
