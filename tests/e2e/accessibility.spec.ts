import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility - WCAG 2.1 AA Compliance", () => {
  const routes = ["/", "/bilan-de-competences", "/contact", "/tarifs", "/prendre-rendez-vous"];

  for (const path of routes) {
    test(`route ${path} should have no severe accessibility violations`, async ({ page }) => {
      test.setTimeout(45000);
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(500);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const criticalViolations = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious"
      );
      expect(criticalViolations).toEqual([]);
    });
  }

  test("should have proper heading structure on homepage", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1");
    await expect(h1.first()).toBeVisible();
  });

  test("should have descriptive link text and aria-labels", async ({ page }) => {
    await page.goto("/");
    const links = page.locator("a[href]");
    const count = await links.count();

    for (let i = 0; i < Math.min(count, 15); i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");
      const hasAccessibleName = (text && text.trim().length > 0) || Boolean(ariaLabel);
      expect(hasAccessibleName).toBeTruthy();
    }
  });
});
