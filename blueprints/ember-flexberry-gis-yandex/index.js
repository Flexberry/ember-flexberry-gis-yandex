/* globals module */
module.exports = {
  afterInstall: function() {
    var _this = this;
    return this.addBowerPackagesToProject([
      // Leaflet plugins containing yandex plugin.
      'https://github.com/shramov/leaflet-plugins#master'
    ]).then(function() {
      return _this.addAddonsToProject({
        packages: []
      });
    }).then(function () {
      // Add any NPM-package like that:
      //return _this.addPackagesToProject([{
      //  name: 'some npm package',
      //  target: 'package version'
      //}]);
    });
  },

  normalizeEntityName: function() {
  }
};