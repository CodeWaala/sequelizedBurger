// const orm = require('../config/orm.js');

// var burger = {
//     // Find all the burgers
//     all: function (callback) {
//         orm.selectAll("burgers", callback);
//     },
//     devoured: function (callback) {
//         orm.selectDevoured("burgers", callback);
//     },
//     create: function (burgertext, callback) {
//         // create a burger
//         orm.insertOne("burgers", "burger_name", burgertext, callback);
//     },
//    update: function (id, callback) {
//         // update the burger information
//         orm.updateOne("burgers", "devoured", 1, id, callback);
//     }

// }

// module.exports = burger;


module.exports = function (sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: 0 },
  });
  return burger;
};
