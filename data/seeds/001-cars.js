
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, registration: '51454', make: 'Audi', model: 'A4', mileage: '150000', manualtransmission: true, status: 'Good.'},
      ]);
    });
};
