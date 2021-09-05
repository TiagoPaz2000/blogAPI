'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('Users', 'role', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Users', 'role');
  }
};
