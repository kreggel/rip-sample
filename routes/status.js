module.exports = Status;

var StatusModel = require ('models/status');
var Endpoint = require ('kreggel-rip/runtime/endpoint');

function Status () {
  Endpoint.apply (this, arguments);
}

Status.prototype = Object.create (Endpoint.prototype);

Status.prototype.findAllItems = function () {
  return new StatusModel ();
};
