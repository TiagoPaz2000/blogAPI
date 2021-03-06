'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('Posts', 'urlImage', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Posts', 'urlImage');
  }
};
