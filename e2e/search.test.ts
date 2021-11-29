import { test, expect } from "@playwright/test";

test("it should display a page title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Scanner for node packages./);
});
