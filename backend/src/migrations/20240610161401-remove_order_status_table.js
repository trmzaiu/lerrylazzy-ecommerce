'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderStatus')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderStatus', {

    })
  }
}
