"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "todoitems",
      "important",
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("todoitems", "important", {});
  },
};
