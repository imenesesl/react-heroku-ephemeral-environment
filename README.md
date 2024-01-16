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