// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "stickers",
      user: "postgres",
      password: "r6r5bb!!"
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: "stickerstest",
      user: "postgres",
      password: "r6r5bb!!"
    }
  }
};
