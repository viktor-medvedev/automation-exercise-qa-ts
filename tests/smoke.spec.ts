import { expect, test } from './fixtures/fixtures';

test('Automation Exercise homepage loads', async ({ homePage }) => {
  await homePage.open();

  await expect(homePage.header.homeLink).toBeVisible();
  await expect(homePage.getTitle()).resolves.toMatch(/Automation Exercise/i);
});
