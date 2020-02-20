module.exports = function(sequelize, DataTypes) {
  var QTrain = sequelize.define("TrainTB", {
    stops: DataTypes.STRING,
  });
  return QTrain;
};
