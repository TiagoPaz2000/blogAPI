'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert('Users', [
     {
      firstName: 'Tiago',
      lastName: 'Paz',
      email: 'tiagopaz@email.com',
      password: '25d55ad283aa400af464c76d713c07ad',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      role: 'admin',
     },
     {
      firstName: 'Bill',
      lastName: 'Gates',
      email: 'billgates@email.com',
      password: '25d55ad283aa400af464c76d713c07ad',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      role: 'user',
     },
     {
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'adalovelace@email.com',
      password: '25d55ad283aa400af464c76d713c07ad',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      role: 'user',
     }
   ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {})
  }
};
