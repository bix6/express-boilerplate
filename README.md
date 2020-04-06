# Express Boilerplate

Boilerplate for starting new Express Projects

## Setup

1. `git clone BoilerplateURL NewProjectName`
2. `cd` into project
3. `rm -rf .git && git init` init fresh git 
4. `npm install`
5. `mv example.env .env` move `example.env` to `.env`
    - `.env` will be ignored by git and used by express locally
6. Update `name` and `description` in `package.json`
- Add `API_TOKEN=1234` to `.env` if using API Key

## Additional Setup
- Logger
- `const logger = require('./logger');` to use Winston logger
- `logger.error('Error Message');` to log something

## Scripts
- `npm start`
- `npm run dev` to start nodemon
- `npm test`

## Deploying
- `heroku create`
- `npm run predeploy` to audit packages
- `npm run deploy` to push to Heroku repo
