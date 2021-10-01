# Node.js Express JSON API - CRUD Stickers

We'll be using:

- Postgres for our database
- knex.js for our database migrations, seeds and queries.
- express.js for our JSON routes
- Mocha, Chai and SuperTest to test our routes

- Prerequisites (Mac OS Commands)
  - Latest version of Node.js
    - brew install node
  - Postgres
    - brew install postgres
    - brew services start postgres
    - createdb
  - Express Generator
    - npm install -g express-generator
  - Knex installed globaly
    - npm install -g knex

## Server Check List

- [x] Create a server folder
  - [x] Generate Express App
  - [x] initialize git repo
- [x] Create database
- [x] Initialize knex project
  - [x] Install knex and pg
  - [x] Create knexfile.js
- [X] Create sticker table migration
- [X] Seed sticker table with sample data
- [X] Convert Express App to JSON API
  - [X] Remove view rendering
  - [X] Remove routes folder
  - [X] Remove static serve and public folder
  - [X] Update error handler
- [X] Add api folder and create/mount router
- [X] Connect to the database'
  - [X] Create database connection file
  - [X] Create a queries file
- [X] List all records with GET /api/v1/stickers
  - [X] Create query
  - []X Create route
- [X] Setup tests
  - [X] Install mocha, chai and supertest
  - [X] Add a test database connection
  - [X] Add npm test script
    - [X] Drop/Create database
  - [X] Create before
    - [X] Run migrations/seeds on test db
- [X] Make sure the tests are working!
- [X] List all records with GET /api/v1/stickers
  - [X] Add test
- [X] Show one record with GET /api/v1/stickers/:id
  - [X] Validate id
  - [] Create query
  - [] Create route
  - [] Add test
- [] Create a record with POST /api/v1/stickers
  - [] Create route
  - [] Validate sticker!
  - [] Create query
  - [] Add test
- [] Update a record with PUT /api/v1/stickers/:id
  - [] Create route
  - [] Validate id
  - [] Validate updates
  - [] Create query
  - [] Add test
- [] Delete a record with DELETE /api/v1/stickers/:id
  - [] Create route
  - [] Validate id
  - [] Create query
  - [] Add test
