import type { Locator, Page } from '@playwright/test';

export class Header {
  readonly homeLink: Locator;
  readonly productsLink: Locator;

  constructor(page: Page) {
    this.homeLink = page.getByText('Home', { exact: true });
    this.productsLink = page.getByText('Products', { exact: true });
  }
}
