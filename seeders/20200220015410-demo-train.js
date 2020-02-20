'use strict';

module.exports = function(sequelize, DataTypes) {
  var QTrain = sequelize.define("TrainTB", {
    stops: DataTypes.STRING,
  });
  return QTrain;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Qtrain', [{
      stops: "96 Street / 2 Avenue"
    },
    {
      stops:`86 Street /
      2 Avenue`
    },
    {
      stops: "72 Street / 2 Avenue"
    },
    {
      stops: "Lexington Av / 63"
    },
    {
      stops: "57 Street / 7 Avenue"
    },
    {
      stops: "49 Street"
    },
    {
      stops: "Times Square-42 Street / Broadway"
    },
    {
      stops: "34 Street-Herald Square / Broadway"
    },
    {
      stops: "28 Street / Broadway"
    },
    {
      stops: "23 Street / Broadway"
    },
    {
      stops: "14 Street-Union Square / Broadway"
    },
    {
      stops: "8 Street-New York University / Broadway"
    },
    {
      stops: "Prince Street / Broadway"
    },
    {
      stops: "Canal Street / Broadway"
    },
    {
      stops: "DeKalb Avenue / Flatbush Avenue"
    },
    {
      stops: "Atlantic Avenue / Barclays Center"
    },
    {
      stops: "7 Avenue / Flatbush Avenue"
    },
    {
      stops: "	Prospect Park / Empire Boulevard-Flatbush Avenue"
    },
    {
      stops: "Parkside Avenue / Ocean Avenue"
    },
    {
      stops: "Church Avenue / East 18 Street"
    },
    {
      stops: "Beverley Road / East 16 Street"
    },
    {
      stops: "Cortelyou Road /East 16 Street"
    },
    {
      stops: "Newkirk Plaza / East 16 Street"
    },
    {
      stops: "Avenue H / East 16 Street"
    },
    {
      stops: "Avenue J / East 16 Street"
    },
    {
      stops: "Avenue M / East 16 Street"
    },
    {
      stops: "Kings Highway / East 16 Street"
    },
    {
      stops: "Avenue U / East 16 Street"
    },
    {
      stops: "Neck Road / East 16 Street"
    },
    {
      stops: "Sheepshead Bay / East 16 Street"
    },
    {
      stops: "Brighton Beach / Brighton 6 Street"
    },
    {
      stops: "Ocean Parkway / Brighton Beach Avenue"
    },
    {
      stops: "West 8 Street-New York Aquarium / Surf Avenue"
    },
    {
      stops: "Coney Island-Stillwell Avenue / Surf Avenue"
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};