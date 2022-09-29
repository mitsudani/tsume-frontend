import { test, expect } from "@playwright/test";

// example e2e test from Playwright tutorial
test("homepage has Tsume in title and How It Works link linking to that page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/Tsume/);

  // create a locator
  const howItWorks = page.locator("text=How It Works");
  await expect(howItWorks).toHaveAttribute("href", "/how-it-works");

  await howItWorks.click();
  //await expect(page).toHaveURL(/how-it-works/);
});
