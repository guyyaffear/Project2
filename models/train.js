module.exports = function(sequelize, DataTypes) {
    var Train = sequelize.define("Train", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Train;
  };
  