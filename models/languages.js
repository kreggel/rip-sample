module.exports = Languages;

function Languages () {
  this.type = 'Languages';
  this.supportedLanguages = ['fr', 'zh', 'ru', 'tr', 'ar', 'en', 'pl', 'es', 'de', 'it'];
  this.acceptedLanguage = 'en';
  this.defaultLanguage = 'en';
}