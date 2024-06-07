import { test, expect } from "@playwright/test";

test.describe('Homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("homepage has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Tsume/);
  });

  test("How It Works link", async ({ page }) => {
    const howItWorks = page.getByTestId("header-navbar-howItWorks-link");
    await expect(howItWorks).toHaveAttribute("href", "/how-it-works");
  });
});

