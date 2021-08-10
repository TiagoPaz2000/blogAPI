'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert('Posts', [
     {
      title: 'Xadrez: Dicas sobre o jogo',
      categories: 'jogos',
      rating: 8.2,
      content: 'Dicas quentes para você arrebentar com o adversário',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
     {
      title: 'Como tirar nota 1000 no Enem',
      categories: 'escola',
      rating: 7.0,
      content: 'Dicas para você que apenas dormia na sala de aula :)',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     }
   ])
  },

  down: async (queryInterface, _Sequelize) => {
    return await queryInterface.bulkDelete('Posts', null, {})
  }
};
