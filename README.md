
# Cypress Template

This project is a simple template for e2e automated tests with [Cypress](https://www.cypress.io/) framework.
It supports different environments and tags.

## Prerequisites
Node. js version 12 or above.

## Installation
After cloning the repo, install all dependencies using npm

```bash
npm install
```

## Usage

```bash
# Open GUI for launching and debugging tests. Remember to choose the environment depending on the config file. Sample command:
npx cypress open --config-file ./configs/prod

# Run test by selected tags and environment. Sample command:
npx cypress run --env grepTags=@Regression --config-file ./configs/prod.config.js

```

