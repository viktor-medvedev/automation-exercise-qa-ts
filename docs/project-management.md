# Project Management — Automation Exercise QA (TypeScript)

## Product
Practice e-commerce website: https://www.automationexercise.com/

## Repository scope
This repository contains only the Playwright + TypeScript automation project. Python automation will live in a separate repository.

## Work item hierarchy
- Epic: a major product or engineering topic, tracked as a GitHub issue.
- User Story: a user-centered requirement with testable acceptance criteria, tracked as a GitHub issue.
- Task: an implementation or test-design activity, tracked as a GitHub issue and linked to its parent story in the issue body.
- Bug: an observed defect with reproduction steps, expected/actual results, and evidence.
- Test Case: a documented scenario with preconditions, steps, and expected results. Test cases may be maintained in docs and linked to automation issues.

## Board workflow
Recommended GitHub Projects status values:
- Backlog
- Ready
- In Progress
- In Review
- Done
- Blocked

## Planning fields
- Priority: Critical, High, Medium, Low
- Work type: Epic, User Story, Task, Bug, Test Case
- Area: User Management, Product Catalog, Search, Cart, Checkout, Contact & Subscription, Reviews, API, Framework, CI/CD
- Automation: Not Planned, Manual, To Automate, Automated
- Sprint: Sprint 1, Sprint 2, Sprint 3 (create iterations in GitHub Projects)

## Definition of Ready
- User value and scope are clear.
- Acceptance criteria are specific and testable.
- Dependencies and test data needs are identified.
- Story can be estimated and is small enough for a sprint.

## Definition of Done
- Acceptance criteria are met.
- Relevant tests are implemented and pass locally.
- Code is reviewed and follows project conventions.
- No secrets or personal data are committed.
- CI result is green, or a documented reason explains an exception.
- Documentation is updated.

## Suggested initial sprint
Sprint 1 should focus on repository/framework foundation and one thin vertical slice:
1. Bootstrap Playwright + TypeScript.
2. Configure linting, formatting, and test scripts.
3. Add a smoke test for the home page.
4. Add GitHub Actions CI.
5. Document local setup and execution.

## Backlog structure
Epics are created as GitHub issues. User Stories and Tasks will be created beneath each Epic and linked using issue references in their descriptions. The GitHub Projects board should be connected to this repository and configured with the workflow and fields above.
