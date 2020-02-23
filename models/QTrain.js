"use strict";

module.exports = function(sequelize, DataTypes) {
  var QTrain = sequelize.define("QTrain", {
    stops: DataTypes.STRING
  });
  QTrain.associate = function(models) {
    QTrain.belongsTo(models.User);
  };
  return QTrain;
};
