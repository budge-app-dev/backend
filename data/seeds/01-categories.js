
exports.seed = function(knex) {
  return knex('categories').truncate()
    .then(function () {
      return knex('categories').insert([
        {category_id: 1, category_name: 'Rent/Mortgage'},
        {category_id: 2, category_name: 'Property Tax'},
        {category_id: 3, category_name: 'Homeowners Insurance'},
        {category_id: 4, category_name: 'Cable/Internet'},
        {category_id: 5, category_name: 'Utilities'},
        {category_id: 6, category_name: 'Groceries'},
        {category_id: 7, category_name: 'Waste Disposal'},
        {category_id: 8, category_name: 'Phone'},
        {category_id: 9, category_name: 'Subscriptions'},
        {category_id: 10, category_name: 'Dining'},
        {category_id: 11, category_name: 'Clothing'},
        {category_id: 12, category_name: 'Household Items'},
        {category_id: 13, category_name: 'Self-Care'},
        {category_id: 14, category_name: 'Entertainment'},
        {category_id: 15, category_name: 'Special Occasions'},
        {category_id: 16, category_name: 'Health Insurance'},
        {category_id: 17, category_name: 'Dental Care'},
        {category_id: 18, category_name: 'Specialty Care'},
        {category_id: 19, category_name: 'Child Care'},
        {category_id: 20, category_name: 'Pet Care'},
        {category_id: 21, category_name: 'Car Payment'},
        {category_id: 22, category_name: 'Auto Insurance'},
        {category_id: 23, category_name: 'Maintenance'},
        {category_id: 24, category_name: 'Registration'},
        {category_id: 25, category_name: 'Gas'},
        {category_id: 26, category_name: 'Tuition'},
        {category_id: 27, category_name: 'College Savings'},
        {category_id: 28, category_name: 'Credit Card Bill'},
        {category_id: 29, category_name: 'Emergency Fund'},
        {category_id: 30, category_name: 'Investing'}
      ]);
    });
};
