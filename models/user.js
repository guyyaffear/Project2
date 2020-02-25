"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    time: DataTypes.STRING,
    busyness: DataTypes.INTEGER,
    incident_type: DataTypes.STRING,
    incident_report: DataTypes.TEXT
  });
  User.associate = function(models) {
    User.hasMany(models.QTrain, { as: "stops", foreignKey: "stops" });
  };
  return User;
};
