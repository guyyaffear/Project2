'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Qtrains', [{
      stops: "96 Street / 2 Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops:"86 Street / 2 Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "72 Street / 2 Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Lexington Av / 63",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "57 Street / 7 Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "49 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Times Square-42 Street / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "34 Street-Herald Square / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "28 Street / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "23 Street / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "14 Street-Union Square / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "8 Street-New York University / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Prince Street / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Canal Street / Broadway",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "DeKalb Avenue / Flatbush Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Atlantic Avenue / Barclays Center",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "7 Avenue / Flatbush Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Prospect Park / Empire Boulevard-Flatbush Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Parkside Avenue / Ocean Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Church Avenue / East 18 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Beverley Road / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Cortelyou Road /East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Newkirk Plaza / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Avenue H / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Avenue J / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Avenue M / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Kings Highway / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Avenue U / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Neck Road / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Sheepshead Bay / East 16 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Brighton Beach / Brighton 6 Street",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Ocean Parkway / Brighton Beach Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "West 8 Street-New York Aquarium / Surf Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      stops: "Coney Island-Stillwell Avenue / Surf Avenue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Qtrain', null, {});
  }
};