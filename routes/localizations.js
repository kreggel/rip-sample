module.exports = Localizations;

var LocalizationsModel = require ('models/languages');
var Endpoint = require ('kreggel-rip/runtime/endpoint');

function Localizations () {
  Endpoint.apply (this, arguments);
}

Localizations.prototype = Object.create (Endpoint.prototype);

Localizations.prototype.findAllItems = function () {
  return new LocalizationsModel ();
};

Localizations.prototype.findItemById = function (id) {
  var supportedLanguages = new LocalizationsModel ().supportedLanguages;
  var found = false;
  supportedLanguages.forEach(function (supportedLanguage) {
    if (supportedLanguage === id) {
      found = true;
      return;
    }
  });
  if (found) {
    var LocalizationModel = require ('models/localization');
    return new LocalizationModel(id);
  } else {
    this.throwNotFoundError();
  }
};