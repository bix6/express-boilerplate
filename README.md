# Express Boilerplate

Boilerplate for starting new Express Projects

## Setup

- `git clone BoilerplateURL NewProjectName`
- `cd` into project
- `rm -rf .git && git init` init fresh git 
- `npm install`
- `mv example.env .env` move `example.env` to `.env`
    - `.env` will be ignored by git and used by express locally
- Update `name` and `description` in `package.json`

## Database Setup
- Draw ERD
- Create migrations
- `CREATE DATABASE name WITH OWNER "user_name";`
    - Also create `name-test` db
- `npm i postgrator-cli@3.2.0 -D` 
    - To avoid Windows issues (asks for password otherwise)
- Update `API_Token`, `DB_URL` and `TEST_DB_URL` in `.env`
- Start the db and try:
    - `npm run migrate` to migrate all the way up
    - `npm run migrate -- 0` to migrate all the way down (or to any step)
    - `npm run migrate:test` to migrate the test db
- Seed the db
    - Update `seeds`
    - Change to db in psql with `\c dbname`
    - Run seed file `\i C:/Path/To/File/seeds/seed.db.sql`



8. Delete `example-router` and `example-store` if not needed
9. Update `README.md`

## Scripts
- `npm start`
- `npm run dev` to start nodemon
- `npm test` or `npm t`
- `npm run migrate` or `npm run migrate -- 0`
- `npm run migrate:test` to migrate the test db

## Deploying
- `heroku create`
- `npm run predeploy` to audit packages
- `npm run deploy` to push to Heroku repo