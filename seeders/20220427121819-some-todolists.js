"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todolists",
      [
        {
          name: "LIST 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LIST 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todolists", null, {});
  },
};
