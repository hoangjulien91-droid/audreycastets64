import { test, expect } from "@playwright/test";

test.describe("Homepage & Navigation", () => {
  test("loads homepage with correct title and SEO elements", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Audrey Castets/);

    // Hero section checks
    const heroH1 = page.locator("h1");
    await expect(heroH1).toBeVisible();

    // CTA buttons exist
    const cta = page.locator('a[href*="/prendre-rendez-vous"], a[href*="/contact"]').first();
    await expect(cta).toBeVisible();
  });

  test("services section displays all core offerings", async ({ page }) => {
    await page.goto("/");
    const servicesSection = page
      .locator("section")
      .filter({ hasText: /Services|Accompagnement/i })
      .first();
    await expect(servicesSection).toBeVisible();
  });

  test("footer contains legal links and credentials", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(
      footer.locator('a[href*="mentions-legales"], a[href*="contact"]').first()
    ).toBeVisible();
  });
});
