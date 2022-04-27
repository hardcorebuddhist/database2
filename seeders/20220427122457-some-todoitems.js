"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "Finish reports",
          deadline: "20/3/2020",
          todolistId: 1,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan Birthday",
          deadline: "24/5/2022",
          todolistId: 1,
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go swimming",
          deadline: "24/5/2022",
          todolistId: 2,
          important: true,
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
