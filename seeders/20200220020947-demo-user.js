'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        busyness: 3,
        // stop_id:
        incident_type: "Police Incident",
        incident_report: "Heavy patrol for holiday"
      }, {
        busyness: 2,
        // stop_id:
        incident_type: "Police Incident",
        incident_report: "Suspected Robbery"
      }, {
        busyness: 5,
        // stop_id:
        incident_type: "Police Incident",
        incident_report: "Bomb threat"
      }, {
        busyness: 2,
        // stop_id:
        incident_type: "Environmental Incident",
        incident_report: "Flooding in station"
      }, {
        busyness: 5,
        // stop_id:
        incident_type: "Environmental Incident",
        incident_report: "Temporary Sever Weather Shelter"
      }, {
        busyness: 4,
        // stop_id:
        incident_type: "Environmental Incident",
        incident_report: "Rat infestation"
      }, {
        busyness: 1,
        // stop_id:
        incident_type: "Social Incident",
        incident_report: "Fight on platform"
      }, {
        busyness: 5,
        // stop_id:
        incident_type: "Social Incident",
        incident_report: "Crowd after Rally"
      }, {
        busyness: 3,
        // stop_id:
        incident_type: "Social Incident",
        incident_report: "Nets Traffic"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
