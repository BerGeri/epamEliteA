import { test, expect } from '@playwright/test';

test('EPAM - Services -> Explore Our Client Work -> Client Work text visible', async ({ page }) => {
  await page.goto('/');

  // Cookie banner (best-effort)
  const acceptAll = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAll.isVisible().catch(() => false)) {
    await acceptAll.click();
  }

  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByRole('heading', { name: 'Client Work', level: 1 })).toBeVisible();
});
