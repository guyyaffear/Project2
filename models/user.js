module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      busyness: DataTypes.INTEGER,
    //   stop_id: DataTypes.association,
      incident_type: DataTypes.STRING,
      incident_report: DataTypes.TEXT
    });
    return User;
  };
  