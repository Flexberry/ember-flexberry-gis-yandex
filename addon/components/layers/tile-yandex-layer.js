/**
  @module ember-flexberry-gis-yandex
*/

import Ember from 'ember';
import BaseLayer from 'ember-flexberry-gis/components/base-layer';

/**
  Tile yandex layer component for leaflet map.

  @class TileYandexLayerComponent
  @extend BaseLayerComponent
 */
export default BaseLayer.extend({
  /**
    Languages supported by Yandex Maps JS API, which is necessary for Leaflet-Yandex plugin.

    @property _supportedLanguages
    @type String[]
    @default ['ru_RU', 'ru_UA', 'en_US', 'en_RU', 'uk_UA', 'tr_TR']
    @private
  */
  _supportedLanguages: Ember.A(['ru_RU', 'ru_UA', 'en_US', 'en_RU', 'uk_UA', 'tr_TR']),

  /**
    URL (formed with respect to current locale) to download Yandex Maps JS API script, which is necessary for Leaflet-Yandex plugin.

    @property _jsApiUrl
    @type String
    @private
  */
  _jsApiUrl: Ember.computed('jsApiUrl', 'detectLanguageAutomatically', '_supportedLanguages.[]', 'i18n.locale', function() {
    if (this.get('detectLanguageAutomatically')) {
      let locale = this.get('i18n.locale').toLowerCase();
      let language = this.get('_supportedLanguages').find((supportedLanguage) => {
        return supportedLanguage.toLowerCase().indexOf(locale) === 0;
      }) || 'en_US';

      return `${this.get('jsApiUrl')}?lang=${language}`;
    }

    return this.get('jsApiUrl');
  }),

  /**
    Map type.
    Possible values are: 'map', 'satellite', 'hybrid', 'publicMap', 'publicMapHybrid'.

    @property type
    @type String
    @default 'map'
  */
  type: 'map',

  /**
    URL to download Yandex Maps JS API script, which is necessary for Leaflet-Yandex plugin.

    @property jsApiUrl
    @type String
    @default 'https://api-maps.yandex.ru/2.1/'
  */
  jsApiUrl: 'https://api-maps.yandex.ru/2.1/',

  /**
    Flag: indicates whether it is necessary to to detect current language auomatically (tu use it as 'lang' parameter in URL).

    @property detectLanguageAutomatically
    @type Boolean
    @default true
  */
  detectLanguageAutomatically: true,

  /**
    Creates leaflet layer related to layer type.

    @method createLayer
    @private
  */
  _createLayer() {
    let layer = new L.Yandex(this.get('type'));

    layer.once('MapObjectInitialized', ({ mapObject }) => {
      // Disable some yandex map additional markup elements.
      mapObject.options.set('suppressMapOpenBlock', true);
      mapObject.options.set('suppressObsoleteBrowserNotifier', true);
    });

    return layer;
  },

  /**
    Creates leaflet layer related to layer type.

    @method createLayer
  */
  createLayer() {
    let jsApiUrl = this.get('_jsApiUrl');

    let jsApi = L.Yandex._jsApi;
    if (Ember.isNone(jsApi)) {
      L.Yandex._jsApi = jsApi = {};
    }

    let requestedJsApi = jsApi[jsApiUrl];
    if (Ember.isNone(requestedJsApi)) {
      jsApi[jsApiUrl] = requestedJsApi = {
        isAlreadyLoaded: false
      };
    }

    if (requestedJsApi.isAlreadyLoaded) {
      // Yandex Maps JS API is already loaded, so layer can be created synchronously.
      return this._createLayer();
    }

    return new Ember.RSVP.Promise((resolve, reject) => {
      // Try to load script containing Yandex Maps JS API.
      Ember.$.ajax({
        dataType: 'script',
        cache: true,
        url: jsApiUrl
      }).done((data, textStatus, jqXHR) => {
        // Yandex Maps JS API is successfully loaded.
        // Remember it to aviod Yandex Maps JS API re-download.
        requestedJsApi.isAlreadyLoaded = true;

        // Create layer & resolve promise.
        resolve(this._createLayer());
      }).fail((jqXHR, textStatus, errorThrown) => {
        // Yandex Maps JS API wasn't loaded, layer can't be created.
        reject(jqXHR.responseText);
      });
    });
  },

  /**
    Handles 'flexberry-map:identify' event of leaflet map.

    @method identify
    @param {Object} e Event object.
    @param {<a href="http://leafletjs.com/reference-1.0.0.html#latlngbounds">L.LatLngBounds</a>} options.boundingBox Bounds of identification area.
    @param {<a href="http://leafletjs.com/reference-1.0.0.html#latlng">L.LatLng</a>} e.latlng Center of the bounding box.
    @param {Object[]} layers Objects describing those layers which must be identified.
    @param {Object[]} results Objects describing identification results.
    Every result-object has the following structure: { layer: ..., features: [...] },
    where 'layer' is metadata of layer related to identification result, features is array
    containing (GeoJSON feature-objects)[http://geojson.org/geojson-spec.html#feature-objects]
    or a promise returning such array.
  */
  identify(e) {
    // Tile Yandex layer hasn't any identify logic.
  },

  /**
    Handles 'flexberry-map:search' event of leaflet map.

    @method search
    @param {Object} e Event object.
    @param {<a href="http://leafletjs.com/reference-1.0.0.html#latlng">L.LatLng</a>} e.latlng Center of the search area.
    @param {Object[]} layer Object describing layer that must be searched.
    @param {Object} searchOptions Search options related to layer type.
    @param {Object} results Hash containing search results.
    @param {Object[]} results.features Array containing (GeoJSON feature-objects)[http://geojson.org/geojson-spec.html#feature-objects]
    or a promise returning such array.
  */
  search(e) {
    // Tile Yandex layer hasn't any search logic.
  }
});
