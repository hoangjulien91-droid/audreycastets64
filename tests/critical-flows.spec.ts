import { test, expect } from '@playwright/test';

/**
 * S-Tier God Mode: E2E Critical Flow Tests
 */

test.describe('Navigation & Core Pages', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.locator('h1')).toBeVisible();
    
    // Check navigation
    await expect(page.locator('nav')).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to a service page
    const servicesLink = page.locator('a:has-text("Services")').first();
    await servicesLink.click();
    
    await expect(page).toHaveURL(/.*services.*/);
  });

  test('skip link is accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab to skip link
    await page.keyboard.press('Tab');
    
    // Check skip link is focused
    const skipLink = page.locator('a.skip-to-main');
    await expect(skipLink).toBeFocused();
  });
});

test.describe('Contact Form', () => {
  test('contact page renders form', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form elements exist
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });
});

test.describe('Mobile Responsiveness', () => {
  test('mobile menu opens and closes', async ({ page }) => {
    await page.goto('/');
    
    // Find and click mobile menu button
    const menuButton = page.locator('button[aria-label*="menu"]').first();
    
    if (await menuButton.isVisible()) {
      await menuButton.click();
      
      // Check mobile menu is visible
      await expect(page.locator('[role="dialog"]')).toBeVisible();
      
      // Close menu
      const closeButton = page.locator('button[aria-label*="Fermer"]').first();
      await closeButton.click();
      
      // Check menu is closed
      await expect(page.locator('[role="dialog"]')).not.toBeVisible();
    }
  });
});

test.describe('Performance & SEO', () => {
  test('page has proper metadata', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Audrey Castets/);
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  });
});
