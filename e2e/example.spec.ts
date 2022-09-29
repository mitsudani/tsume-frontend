import { test, expect } from "@playwright/test";

test("homepage has Tsume in title and How It Works link linking to the that page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tsume/);

  // create a locator
  const getStarted = page.locator("text=How It Works");

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/how-it-works");

  // Click the get started link.
  // await getStarted.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
