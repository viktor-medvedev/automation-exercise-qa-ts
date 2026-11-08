import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class SignupLoginPage extends BasePage {
  readonly signupTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.signupTitle = this.page.locator('.signup-form > h2');
  }

}
