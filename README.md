# Automation Exercise QA Automation

Playwright Test and TypeScript framework for UI quality checks against [Automation Exercise](https://www.automationexercise.com/).

## Requirements

- Node.js 20 or later
- npm

## Setup

```bash
npm ci
npx playwright install chromium
```

## Run

```bash
npm test                 # Run the Chromium suite
npm run test:headed       # Run with a visible browser
npm run test:ui           # Open Playwright UI mode
npm run test:report       # Open the last HTML report
npm run typecheck         # Type-check the project
```

The base URL defaults to `https://www.automationexercise.com`. Override it with `BASE_URL` when running against another environment.

## Project layout

- `tests/` — Playwright specifications
- `src/pages/` — Page Object Model classes (add page objects here as coverage grows)
- `playwright.config.ts` — shared browser, runner, and reporting configuration

The initial smoke test only checks that the homepage loads. Application workflows and page objects can be added in later tasks.
