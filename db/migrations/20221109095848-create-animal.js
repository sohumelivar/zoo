/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      species: {
        type: Sequelize.STRING,
      },
      short: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      photo1: {
        type: Sequelize.STRING,
      },
      photo2: {
        type: Sequelize.STRING,
      },
      photo3: {
        type: Sequelize.STRING,
      },
      photo4: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Animals');
  },
};
