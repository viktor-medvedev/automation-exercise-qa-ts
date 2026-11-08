# Project

- QA automation framework for Automation Exercise.
- Stack: Playwright Test, TypeScript, Node.js, npm, GitHub Actions.
- Python is not part of this repository.
- Architecture: Page Object Model, reusable Components, Playwright Fixtures.

# Coding rules

- Use strict TypeScript.
- Prefer Playwright locators and web-first assertions.
- Avoid fixed sleeps and flaky tests.
- Keep tests independent.
- Reuse existing Pages, Components and Fixtures.
- Avoid unnecessary abstractions.
- Do not add dependencies without a clear reason.
- Keep README and documentation updated when relevant.

# Task workflow

For every GitHub Issue:

1. Read its description and acceptance criteria.
2. Create a dedicated branch from the latest main.
3. Use `feature/issue-<number>-<short-description>` or `chore/issue-<number>-<short-description>`.
4. Implement only the requested scope.
5. Add or update tests.
6. Run relevant npm checks and tests.
7. Review the Git diff.
8. Commit with a descriptive conventional commit message.
9. Push the branch.
10. Create a Pull Request linked to the Issue.
11. Include a summary, test results and acceptance criteria checklist in the PR.
12. Never merge a PR automatically.

# Safety

- Never commit `.env`, credentials, tokens, passwords, `node_modules`, `test-results` or generated reports.
- Never force-push.
- Never reset or discard user changes.
- Never push directly to main.
- Ask for approval before merging a PR.
- Do not claim tests passed unless they were actually executed.
