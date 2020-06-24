# Express Boilerplate

Boilerplate for starting new Express Projects

## Important Things (don't forget to do these)

- Enable Auth in `app.js` (uncomment validateBearerToken)
- Change the API Key

## Setup

- `git clone BoilerplateURL NewProjectName`
- `cd` into project
- `rm -rf .git && git init` init fresh git
- `mv example.env .env` move `example.env` to `.env`
  - `.env` will be ignored by git and used by express locally
- Update `name` and `description` in `package.json`
- Update Readme
- `npm install`
- Confirm `pg` version below 8 in `package.json` because pg 8 breaks Heroku
  - `npm uninstall pg --save`
  - `npm install pg@7.18.2`
    - [Check Versions](https://www.npmjs.com/package/pg)
- Test the server:
  - `npm run start`
  - Send a request to `/` from Postman

## Database Setup

- Draw Entity Relationship Diagram (ERD)
- Create migrations in `migrations/`
- `pg_ctl restart` restart postgres
  - Windows has a lot of funky issues with pg; sometimes I need to run this command many times to get it to restart
- `createuser -Pw --interactive` (from powershell) to create a db user if needed
  - Can also use `CREATE ROLE`
- Two ways to create the Database:
  - `createdb -U user_name database_name` from powershell
  - `CREATE DATABASE name WITH OWNER "user_name";` from psql
  - Also create `database_name_test` db
- `psql -U user_name database_name` login to psql
- psql commands
  - `\du` define users
  - `\l` list databases
  - `\c db_name` connect to db
  - `\dt` define tables in current db
- Confirm postgrator 3.2.0 in `package.json` (later versions cause issues with Windows)
  - `npm uninstall postgrator-cli --save-dev`
  - `npm i postgrator-cli@3.2.0 -D`
- Update `API_Token`, `DB_URL` and `TEST_DB_URL` in `.env`
- Start the db and try:
  - `npm run migrate` to migrate all the way up
  - `npm run migrate -- 0` to migrate all the way down (or to any step)
  - `npm run migrate:test` to migrate the test db
  - Confirm tables create in psql with:
    - `\dt`define tables in current db
    - `\d+ table_name` define individual table
- Seed the db
  - Update `seeds`
  - Change to db in psql with `\c dbname`
  - Run seed file `\i C:/Path/To/File/seeds/seed.db.sql`
- Create service objects (this is the example included with the boilerplate)
  - Create `folders-endpoints.spec.js` and `folders.fixtures.js` for tests
    - Create an initial test that fails
  - Create `src/folders` to hold `folders-router.js` and `folders-service.js`
  - Wire up router to respond to pass the initial test and modify `app.js` to use the router
  - Wire up the service object and call it from the router
    - Make the test pass
  - Start the app, make sure `server.js` adds knex to the app and query the first endpoint to ensure it works and data is being retrieved from the db

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
