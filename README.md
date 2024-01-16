# React-Vite Application

This application is built using Vite, React, TypeScript, and SWC. It's designed for efficient development and high performance in production.

## Environments

### Ephemeral Environments
- Each Pull Request creates an ephemeral environment on Heroku.
- The naming convention for these environments is `react-vite-pr-{heroku-number}`.
- A link to the ephemeral environment is automatically added as a comment in each PR for easy access and review.

### Staging
- The staging environment is available at [stg-react-vite on Heroku](https://stg-react-vite-4576bf5f1a0f.herokuapp.com/).
- This environment is used for pre-production testing.

### Production
- The production application is hosted at [react-vite on Heroku](https://react-vite-2dca1af65e06.herokuapp.com/).
- This is the live environment used by end users.

The key identifier for these environments is `react-vite`.

## Release Tagging
- Release tags follow the format `release-yyyy-mm-dd-hh-mm-ss`.
- Example: `release-2024-01-16-11-08-00`.

## Project Configuration
- The project uses `yarn` for dependency management.
- A `Procfile` is included, which is required by Heroku for running the app.
- A `static.json` is also part of the project, pointing to the build directory for static file serving.

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/imenesesl/react-vite-heroku-workflow.git
cd react-vite-heroku-workflow
```

### Install Dependencies
```bash
nvm use
yarn install
```

### Run the Project Locally
```bash
yarn dev
```

## Branch Naming Convention

In our development process, we follow a specific naming convention for branches to streamline version management and to clearly indicate the purpose of each branch. The prefixes used are integral to our automated versioning process.

### Branch Prefixes:

- `fix`: For branches containing bug fixes. If a branch is merged with this prefix, it's assumed to be a patch update.
- `hotfix`: For urgent bug fixes that need to be deployed rapidly. Also treated as a patch update.
- `feature`: For new features being added to the application. Merging these branches typically triggers a minor version update.
- `feat`: An alternative to `feature`, also leading to a minor version update.
- `core`: For significant changes that might include breaking changes. Merging a `core` branch will trigger a major version update.

### Automated Version Management:

Our workflow is set up to automatically update the version in the `package.json` file based on the prefix of the branch being merged into `main`. The versioning follows [Semantic Versioning](https://semver.org/) principles (major.minor.patch):

- `fix`/`hotfix`: Triggers a patch version increment.
- `feature`/`feat`: Triggers a minor version increment.
- `core`: Triggers a major version increment.

If the branch name doesn't match any of the specified prefixes, the system defaults to treating it as a `fix`, resulting in a patch version increment. This ensures that every merge into `main` is accompanied by an appropriate version update, maintaining consistency and traceability.

### Example:

- Merging a branch named `feature/add-new-login` will increment the minor version.
- Merging a branch named `fix/login-bug` will increment the patch version.