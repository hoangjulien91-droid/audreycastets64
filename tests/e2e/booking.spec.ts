import { test, expect } from "@playwright/test";

test.describe("Appointment Booking Flow", () => {
  test("booking page renders calendar / options", async ({ page }) => {
    await page.goto("/prendre-rendez-vous");
    await expect(page).toHaveTitle(/Rendez-vous|Audrey Castets/i);

    const mainContainer = page.locator("main");
    await expect(mainContainer).toBeVisible();
  });
});
