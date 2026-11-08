import { test as base } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { SignupLoginPage } from '../../src/pages/SignupLoginPage';

type Fixtures = {
  homePage: HomePage;
  signupLoginPage: SignupLoginPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signupLoginPage: async ({ page }, use) => {
    await use(new SignupLoginPage(page));
  },
});

export { expect } from '@playwright/test';