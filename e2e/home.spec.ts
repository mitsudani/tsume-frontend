import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

test.describe('Homepage', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  });

  test("homepage has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Tsume/);
  });

  test("How It Works link", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.howItWorksLink).toBeVisible();
    await expect(homePage.howItWorksLink).toHaveAttribute("href", "/how-it-works");
  });

  test("Login link", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.loginLink).toBeVisible();
    await expect(homePage.loginLink).toHaveAttribute("href", "/login");
  });

  test("Tsume logos", async ({ page }, testInfo) => {
    const homePage = new HomePage(page);
    await expect(homePage.tsumeLogo).toHaveCount(2);
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  });
});

