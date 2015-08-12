module.exports = Localization;

function Localization (name) {
  this.type = 'localization';
  this.language = name;
  this.hash = '00000000000000000000000000000000';
  this.localizations = {
    'chattime.hours.text': '{0} hours ago',
    'dialog.credential.title': 'Login',
    'text.viewall': 'View all',
    'text.uploaded': 'Uploaded',
    'text.rights.edit': 'Allowed to edit',
    'text.home': 'Home',
    'text.app': 'App'
  };
}
