"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todolist.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  todolist.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todolist",
    }
  );
  return todolist;
};
