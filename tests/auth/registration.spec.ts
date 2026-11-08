import { test, expect } from '../fixtures/fixtures';

test('REG-001: Open Signup/Login page', async ({  homePage, signupLoginPage }) => {
  await homePage.open();

  const loginLink = homePage.header.loginLink;
  await loginLink.click();

  await expect(signupLoginPage.signupTitle).toHaveText('New User Signup!');
});