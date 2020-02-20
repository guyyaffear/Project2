module.exports = function(sequelize, DataTypes) {
  var QTrain = sequelize.define("QTrain", {
    stops: DataTypes.STRING
  });
  return QTrain;
};
