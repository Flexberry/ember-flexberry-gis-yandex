/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flexberry-gis-yandex',

  included: function(app) {
  	this._super.included.apply(this._super, arguments);

    // Leaflet-Yandex.
    app.import('vendor/yandex/yandex.maps.api.js');
    app.import(app.bowerDirectory + '/leaflet-plugins/layer/tile/Yandex.js');
  }
};
