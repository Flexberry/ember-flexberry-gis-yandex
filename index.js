/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flexberry-gis',
  included: function(app){
    this._super.included(app);

    app.import(app.bowerDirectory + '/leaflet/dist/leaflet.js');
    app.import(app.bowerDirectory + '/leaflet/dist/leaflet.css');

    app.import(app.bowerDirectory + '/semantic-ui/dist/semantic.css');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
