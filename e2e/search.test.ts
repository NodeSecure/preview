import { test, expect, Page } from "@playwright/test";

test("it should display a page title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Scanner for node packages./);
});

test("it should display a search bar", async ({ page }) => {
  await page.goto("/");

  const content = await page.textContent("h1");

  expect(content).toBe("🕸 Preview");
});

test("user should type a package name in input", async ({ page }) => {
  await page.goto("/");

  const pkgName = "mutexify";
  await page.fill("input#search", pkgName);

  const inputValue = await page.getAttribute("input", "value");
  expect(inputValue).toBe(pkgName);
});

test("user could search for a package and see result", async ({ page }) => {
  await page.goto("/");

  const pkgName = "mutexify";
  searchFor(pkgName, page);

  expect(await page.textContent("h2")).toBe(pkgName);
});

/**
 * HELPERS
 */

async function searchFor(pkgName: string, page: Page) {
  await page.fill("input#search", pkgName);
  await page.click("button");
}
