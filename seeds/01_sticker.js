
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sticker').del()
    .then(function () {
      // Inserts seed entries
      return knex('sticker').insert([
        { id: 1, title: 'First Sticker', description: "Test description", rating: "4", url: "test url" },
      ]);
    });
};
