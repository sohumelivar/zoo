/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tariffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      visitor: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dayOfTheWeek: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      basicPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      additionalTicket: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ridePrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tariffs');
  },
};
