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
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 2,
      incident_type: "Police Incident",
      incident_report: "Suspected Robbery",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 5,
      incident_type: "Police Incident",
      incident_report: "Bomb threat",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 2,
      incident_type: "Environmental Incident",
      incident_report: "Flooding in station",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 5,
      incident_type: "Environmental Incident",
      incident_report: "Temporary Sever Weather Shelter",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 4,
      incident_type: "Environmental Incident",
      incident_report: "Rat infestation",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 1,
      incident_type: "Social Incident",
      incident_report: "Fight on platform",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 5,
      incident_type: "Social Incident",
      incident_report: "Crowd after Rally",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: null,
      password: null,
      start: "72 Street / 2 Avenue",
      end: "Avenue H / East 16 Street",
      busyness: 3,
      incident_type: "Social Incident",
      incident_report: "Nets Traffic",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};