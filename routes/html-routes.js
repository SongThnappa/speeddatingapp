
var path = require("path");

module.exports = function(app) {

 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/LoginSuccessful", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/waitRoom.html"));
  });

  app.get("/LoginUnSuccessful", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/Chat", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chatRoom.html"));
  });

};
