'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      email: "DemoUser@gmail.com",
      password: "demo123456",
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 3,
      incident_type: "Police Incident",
      incident_report: "Heavy patrol for holiday",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: null,
      end: null,
      busyness: null,
      incident_type: null,
      incident_report: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

      // stop_id: