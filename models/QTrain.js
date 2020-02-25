"use strict";

module.exports = function(sequelize, DataTypes) {
  var QTrain = sequelize.define("QTrain", {
    stops: DataTypes.STRING
  });
  console.log("FUcKKKKKKKKKKKKKKKKKKKKK");
  QTrain.associate = function(models) {
    QTrain.belongsTo(models.User, { as: "User", foreignKey: "UserID" });
  };
  return QTrain;
};
