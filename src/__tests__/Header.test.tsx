import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
    test("should render children", () => {
        render(<Header />);

        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
