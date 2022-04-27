"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "Finish reports",
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan Birthday",
          deadline: "24/5/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go swimming",
          deadline: "24/5/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoitems", null, {});
  },
};