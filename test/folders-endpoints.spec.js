const knex = require('knex');
const app = require('../src/app');
const { makeFoldersArray } = require('./folders.fixtures.js');

describe('Folders Endpoint', function() {
    let db;

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        });
        app.set('db', db);
    })

    after('disconnect from db', () => db.destroy())

    before('clean table', () => db.raw('TRUNCATE folders RESTART IDENTITY CASCADE'))

    afterEach('clean table', () => db.raw('TRUNCATE folders RESTART IDENTITY CASCADE'))

    describe('GET /api/folders', () => {
        context('Given no folders', () => {
            it ('responds with 200 and an empty list', () => {
                return supertest(app)
                    .get('/api/folders')
                    .expect(200, []);
            })
        })

        context('Given folders', () => {
            const testFolders = makeFoldersArray();

            beforeEach('insert folders', () => {
                return db('folders').insert(testFolders);
            })

            it('responds with 200 and all folders', () => {
                return supertest(app)
                    .get('/api/folders')
                    .expect(200);
            })
        })
    })
})