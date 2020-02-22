'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        busyness: 3,
        // stop_id:
        incident_type: "Police Incident",
        incident_report: "Heavy patrol for holiday",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 2,
        // stop_id:
        incident_type: "Police Incident",
        incident_report: "Suspected Robbery",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 5,
        // stop_id:
        incident_type: "Police Incident",
        incident_report: "Bomb threat",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 2,
        // stop_id:
        incident_type: "Environmental Incident",
        incident_report: "Flooding in station",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 5,
        // stop_id:
        incident_type: "Environmental Incident",
        incident_report: "Temporary Sever Weather Shelter",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 4,
        // stop_id:
        incident_type: "Environmental Incident",
        incident_report: "Rat infestation",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 1,
        // stop_id:
        incident_type: "Social Incident",
        incident_report: "Fight on platform",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 5,
        // stop_id:
        incident_type: "Social Incident",
        incident_report: "Crowd after Rally",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        busyness: 3,
        // stop_id:
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