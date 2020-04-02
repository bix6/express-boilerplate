# Express Boilerplate

Boilerplate for starting new Express Projects

## Setup

1. `git clone BoilerplateURL NewProjectName`
2. `cd` into project
3. Re-init fresh git `rm -rf .git && git init`
4. `npm install`
5. Move `example.env` to `.env` with `mv example.env .env`
    - `.env` will be ignored by git and used by express locally
6. Update `name` and `description` in `package.json`

## Scripts
- `npm start`
- `npm run dev` to start nodemon
- `npm test`

## Deploying
- `heroku create`
- `npm run predeploy` to audit packages
- `npm run deploy` to push to Heroku repo
