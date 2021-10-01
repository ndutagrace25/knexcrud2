const knex = require("../db/knex");

describe("CRUD Stickers", () => {
  before(() => {
    // run migrations
    knex.migrate.latest().then(() => {
      // run seeds
      return knex.seed.run();
    });
  });

  it('Works..', () => {
    console.log('Its working')
  })
});
