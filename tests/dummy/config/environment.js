/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    repositoryName: 'ember-flexberry-gis-yandex',
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      backendUrls: {
        root: 'https://flexberry.github.io/ember-flexberry-gis-yandex',
        api: 'https://flexberry.github.io/ember-flexberry-gis-yandex'
      },

      // Log service settings.
      log: {
        // Flag: indicates whether log service is enabled or not.
        enabled: false
      },

      // Flag: indicates whether to use user settings service or not.
      useUserSettingsService: false
    }
  };

  // Read more about ember-i18n: https://github.com/jamesarosen/ember-i18n.
  ENV.i18n = {
    // Should be defined to avoid ember-i18n deprecations.
    // Locale will be changed then to navigator current locale (in instance initializer).
    defaultLocale: 'en'
  };

  // Read more about ember-moment: https://github.com/stefanpenner/ember-moment.
  // Locale will be changed then to same as ember-i18n locale (and will be changed every time when i18n locale changes).
  ENV.moment = {
    outputFormat: 'L'
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // Keep test console output quieter.
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  // Change paths application assets if build was started with following parameters:
  // ember build --gh-pages --brunch=<brunch-to-publish-on-gh-pages>.
  if (process.argv.indexOf('--gh-pages') >= 0) {
    var brunch;

    // Retrieve brunch name from process arguments.
    process.argv.forEach(function(value, index) {
      if (value.indexOf('--brunch=') >=0) {
        brunch=value.split('=')[1];
        return;
      }
    });

    // Change base URL to force relative paths to application assets.
    ENV.baseURL = '/' + ENV.repositoryName + '/' + brunch + '/';
    ENV.locationType = 'none';
  }

  return ENV;
};
