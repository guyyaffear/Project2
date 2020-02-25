var db = require("../models");
module.exports = function(app) {
  // Get all examples
  app.get("/api/stops", function(req, res) {
    db.user.findAll({}).then(function(usersDB) {
      res.json(usersDB);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.user.create(req.body).then(function(usersDB) {
      res.json(usersDB);
    });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.user.destroy({ where: { id: req.params.id } }).then(function(usersDB) {
      res.json(usersDB);
    });
  });
};

  // dataArray.forEach(data => {
  //   const selectDiv = document.getElementById('selectId')

  //   const option = $("option");
  // })