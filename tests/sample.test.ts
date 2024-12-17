import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://dop-bpi-ph-staging.tsengineering.io");
  const title = await page.title();
  expect(title).toBe("Get up to P100k cash loan now");
});
