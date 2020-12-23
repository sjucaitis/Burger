// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  create: function(name, cb) {
    orm.insertOne("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true
    }, condition, cb);
  }
};
// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
