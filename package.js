Package.describe({
  name: 'wkniffin:ionicons-sass1.4',
  summary: "Ionic's Ionicons library in SASS and bundled for Meteor 1.4. Taken from meteoric:ionicons-sass.",
  version: '0.1.0',
  git: 'https://github.com/wkniffin/ionicons-sass1.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use("fourseven:scss@3.8.0_1", ["server"]);
  api.imply("fourseven:scss", ["server"]);

  api.addAssets([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff'
  ], 'client');

  api.addFiles([
    'stylesheets/_ionicons-animation.scss',
    'stylesheets/_ionicons-font.scss',
    'stylesheets/_ionicons-icons.scss',
    'stylesheets/_ionicons-variables.scss'
  ], 'server');

  api.addFiles('_ionicons.scss', 'server');
});
