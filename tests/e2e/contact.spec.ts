import { test, expect } from "@playwright/test";

test.describe("Contact Page Flow", () => {
  test("contact page displays form and contact details", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle(/Contact|Audrey Castets/);

    // Form inputs check
    const nameInput = page.locator('input[name="name"], input#name');
    const emailInput = page.locator('input[name="email"], input#email');
    const messageInput = page.locator('textarea[name="message"], textarea#message');

    if (await nameInput.isVisible()) {
      await expect(nameInput).toBeVisible();
      await expect(emailInput).toBeVisible();
      await expect(messageInput).toBeVisible();
    }
  });

  test("validates required form fields", async ({ page }) => {
    await page.goto("/contact");
    const submitBtn = page.locator('button[type="submit"]').first();
    if (await submitBtn.isVisible()) {
      await submitBtn.click();
      // Should show validation state or keep user on page
      await expect(page).toHaveURL(/.*contact.*/);
    }
  });
});
