import { test, expect, Page } from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

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
  await searchFor(pkgName, page);

  expect(await page.textContent("h2")).toBe(pkgName);
});

test("user could go back to the search view from the scan view", async ({
  page,
}) => {
  await page.goto("/");
  await searchFor("mutexify", page);

  await page.click("button");

  const content = await page.textContent("h1");
  expect(content).toBe("🕸 Preview");
});

test("user could visit nodesecure repo from search view", async ({ page }) => {
  await page.goto("/");

  const content = await page.textContent("a");
  expect(content).toBe("Try it now!");
});

test("user could visit nodesecure repo from scan view", async ({ page }) => {
  await page.goto("/");
  await searchFor("mutexify", page);

  const content = await page.textContent("a");
  expect(content).toBe("Try it now!");
});

test("user could search for a package with organization namespace and see result", async ({ page }) => {
  await page.goto("/");

  const pkgName = "@nodesecure/scanner";
  await searchFor(pkgName, page);

  expect(await page.textContent("h2")).toBe(pkgName);
});

/**
 * HELPERS
 */

async function searchFor(pkgName: string, page: Page) {
  await page.fill("input#search", pkgName);
  await page.click("button");
}
