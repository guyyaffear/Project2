var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname ,"../public/welcome.html"));
  });

  app.get("/login_page", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/login_page.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

  app.get("/explore", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/explore.html"));
  });
  // Load example page and pass in an example by id

  // Render 404 page for any unmatched routes
};
