import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HOME } from "../constants/routes";
import { FACEBOOK } from "../constants/links";

describe("Header unit tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
    });

    test("Should render links", () => {
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(9);
    });

    test("Should render logo with Home link", () => {
        const footerLogo = screen.getByAltText("Tsume");
        const footerLogoLink = screen.getByAltText("Tsume").closest("a");
        expect(footerLogo).toBeVisible();
        expect(footerLogoLink).toHaveAttribute("href", HOME);
    });

    test("Should render social network images", () => {
        const socialNetworkLogos = screen.getAllByAltText(/social/i);
        socialNetworkLogos.forEach((image) => {
            expect(image).toBeVisible();
        });
    });
});
