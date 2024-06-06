import { test, expect } from "@playwright/test";

// TO DO
test.describe.skip('How It Works', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/how-it-works");
    });

    test("How It Works url", async ({ page }) => {
        await expect(page).toHaveURL(/how-it-works/);
    });
});
