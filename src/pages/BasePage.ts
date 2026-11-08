import type { Page } from '@playwright/test';
import { Header } from '../components/Header';

export class BasePage {
  readonly header: Header;

  constructor(protected readonly page: Page) {
    this.header = new Header(page);
  }

  protected async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }
}
