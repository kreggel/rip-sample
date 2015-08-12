module.exports = Welcome;

var Endpoint = require ('kreggel-rip/runtime/endpoint');

function Welcome () {
  Endpoint.apply (this, arguments);
}

Welcome.prototype = Object.create (Endpoint.prototype);

Welcome.prototype.findAllItems = function () {
  var routes = this.api.routes();
  var names = [];
  routes.forEach(function(route) {
    names.push(route.value);
  });

  return names;
};