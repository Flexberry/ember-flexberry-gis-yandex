"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/adapters/application', ['exports', 'ember-flexberry-data', 'dummy/config/environment'], function (exports, _emberFlexberryData, _dummyConfigEnvironment) {

  /**
    Application adapter.
  
    @class ApplicationAdapter
    @extends OdataAdapter
    @uses AdapterMixin
  */
  exports['default'] = _emberFlexberryData.Adapter.Odata.extend(_emberFlexberryData.Projection.AdapterMixin, {
    /**
      Host address to which all requests will be sent.
       @property host
      @type String
      @default config.APP.backendUrls.api
    */
    host: _dummyConfigEnvironment['default'].APP.backendUrls.api
  });
});
/**
  @module ember-flexberry-gis-dummy
*/
define('dummy/adapters/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/adapters/new-platform-flexberry-services-lock', 'dummy/config/environment'], function (exports, _emberFlexberryAdaptersNewPlatformFlexberryServicesLock, _dummyConfigEnvironment) {
  exports['default'] = _emberFlexberryAdaptersNewPlatformFlexberryServicesLock['default'].extend({
    /**
      @property host
      @type String
    */
    host: _dummyConfigEnvironment['default'].APP.backendUrls.api
  });
});
define('dummy/adapters/odata', ['exports', 'ember-flexberry-data/adapters/odata'], function (exports, _emberFlexberryDataAdaptersOdata) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataAdaptersOdata['default'];
    }
  });
});
define('dummy/adapters/offline', ['exports', 'ember-flexberry-data/adapters/offline'], function (exports, _emberFlexberryDataAdaptersOffline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataAdaptersOffline['default'];
    }
  });
});
define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/browserify', ['exports', 'npm:dexie', 'npm:node-uuid'], function (exports, _npmDexie, _npmNodeUuid) {});
// Requirement of ember-browserify.
// In order to use NPM pacakges inside the addon, we have to import
// them from somewhere in /app directory.
// See: https://github.com/ef4/ember-browserify#using-ember-browserify-in-addons
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/base-control', ['exports', 'ember-flexberry-gis/components/base-control'], function (exports, _emberFlexberryGisComponentsBaseControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsBaseControl['default'];
    }
  });
});
define('dummy/components/base-layer', ['exports', 'ember-flexberry-gis/components/base-layer'], function (exports, _emberFlexberryGisComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsBaseLayer['default'];
    }
  });
});
define('dummy/components/block-slot', ['exports', 'ember-block-slots/components/block-slot'], function (exports, _emberBlockSlotsComponentsBlockSlot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsComponentsBlockSlot['default'];
    }
  });
});
define('dummy/components/colsconfig-dialog-content', ['exports', 'ember-flexberry/components/colsconfig-dialog-content'], function (exports, _emberFlexberryComponentsColsconfigDialogContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsColsconfigDialogContent['default'];
    }
  });
});
define('dummy/components/div-control', ['exports', 'ember-flexberry-gis/components/div-control'], function (exports, _emberFlexberryGisComponentsDivControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsDivControl['default'];
    }
  });
});
define('dummy/components/feature-result-item', ['exports', 'ember-flexberry-gis/components/feature-result-item'], function (exports, _emberFlexberryGisComponentsFeatureResultItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFeatureResultItem['default'];
    }
  });
});
define('dummy/components/flexberry-button', ['exports', 'ember-flexberry-gis/components/flexberry-button'], function (exports, _emberFlexberryGisComponentsFlexberryButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryButton['default'];
    }
  });
});
define('dummy/components/flexberry-checkbox', ['exports', 'ember-flexberry/components/flexberry-checkbox'], function (exports, _emberFlexberryComponentsFlexberryCheckbox) {
  exports['default'] = _emberFlexberryComponentsFlexberryCheckbox['default'];
});
define('dummy/components/flexberry-colorpicker', ['exports', 'ember-flexberry-gis/components/flexberry-colorpicker'], function (exports, _emberFlexberryGisComponentsFlexberryColorpicker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryColorpicker['default'];
    }
  });
});
define('dummy/components/flexberry-csw', ['exports', 'ember-flexberry-gis/components/flexberry-csw'], function (exports, _emberFlexberryGisComponentsFlexberryCsw) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryCsw['default'];
    }
  });
});
define('dummy/components/flexberry-datepicker', ['exports', 'ember-flexberry/components/flexberry-datepicker'], function (exports, _emberFlexberryComponentsFlexberryDatepicker) {
  exports['default'] = _emberFlexberryComponentsFlexberryDatepicker['default'];
});
define('dummy/components/flexberry-ddau-checkbox', ['exports', 'ember-flexberry-gis/components/flexberry-ddau-checkbox'], function (exports, _emberFlexberryGisComponentsFlexberryDdauCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryDdauCheckbox['default'];
    }
  });
});
define('dummy/components/flexberry-ddau-slider', ['exports', 'ember-flexberry-gis/components/flexberry-ddau-slider'], function (exports, _emberFlexberryGisComponentsFlexberryDdauSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryDdauSlider['default'];
    }
  });
});
define('dummy/components/flexberry-dialog', ['exports', 'ember-flexberry-gis/components/flexberry-dialog'], function (exports, _emberFlexberryGisComponentsFlexberryDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryDialog['default'];
    }
  });
});
define('dummy/components/flexberry-dropdown', ['exports', 'ember-flexberry/components/flexberry-dropdown'], function (exports, _emberFlexberryComponentsFlexberryDropdown) {
  exports['default'] = _emberFlexberryComponentsFlexberryDropdown['default'];
});
define('dummy/components/flexberry-field', ['exports', 'ember-flexberry/components/flexberry-field'], function (exports, _emberFlexberryComponentsFlexberryField) {
  exports['default'] = _emberFlexberryComponentsFlexberryField['default'];
});
define('dummy/components/flexberry-file', ['exports', 'ember-flexberry/components/flexberry-file'], function (exports, _emberFlexberryComponentsFlexberryFile) {
  exports['default'] = _emberFlexberryComponentsFlexberryFile['default'];
});
define('dummy/components/flexberry-groupedit', ['exports', 'ember-flexberry/components/flexberry-groupedit'], function (exports, _emberFlexberryComponentsFlexberryGroupedit) {
  exports['default'] = _emberFlexberryComponentsFlexberryGroupedit['default'];
});
define('dummy/components/flexberry-icon', ['exports', 'ember-flexberry-gis/components/flexberry-icon'], function (exports, _emberFlexberryGisComponentsFlexberryIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryIcon['default'];
    }
  });
});
define('dummy/components/flexberry-identify-panel', ['exports', 'ember-flexberry-gis/components/flexberry-identify-panel'], function (exports, _emberFlexberryGisComponentsFlexberryIdentifyPanel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryIdentifyPanel['default'];
    }
  });
});
define('dummy/components/flexberry-jsonarea', ['exports', 'ember-flexberry-gis/components/flexberry-jsonarea'], function (exports, _emberFlexberryGisComponentsFlexberryJsonarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryJsonarea['default'];
    }
  });
});
define('dummy/components/flexberry-layers-dropdown', ['exports', 'ember-flexberry-gis/components/flexberry-layers-dropdown'], function (exports, _emberFlexberryGisComponentsFlexberryLayersDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryLayersDropdown['default'];
    }
  });
});
define('dummy/components/flexberry-layers', ['exports', 'ember-flexberry-gis/components/flexberry-layers'], function (exports, _emberFlexberryGisComponentsFlexberryLayers) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryLayers['default'];
    }
  });
});
define('dummy/components/flexberry-layerslegends', ['exports', 'ember-flexberry-gis/components/flexberry-layerslegends'], function (exports, _emberFlexberryGisComponentsFlexberryLayerslegends) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryLayerslegends['default'];
    }
  });
});
define('dummy/components/flexberry-lookup', ['exports', 'ember-flexberry/components/flexberry-lookup'], function (exports, _emberFlexberryComponentsFlexberryLookup) {
  exports['default'] = _emberFlexberryComponentsFlexberryLookup['default'];
});
define('dummy/components/flexberry-map', ['exports', 'ember-flexberry-gis/components/flexberry-map'], function (exports, _emberFlexberryGisComponentsFlexberryMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryMap['default'];
    }
  });
});
define('dummy/components/flexberry-maplayer', ['exports', 'ember-flexberry-gis/components/flexberry-maplayer'], function (exports, _emberFlexberryGisComponentsFlexberryMaplayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryMaplayer['default'];
    }
  });
});
define('dummy/components/flexberry-maplayers', ['exports', 'ember-flexberry-gis/components/flexberry-maplayers'], function (exports, _emberFlexberryGisComponentsFlexberryMaplayers) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryMaplayers['default'];
    }
  });
});
define('dummy/components/flexberry-maptoolbar', ['exports', 'ember-flexberry-gis/components/flexberry-maptoolbar'], function (exports, _emberFlexberryGisComponentsFlexberryMaptoolbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryMaptoolbar['default'];
    }
  });
});
define('dummy/components/flexberry-menu', ['exports', 'ember-flexberry/components/flexberry-menu'], function (exports, _emberFlexberryComponentsFlexberryMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsFlexberryMenu['default'];
    }
  });
});
define('dummy/components/flexberry-menuitem', ['exports', 'ember-flexberry/components/flexberry-menuitem'], function (exports, _emberFlexberryComponentsFlexberryMenuitem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsFlexberryMenuitem['default'];
    }
  });
});
define('dummy/components/flexberry-objectlistview', ['exports', 'ember-flexberry/components/flexberry-objectlistview'], function (exports, _emberFlexberryComponentsFlexberryObjectlistview) {
  exports['default'] = _emberFlexberryComponentsFlexberryObjectlistview['default'];
});
define('dummy/components/flexberry-search-panel', ['exports', 'ember-flexberry-gis/components/flexberry-search-panel'], function (exports, _emberFlexberryGisComponentsFlexberrySearchPanel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberrySearchPanel['default'];
    }
  });
});
define('dummy/components/flexberry-search', ['exports', 'ember-flexberry-gis/components/flexberry-search'], function (exports, _emberFlexberryGisComponentsFlexberrySearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberrySearch['default'];
    }
  });
});
define('dummy/components/flexberry-simpledatetime', ['exports', 'ember-flexberry/components/flexberry-simpledatetime'], function (exports, _emberFlexberryComponentsFlexberrySimpledatetime) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsFlexberrySimpledatetime['default'];
    }
  });
});
define('dummy/components/flexberry-tab-bar', ['exports', 'ember-flexberry-gis/components/flexberry-tab-bar'], function (exports, _emberFlexberryGisComponentsFlexberryTabBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryTabBar['default'];
    }
  });
});
define('dummy/components/flexberry-textarea', ['exports', 'ember-flexberry/components/flexberry-textarea'], function (exports, _emberFlexberryComponentsFlexberryTextarea) {
  exports['default'] = _emberFlexberryComponentsFlexberryTextarea['default'];
});
define('dummy/components/flexberry-textbox', ['exports', 'ember-flexberry/components/flexberry-textbox'], function (exports, _emberFlexberryComponentsFlexberryTextbox) {
  exports['default'] = _emberFlexberryComponentsFlexberryTextbox['default'];
});
define('dummy/components/flexberry-toggler', ['exports', 'ember-flexberry/components/flexberry-toggler'], function (exports, _emberFlexberryComponentsFlexberryToggler) {
  exports['default'] = _emberFlexberryComponentsFlexberryToggler['default'];
});
define('dummy/components/flexberry-tree', ['exports', 'ember-flexberry-gis/components/flexberry-tree'], function (exports, _emberFlexberryGisComponentsFlexberryTree) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryTree['default'];
    }
  });
});
define('dummy/components/flexberry-treenode', ['exports', 'ember-flexberry-gis/components/flexberry-treenode'], function (exports, _emberFlexberryGisComponentsFlexberryTreenode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsFlexberryTreenode['default'];
    }
  });
});
define('dummy/components/flexberry-validationmessage', ['exports', 'ember-flexberry/components/flexberry-validationmessage'], function (exports, _emberFlexberryComponentsFlexberryValidationmessage) {
  exports['default'] = _emberFlexberryComponentsFlexberryValidationmessage['default'];
});
define('dummy/components/flexberry-validationsummary', ['exports', 'ember-flexberry/components/flexberry-validationsummary'], function (exports, _emberFlexberryComponentsFlexberryValidationsummary) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsFlexberryValidationsummary['default'];
    }
  });
});
define('dummy/components/groupedit-toolbar', ['exports', 'ember-flexberry/components/groupedit-toolbar'], function (exports, _emberFlexberryComponentsGroupeditToolbar) {
  exports['default'] = _emberFlexberryComponentsGroupeditToolbar['default'];
});
define('dummy/components/history-control', ['exports', 'ember-flexberry-gis/components/history-control'], function (exports, _emberFlexberryGisComponentsHistoryControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsHistoryControl['default'];
    }
  });
});
define('dummy/components/layer-result-list', ['exports', 'ember-flexberry-gis/components/layer-result-list'], function (exports, _emberFlexberryGisComponentsLayerResultList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayerResultList['default'];
    }
  });
});
define('dummy/components/layers-dialogs/add', ['exports', 'ember-flexberry-gis/components/layers-dialogs/add'], function (exports, _emberFlexberryGisComponentsLayersDialogsAdd) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsAdd['default'];
    }
  });
});
define('dummy/components/layers-dialogs/edit', ['exports', 'ember-flexberry-gis/components/layers-dialogs/edit'], function (exports, _emberFlexberryGisComponentsLayersDialogsEdit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsEdit['default'];
    }
  });
});
define('dummy/components/layers-dialogs/remove', ['exports', 'ember-flexberry-gis/components/layers-dialogs/remove'], function (exports, _emberFlexberryGisComponentsLayersDialogsRemove) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsRemove['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/geocoder-osm-overpass', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsGeocoderOsmOverpass) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsGeocoderOsmOverpass['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/geocoder-osm-ru', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsGeocoderOsmRu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsGeocoderOsmRu['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/geocoder-yandex', ['exports', 'ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex'], function (exports, _emberFlexberryGisYandexComponentsLayersDialogsSettingsGeocoderYandex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexComponentsLayersDialogsSettingsGeocoderYandex['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/group', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/group'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsGroup['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/tile-yandex', ['exports', 'ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex'], function (exports, _emberFlexberryGisYandexComponentsLayersDialogsSettingsTileYandex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexComponentsLayersDialogsSettingsTileYandex['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/tile', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/tile'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsTile['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/wfs', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/wfs'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsWfs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsWfs['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/wms-single-tile', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsWmsSingleTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsWmsSingleTile['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/wms-wfs', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsWmsWfs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsWmsWfs['default'];
    }
  });
});
define('dummy/components/layers-dialogs/settings/wms', ['exports', 'ember-flexberry-gis/components/layers-dialogs/settings/wms'], function (exports, _emberFlexberryGisComponentsLayersDialogsSettingsWms) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersDialogsSettingsWms['default'];
    }
  });
});
define('dummy/components/layers/geocoder-base-layer', ['exports', 'ember-flexberry-gis/components/layers/geocoder-base-layer'], function (exports, _emberFlexberryGisComponentsLayersGeocoderBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersGeocoderBaseLayer['default'];
    }
  });
});
define('dummy/components/layers/geocoder-osm-overpass-layer', ['exports', 'ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer'], function (exports, _emberFlexberryGisComponentsLayersGeocoderOsmOverpassLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersGeocoderOsmOverpassLayer['default'];
    }
  });
});
define('dummy/components/layers/geocoder-osm-ru-layer', ['exports', 'ember-flexberry-gis/components/layers/geocoder-osm-ru-layer'], function (exports, _emberFlexberryGisComponentsLayersGeocoderOsmRuLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersGeocoderOsmRuLayer['default'];
    }
  });
});
define('dummy/components/layers/geocoder-yandex-layer', ['exports', 'ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer'], function (exports, _emberFlexberryGisYandexComponentsLayersGeocoderYandexLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexComponentsLayersGeocoderYandexLayer['default'];
    }
  });
});
define('dummy/components/layers/group-layer', ['exports', 'ember-flexberry-gis/components/layers/group-layer'], function (exports, _emberFlexberryGisComponentsLayersGroupLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersGroupLayer['default'];
    }
  });
});
define('dummy/components/layers/tile-layer', ['exports', 'ember-flexberry-gis/components/layers/tile-layer'], function (exports, _emberFlexberryGisComponentsLayersTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersTileLayer['default'];
    }
  });
});
define('dummy/components/layers/tile-yandex-layer', ['exports', 'ember-flexberry-gis-yandex/components/layers/tile-yandex-layer'], function (exports, _emberFlexberryGisYandexComponentsLayersTileYandexLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexComponentsLayersTileYandexLayer['default'];
    }
  });
});
define('dummy/components/layers/wfs-layer', ['exports', 'ember-flexberry-gis/components/layers/wfs-layer'], function (exports, _emberFlexberryGisComponentsLayersWfsLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersWfsLayer['default'];
    }
  });
});
define('dummy/components/layers/wms-layer', ['exports', 'ember-flexberry-gis/components/layers/wms-layer'], function (exports, _emberFlexberryGisComponentsLayersWmsLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersWmsLayer['default'];
    }
  });
});
define('dummy/components/layers/wms-single-tile-layer', ['exports', 'ember-flexberry-gis/components/layers/wms-single-tile-layer'], function (exports, _emberFlexberryGisComponentsLayersWmsSingleTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersWmsSingleTileLayer['default'];
    }
  });
});
define('dummy/components/layers/wms-wfs-layer', ['exports', 'ember-flexberry-gis/components/layers/wms-wfs-layer'], function (exports, _emberFlexberryGisComponentsLayersWmsWfsLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLayersWmsWfsLayer['default'];
    }
  });
});
define('dummy/components/legend-control', ['exports', 'ember-flexberry-gis/components/legend-control'], function (exports, _emberFlexberryGisComponentsLegendControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLegendControl['default'];
    }
  });
});
define('dummy/components/legends/wfs-legend', ['exports', 'ember-flexberry-gis/components/legends/wfs-legend'], function (exports, _emberFlexberryGisComponentsLegendsWfsLegend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLegendsWfsLegend['default'];
    }
  });
});
define('dummy/components/legends/wms-legend', ['exports', 'ember-flexberry-gis/components/legends/wms-legend'], function (exports, _emberFlexberryGisComponentsLegendsWmsLegend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLegendsWmsLegend['default'];
    }
  });
});
define('dummy/components/legends/wms-wfs-legend', ['exports', 'ember-flexberry-gis/components/legends/wms-wfs-legend'], function (exports, _emberFlexberryGisComponentsLegendsWmsWfsLegend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsLegendsWmsWfsLegend['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/export', ['exports', 'ember-flexberry-gis/components/map-commands-dialogs/export'], function (exports, _emberFlexberryGisComponentsMapCommandsDialogsExport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsDialogsExport['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/go-to', ['exports', 'ember-flexberry-gis/components/map-commands-dialogs/go-to'], function (exports, _emberFlexberryGisComponentsMapCommandsDialogsGoTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsDialogsGoTo['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/search-settings/geocoder-osm-ru', ['exports', 'ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru'], function (exports, _emberFlexberryGisComponentsMapCommandsDialogsSearchSettingsGeocoderOsmRu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsDialogsSearchSettingsGeocoderOsmRu['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/search-settings/geocoder-yandex', ['exports', 'ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex'], function (exports, _emberFlexberryGisYandexComponentsMapCommandsDialogsSearchSettingsGeocoderYandex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexComponentsMapCommandsDialogsSearchSettingsGeocoderYandex['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/search-settings/wfs', ['exports', 'ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs'], function (exports, _emberFlexberryGisComponentsMapCommandsDialogsSearchSettingsWfs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsDialogsSearchSettingsWfs['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/search-settings/wms-wfs', ['exports', 'ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs'], function (exports, _emberFlexberryGisComponentsMapCommandsDialogsSearchSettingsWmsWfs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsDialogsSearchSettingsWmsWfs['default'];
    }
  });
});
define('dummy/components/map-commands-dialogs/search', ['exports', 'ember-flexberry-gis/components/map-commands-dialogs/search'], function (exports, _emberFlexberryGisComponentsMapCommandsDialogsSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsDialogsSearch['default'];
    }
  });
});
define('dummy/components/map-commands/base', ['exports', 'ember-flexberry-gis/components/map-commands/base'], function (exports, _emberFlexberryGisComponentsMapCommandsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsBase['default'];
    }
  });
});
define('dummy/components/map-commands/export', ['exports', 'ember-flexberry-gis/components/map-commands/export'], function (exports, _emberFlexberryGisComponentsMapCommandsExport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsExport['default'];
    }
  });
});
define('dummy/components/map-commands/full-extent', ['exports', 'ember-flexberry-gis/components/map-commands/full-extent'], function (exports, _emberFlexberryGisComponentsMapCommandsFullExtent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsFullExtent['default'];
    }
  });
});
define('dummy/components/map-commands/go-to', ['exports', 'ember-flexberry-gis/components/map-commands/go-to'], function (exports, _emberFlexberryGisComponentsMapCommandsGoTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsGoTo['default'];
    }
  });
});
define('dummy/components/map-commands/search', ['exports', 'ember-flexberry-gis/components/map-commands/search'], function (exports, _emberFlexberryGisComponentsMapCommandsSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapCommandsSearch['default'];
    }
  });
});
define('dummy/components/map-tools/base', ['exports', 'ember-flexberry-gis/components/map-tools/base'], function (exports, _emberFlexberryGisComponentsMapToolsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsBase['default'];
    }
  });
});
define('dummy/components/map-tools/drag', ['exports', 'ember-flexberry-gis/components/map-tools/drag'], function (exports, _emberFlexberryGisComponentsMapToolsDrag) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsDrag['default'];
    }
  });
});
define('dummy/components/map-tools/draw', ['exports', 'ember-flexberry-gis/components/map-tools/draw'], function (exports, _emberFlexberryGisComponentsMapToolsDraw) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsDraw['default'];
    }
  });
});
define('dummy/components/map-tools/identify', ['exports', 'ember-flexberry-gis/components/map-tools/identify'], function (exports, _emberFlexberryGisComponentsMapToolsIdentify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsIdentify['default'];
    }
  });
});
define('dummy/components/map-tools/measure', ['exports', 'ember-flexberry-gis/components/map-tools/measure'], function (exports, _emberFlexberryGisComponentsMapToolsMeasure) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsMeasure['default'];
    }
  });
});
define('dummy/components/map-tools/zoom-in', ['exports', 'ember-flexberry-gis/components/map-tools/zoom-in'], function (exports, _emberFlexberryGisComponentsMapToolsZoomIn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsZoomIn['default'];
    }
  });
});
define('dummy/components/map-tools/zoom-out', ['exports', 'ember-flexberry-gis/components/map-tools/zoom-out'], function (exports, _emberFlexberryGisComponentsMapToolsZoomOut) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMapToolsZoomOut['default'];
    }
  });
});
define('dummy/components/minimap-control', ['exports', 'ember-flexberry-gis/components/minimap-control'], function (exports, _emberFlexberryGisComponentsMinimapControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsMinimapControl['default'];
    }
  });
});
define('dummy/components/mobile/flexberry-file', ['exports', 'ember-flexberry/components/mobile/flexberry-file'], function (exports, _emberFlexberryComponentsMobileFlexberryFile) {
  exports['default'] = _emberFlexberryComponentsMobileFlexberryFile['default'];
});
define('dummy/components/mobile/flexberry-groupedit', ['exports', 'ember-flexberry/components/mobile/flexberry-groupedit'], function (exports, _emberFlexberryComponentsMobileFlexberryGroupedit) {
  exports['default'] = _emberFlexberryComponentsMobileFlexberryGroupedit['default'];
});
define('dummy/components/mobile/flexberry-objectlistview', ['exports', 'ember-flexberry/components/mobile/flexberry-objectlistview'], function (exports, _emberFlexberryComponentsMobileFlexberryObjectlistview) {
  exports['default'] = _emberFlexberryComponentsMobileFlexberryObjectlistview['default'];
});
define('dummy/components/mobile/object-list-view-row', ['exports', 'ember-flexberry/components/mobile/object-list-view-row'], function (exports, _emberFlexberryComponentsMobileObjectListViewRow) {
  exports['default'] = _emberFlexberryComponentsMobileObjectListViewRow['default'];
});
define('dummy/components/modal-dialog', ['exports', 'ember-flexberry/components/modal-dialog'], function (exports, _emberFlexberryComponentsModalDialog) {
  exports['default'] = _emberFlexberryComponentsModalDialog['default'];
});
define('dummy/components/object-list-view-cell', ['exports', 'ember-flexberry/components/object-list-view-cell'], function (exports, _emberFlexberryComponentsObjectListViewCell) {
  exports['default'] = _emberFlexberryComponentsObjectListViewCell['default'];
});
define('dummy/components/object-list-view-header-cell', ['exports', 'ember-flexberry/components/object-list-view-header-cell'], function (exports, _emberFlexberryComponentsObjectListViewHeaderCell) {
  exports['default'] = _emberFlexberryComponentsObjectListViewHeaderCell['default'];
});
define('dummy/components/object-list-view-row', ['exports', 'ember-flexberry/components/object-list-view-row'], function (exports, _emberFlexberryComponentsObjectListViewRow) {
  exports['default'] = _emberFlexberryComponentsObjectListViewRow['default'];
});
define('dummy/components/object-list-view-single-column-cell', ['exports', 'ember-flexberry/components/object-list-view-single-column-cell'], function (exports, _emberFlexberryComponentsObjectListViewSingleColumnCell) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsObjectListViewSingleColumnCell['default'];
    }
  });
});
define('dummy/components/object-list-view', ['exports', 'ember-flexberry/components/object-list-view'], function (exports, _emberFlexberryComponentsObjectListView) {
  exports['default'] = _emberFlexberryComponentsObjectListView['default'];
});
define('dummy/components/olv-setconfigdialogbutton', ['exports', 'ember-flexberry/components/olv-setconfigdialogbutton'], function (exports, _emberFlexberryComponentsOlvSetconfigdialogbutton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryComponentsOlvSetconfigdialogbutton['default'];
    }
  });
});
define('dummy/components/olv-toolbar', ['exports', 'ember-flexberry/components/olv-toolbar'], function (exports, _emberFlexberryComponentsOlvToolbar) {
  exports['default'] = _emberFlexberryComponentsOlvToolbar['default'];
});
define('dummy/components/range-slider', ['exports', 'ui-slider/components/range-slider'], function (exports, _uiSliderComponentsRangeSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _uiSliderComponentsRangeSlider['default'];
    }
  });
});
define('dummy/components/scale-control', ['exports', 'ember-flexberry-gis/components/scale-control'], function (exports, _emberFlexberryGisComponentsScaleControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsScaleControl['default'];
    }
  });
});
define('dummy/components/spatial-bookmark', ['exports', 'ember-flexberry-gis/components/spatial-bookmark'], function (exports, _emberFlexberryGisComponentsSpatialBookmark) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsSpatialBookmark['default'];
    }
  });
});
define('dummy/components/switch-scale-control', ['exports', 'ember-flexberry-gis/components/switch-scale-control'], function (exports, _emberFlexberryGisComponentsSwitchScaleControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsSwitchScaleControl['default'];
    }
  });
});
define('dummy/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _semanticUiEmberComponentsUiAccordion) {
  exports['default'] = _semanticUiEmberComponentsUiAccordion['default'];
});
define('dummy/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _semanticUiEmberComponentsUiCheckbox) {
  exports['default'] = _semanticUiEmberComponentsUiCheckbox['default'];
});
define('dummy/components/ui-dropdown-item', ['exports', 'semantic-ui-ember/components/ui-dropdown-item'], function (exports, _semanticUiEmberComponentsUiDropdownItem) {
  exports['default'] = _semanticUiEmberComponentsUiDropdownItem['default'];
});
define('dummy/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _semanticUiEmberComponentsUiDropdown) {
  exports['default'] = _semanticUiEmberComponentsUiDropdown['default'];
});
define('dummy/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _semanticUiEmberComponentsUiEmbed) {
  exports['default'] = _semanticUiEmberComponentsUiEmbed['default'];
});
define('dummy/components/ui-message', ['exports', 'ember-flexberry/components/ui-message'], function (exports, _emberFlexberryComponentsUiMessage) {
  exports['default'] = _emberFlexberryComponentsUiMessage['default'];
});
define('dummy/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _semanticUiEmberComponentsUiModal) {
  exports['default'] = _semanticUiEmberComponentsUiModal['default'];
});
define('dummy/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _semanticUiEmberComponentsUiNag) {
  exports['default'] = _semanticUiEmberComponentsUiNag['default'];
});
define('dummy/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _semanticUiEmberComponentsUiPopup) {
  exports['default'] = _semanticUiEmberComponentsUiPopup['default'];
});
define('dummy/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _semanticUiEmberComponentsUiProgress) {
  exports['default'] = _semanticUiEmberComponentsUiProgress['default'];
});
define('dummy/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _semanticUiEmberComponentsUiRadio) {
  exports['default'] = _semanticUiEmberComponentsUiRadio['default'];
});
define('dummy/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _semanticUiEmberComponentsUiRating) {
  exports['default'] = _semanticUiEmberComponentsUiRating['default'];
});
define('dummy/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _semanticUiEmberComponentsUiSearch) {
  exports['default'] = _semanticUiEmberComponentsUiSearch['default'];
});
define('dummy/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _semanticUiEmberComponentsUiShape) {
  exports['default'] = _semanticUiEmberComponentsUiShape['default'];
});
define('dummy/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _semanticUiEmberComponentsUiSidebar) {
  exports['default'] = _semanticUiEmberComponentsUiSidebar['default'];
});
define('dummy/components/ui-slider', ['exports', 'ui-slider/components/ui-slider'], function (exports, _uiSliderComponentsUiSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _uiSliderComponentsUiSlider['default'];
    }
  });
});
define('dummy/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _semanticUiEmberComponentsUiSticky) {
  exports['default'] = _semanticUiEmberComponentsUiSticky['default'];
});
define('dummy/components/yield-slot', ['exports', 'ember-block-slots/components/yield-slot'], function (exports, _emberBlockSlotsComponentsYieldSlot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsComponentsYieldSlot['default'];
    }
  });
});
define('dummy/components/zoomslider-control', ['exports', 'ember-flexberry-gis/components/zoomslider-control'], function (exports, _emberFlexberryGisComponentsZoomsliderControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisComponentsZoomsliderControl['default'];
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var version = _dummyConfigEnvironment['default'].APP.version;

  /**
    Application controller.
  
    @class ApplicationController
    @extends <a href="http://emberjs.com/api/classes/Ember.Controller.html">Ember.Controller</a>
  */
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      /**
        Toggles application sitemap's side bar.
         @method actions.toggleSidebar
      */
      toggleSidebar: function toggleSidebar() {
        _ember['default'].$('.ui.sidebar').sidebar('toggle');
      }
    },

    /**
      Currernt addon version.
       @property addonVersion
      @type String
    */
    addonVersion: version,

    /**
      Link to GitHub commit related to current addon version.
       @property addonVersionHref
      @type String
    */
    addonVersionHref: _ember['default'].computed('addonVersion', function () {
      var addonVersion = this.get('addonVersion');
      var commitSha = addonVersion.split('+')[1];

      return 'https://github.com/Flexberry/ember-flexberry-gis-yandex/commit/' + commitSha;
    }),

    /**
      Flag: indicates whether current browser is internet explorer.
       @property browserIsInternetExplorer
      @type Boolean
    */
    browserIsInternetExplorer: _ember['default'].computed(function () {
      var userAgent = window.navigator.userAgent;

      return userAgent.indexOf('MSIE ') > 0 || userAgent.indexOf('Trident/') > 0 || userAgent.indexOf('Edge/') > 0;
    }),

    /**
      Locales supported by application.
       @property locales
      @type String[]
      @default ['ru', 'en']
    */
    locales: ['ru', 'en'],

    /**
      Initializes controller.
    */
    init: function init() {
      this._super.apply(this, arguments);

      var i18n = this.get('i18n');
      if (_ember['default'].isNone(i18n)) {
        return;
      }

      // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
      var shortCurrentLocale = this.get('i18n.locale').split('-')[0];
      var availableLocales = _ember['default'].A(this.get('locales'));

      // Force current locale to be one of available,
      // if browser's current language is not supported by dummy application,
      // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
      if (!availableLocales.contains(shortCurrentLocale)) {
        i18n.set('locale', 'en');
      } else {
        i18n.set('locale', shortCurrentLocale);
      }
    },

    /**
      Application sitemap.
       @property sitemap
      @type Object
    */
    sitemap: _ember['default'].computed('i18n.locale', function () {
      var i18n = this.get('i18n');

      return {
        nodes: [{
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.gis.caption'),
          title: i18n.t('forms.application.sitemap.gis.title'),
          children: [{
            link: 'map',
            caption: i18n.t('forms.application.sitemap.gis.map.caption'),
            title: i18n.t('forms.application.sitemap.gis.map.title'),
            children: null
          }]
        }]
      };
    })
  });
});
define('dummy/controllers/colsconfig-dialog', ['exports', 'ember-flexberry/controllers/colsconfig-dialog'], function (exports, _emberFlexberryControllersColsconfigDialog) {
  exports['default'] = _emberFlexberryControllersColsconfigDialog['default'];
});
define('dummy/controllers/detail-edit-form', ['exports', 'ember-flexberry/controllers/detail-edit-form'], function (exports, _emberFlexberryControllersDetailEditForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersDetailEditForm['default'];
    }
  });
});
define('dummy/controllers/edit-form', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _emberFlexberryControllersEditForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersEditForm['default'];
    }
  });
});
define('dummy/controllers/flexberry-file-view-dialog', ['exports', 'ember-flexberry/controllers/flexberry-file-view-dialog'], function (exports, _emberFlexberryControllersFlexberryFileViewDialog) {
  exports['default'] = _emberFlexberryControllersFlexberryFileViewDialog['default'];
});
define('dummy/controllers/i-i-s-caseberry-logging-objects-application-log-e', ['exports', 'ember-flexberry/controllers/i-i-s-caseberry-logging-objects-application-log-e'], function (exports, _emberFlexberryControllersIISCaseberryLoggingObjectsApplicationLogE) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersIISCaseberryLoggingObjectsApplicationLogE['default'];
    }
  });
});
define('dummy/controllers/i-i-s-caseberry-logging-objects-application-log-l', ['exports', 'ember-flexberry/controllers/i-i-s-caseberry-logging-objects-application-log-l'], function (exports, _emberFlexberryControllersIISCaseberryLoggingObjectsApplicationLogL) {
  /**
   * @module ember-flexberry
   */
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersIISCaseberryLoggingObjectsApplicationLogL['default'];
    }
  });
});
define('dummy/controllers/list-form', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _emberFlexberryControllersListForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersListForm['default'];
    }
  });
});
define('dummy/controllers/lookup-dialog', ['exports', 'ember-flexberry/controllers/lookup-dialog'], function (exports, _emberFlexberryControllersLookupDialog) {
  exports['default'] = _emberFlexberryControllersLookupDialog['default'];
});
define('dummy/controllers/map', ['exports', 'ember-flexberry-gis/controllers/edit-map'], function (exports, _emberFlexberryGisControllersEditMap) {

  /**
    Map controller.
  
    @class MapController
    @extends EditMapController
  */
  exports['default'] = _emberFlexberryGisControllersEditMap['default'].extend({
    /**
      Parent route.
       @property parentRoute
      @type String
      @default 'index'
    */
    parentRoute: 'index'
  });
});
/**
  @module ember-flexberry-gis-yandex-dummy
*/
define('dummy/controllers/new-platform-flexberry-services-lock-edit', ['exports', 'ember-flexberry/controllers/new-platform-flexberry-services-lock-edit'], function (exports, _emberFlexberryControllersNewPlatformFlexberryServicesLockEdit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersNewPlatformFlexberryServicesLockEdit['default'];
    }
  });
});
define('dummy/controllers/new-platform-flexberry-services-lock-list', ['exports', 'ember-flexberry/controllers/new-platform-flexberry-services-lock-list'], function (exports, _emberFlexberryControllersNewPlatformFlexberryServicesLockList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryControllersNewPlatformFlexberryServicesLockList['default'];
    }
  });
});
define('dummy/controllers/sitemap-node', ['exports', 'ember'], function (exports, _ember) {

  /**
    Controller for 'site-map-node' view from 'ember-flexberry' addon.
  
    @class SitemapNodeController
    @extends <a href="http://emberjs.com/api/classes/Ember.Controller.html">Ember.Controller</a>
  */
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      /**
         Hides application sitemap's side bar.
          @method actions.hideSidebar
       */
      hideSidebar: function hideSidebar() {
        _ember['default'].$('.ui.sidebar').sidebar('hide');
      }
    }
  });
});
define('dummy/coordinate-reference-systems/earth', ['exports', 'ember-flexberry-gis/coordinate-reference-systems/earth'], function (exports, _emberFlexberryGisCoordinateReferenceSystemsEarth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisCoordinateReferenceSystemsEarth['default'];
    }
  });
});
define('dummy/coordinate-reference-systems/epsg-3395', ['exports', 'ember-flexberry-gis/coordinate-reference-systems/epsg-3395'], function (exports, _emberFlexberryGisCoordinateReferenceSystemsEpsg3395) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisCoordinateReferenceSystemsEpsg3395['default'];
    }
  });
});
define('dummy/coordinate-reference-systems/epsg-3857', ['exports', 'ember-flexberry-gis/coordinate-reference-systems/epsg-3857'], function (exports, _emberFlexberryGisCoordinateReferenceSystemsEpsg3857) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisCoordinateReferenceSystemsEpsg3857['default'];
    }
  });
});
define('dummy/coordinate-reference-systems/epsg-4326', ['exports', 'ember-flexberry-gis/coordinate-reference-systems/epsg-4326'], function (exports, _emberFlexberryGisCoordinateReferenceSystemsEpsg4326) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisCoordinateReferenceSystemsEpsg4326['default'];
    }
  });
});
define('dummy/coordinate-reference-systems/proj4', ['exports', 'ember-flexberry-gis/coordinate-reference-systems/proj4'], function (exports, _emberFlexberryGisCoordinateReferenceSystemsProj4) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisCoordinateReferenceSystemsProj4['default'];
    }
  });
});
define('dummy/coordinate-reference-systems/simple', ['exports', 'ember-flexberry-gis/coordinate-reference-systems/simple'], function (exports, _emberFlexberryGisCoordinateReferenceSystemsSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisCoordinateReferenceSystemsSimple['default'];
    }
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/geocoder-yandex.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/components/layers-dialogs/settings/tile-yandex.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/components/layers');
  test('modules/ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/components/layers/geocoder-yandex-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers/tile-yandex-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/components/layers');
  test('modules/ember-flexberry-gis-yandex/components/layers/tile-yandex-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/components/layers/tile-yandex-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/layers/tile-yandex-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/components/layers/tile-yandex-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/components/layers/tile-yandex-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/components/map-commands-dialogs/search-settings/geocoder-yandex.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/layers/geocoder-yandex.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/layers');
  test('modules/ember-flexberry-gis-yandex/layers/geocoder-yandex.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/layers/geocoder-yandex.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/layers/geocoder-yandex.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/layers/geocoder-yandex.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/layers/geocoder-yandex.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/layers/tile-yandex.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/layers');
  test('modules/ember-flexberry-gis-yandex/layers/tile-yandex.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/layers/tile-yandex.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/layers/tile-yandex.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/layers/tile-yandex.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/layers/tile-yandex.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/locales/en/translations.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/locales/en');
  test('modules/ember-flexberry-gis-yandex/locales/en/translations.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/locales/en/translations.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/locales/en/translations.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/locales/en/translations.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/locales/ru/translations.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis-yandex/locales/ru');
  test('modules/ember-flexberry-gis-yandex/locales/ru/translations.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis-yandex/locales/ru/translations.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis-yandex/tests/modules/ember-flexberry-gis-yandex/locales/ru/translations.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis-yandex/locales/ru/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis-yandex/locales/ru/translations.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/base-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/base-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/base-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/base-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/base-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/base-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/base-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/base-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/base-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/base-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/base-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/base-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/div-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/div-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/div-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/div-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/div-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/div-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/feature-result-item.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/feature-result-item.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/feature-result-item.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/feature-result-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/feature-result-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/feature-result-item.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-button.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-button.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-button.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-button.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-button.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-colorpicker.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-colorpicker.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-colorpicker.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-colorpicker.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-colorpicker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-colorpicker.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-csw.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-csw.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-csw.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-csw.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-csw.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-csw.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-ddau-checkbox.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-ddau-checkbox.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-ddau-checkbox.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-ddau-checkbox.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-ddau-checkbox.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-ddau-checkbox.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-ddau-slider.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-ddau-slider.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-ddau-slider.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-ddau-slider.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-ddau-slider.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-ddau-slider.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-dialog.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-dialog.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-dialog.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-dialog.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-dialog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-dialog.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-icon.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-icon.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-icon.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-icon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-icon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-icon.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-identify-panel.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-identify-panel.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-identify-panel.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-identify-panel.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-identify-panel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-identify-panel.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-jsonarea.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-jsonarea.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-jsonarea.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-jsonarea.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-jsonarea.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-jsonarea.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-layers-dropdown.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-layers-dropdown.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-layers-dropdown.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-layers-dropdown.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-layers-dropdown.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-layers-dropdown.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-layers.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-layers.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-layers.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-layers.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-layers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-layers.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-layerslegends.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-layerslegends.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-layerslegends.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-layerslegends.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-layerslegends.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-layerslegends.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-maplayer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-maplayer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-maplayer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-maplayer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-maplayer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-maplayer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-maplayers.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-maplayers.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-maplayers.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-maplayers.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-maplayers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-maplayers.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-maptoolbar.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-maptoolbar.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-maptoolbar.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-maptoolbar.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-maptoolbar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-maptoolbar.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-search-panel.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-search-panel.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-search-panel.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-search-panel.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-search-panel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-search-panel.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-tab-bar.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-tab-bar.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-tab-bar.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-tab-bar.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-tab-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-tab-bar.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-tree.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-tree.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-tree.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-tree.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-tree.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-tree.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-treenode.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/flexberry-treenode.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/flexberry-treenode.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/flexberry-treenode.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/flexberry-treenode.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/flexberry-treenode.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/history-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/history-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/history-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/history-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/history-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/history-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layer-result-list.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/layer-result-list.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layer-result-list.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layer-result-list.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layer-result-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layer-result-list.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/add.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs');
  test('modules/ember-flexberry-gis/components/layers-dialogs/add.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/add.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/add.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/add.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/edit.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs');
  test('modules/ember-flexberry-gis/components/layers-dialogs/edit.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/edit.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/edit.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/edit.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/remove.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs');
  test('modules/ember-flexberry-gis/components/layers-dialogs/remove.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/remove.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/remove.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/remove.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/remove.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-overpass.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/geocoder-osm-ru.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/group.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/group.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/group.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/group.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/group.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/group.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/tile.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/tile.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/tile.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/tile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/tile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-single-tile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wms-wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wms.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/components/layers-dialogs/settings/wms.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wms.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers-dialogs/settings/wms.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers-dialogs/settings/wms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers-dialogs/settings/wms.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/geocoder-base-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/geocoder-base-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/geocoder-base-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/geocoder-base-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/geocoder-base-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/geocoder-base-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/geocoder-osm-overpass-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/geocoder-osm-ru-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/geocoder-osm-ru-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/geocoder-osm-ru-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/geocoder-osm-ru-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/geocoder-osm-ru-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/geocoder-osm-ru-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/group-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/group-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/group-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/group-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/group-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/group-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/tile-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/tile-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/tile-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/tile-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/tile-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/tile-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wfs-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/wfs-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/wfs-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wfs-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/wfs-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/wfs-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wms-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/wms-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/wms-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wms-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/wms-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/wms-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wms-single-tile-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/wms-single-tile-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/wms-single-tile-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wms-single-tile-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/wms-single-tile-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/wms-single-tile-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wms-wfs-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/layers');
  test('modules/ember-flexberry-gis/components/layers/wms-wfs-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/layers/wms-wfs-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/layers/wms-wfs-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/layers/wms-wfs-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/layers/wms-wfs-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legend-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/legend-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/legend-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legend-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/legend-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/legend-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/base-legend.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/legends');
  test('modules/ember-flexberry-gis/components/legends/base-legend.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/legends/base-legend.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/base-legend.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/legends/base-legend.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/legends/base-legend.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/wfs-legend.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/legends');
  test('modules/ember-flexberry-gis/components/legends/wfs-legend.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/legends/wfs-legend.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/wfs-legend.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/legends/wfs-legend.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/legends/wfs-legend.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/wms-legend.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/legends');
  test('modules/ember-flexberry-gis/components/legends/wms-legend.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/legends/wms-legend.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/wms-legend.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/legends/wms-legend.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/legends/wms-legend.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/wms-wfs-legend.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/legends');
  test('modules/ember-flexberry-gis/components/legends/wms-wfs-legend.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/legends/wms-wfs-legend.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/legends/wms-wfs-legend.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/legends/wms-wfs-legend.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/legends/wms-wfs-legend.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/export.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/components/map-commands-dialogs/export.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/export.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/export.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands-dialogs/export.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/export.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/go-to.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/components/map-commands-dialogs/go-to.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/go-to.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/go-to.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands-dialogs/go-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/go-to.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search-settings/wms-wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/components/map-commands-dialogs/search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands-dialogs/search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands-dialogs/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands-dialogs/search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/base.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands');
  test('modules/ember-flexberry-gis/components/map-commands/base.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands/base.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/base.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands/base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands/base.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/export.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands');
  test('modules/ember-flexberry-gis/components/map-commands/export.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands/export.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/export.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands/export.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands/export.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/full-extent.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands');
  test('modules/ember-flexberry-gis/components/map-commands/full-extent.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands/full-extent.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/full-extent.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands/full-extent.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands/full-extent.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/go-to.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands');
  test('modules/ember-flexberry-gis/components/map-commands/go-to.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands/go-to.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/go-to.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands/go-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands/go-to.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-commands');
  test('modules/ember-flexberry-gis/components/map-commands/search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-commands/search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-commands/search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-commands/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-commands/search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/base.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/base.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/base.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/base.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/base.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/drag.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/drag.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/drag.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/drag.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/drag.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/drag.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/draw.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/draw.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/draw.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/draw.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/draw.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/draw.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/identify.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/identify.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/identify.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/identify.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/identify.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/identify.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/measure.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/measure.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/measure.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/measure.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/measure.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/measure.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/zoom-in.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/zoom-in.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/zoom-in.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/zoom-in.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/zoom-in.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/zoom-in.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/zoom-out.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components/map-tools');
  test('modules/ember-flexberry-gis/components/map-tools/zoom-out.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/map-tools/zoom-out.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/map-tools/zoom-out.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/map-tools/zoom-out.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/map-tools/zoom-out.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/minimap-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/minimap-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/minimap-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/minimap-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/minimap-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/minimap-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/scale-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/scale-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/scale-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/scale-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/scale-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/scale-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/spatial-bookmark.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/spatial-bookmark.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/spatial-bookmark.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/spatial-bookmark.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/spatial-bookmark.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/spatial-bookmark.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/switch-scale-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/switch-scale-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/switch-scale-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/switch-scale-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/switch-scale-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/switch-scale-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/zoomslider-control.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/components');
  test('modules/ember-flexberry-gis/components/zoomslider-control.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/components/zoomslider-control.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/components/zoomslider-control.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/components/zoomslider-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/components/zoomslider-control.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/controllers/edit-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/controllers');
  test('modules/ember-flexberry-gis/controllers/edit-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/controllers/edit-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/controllers/edit-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/controllers/edit-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/controllers/edit-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/controllers/list-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/controllers');
  test('modules/ember-flexberry-gis/controllers/list-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/controllers/list-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/controllers/list-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/controllers/list-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/controllers/list-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/earth.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/coordinate-reference-systems');
  test('modules/ember-flexberry-gis/coordinate-reference-systems/earth.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/earth.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/earth.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/coordinate-reference-systems/earth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/earth.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3395.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/coordinate-reference-systems');
  test('modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3395.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3395.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3395.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3395.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3395.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3857.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/coordinate-reference-systems');
  test('modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3857.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3857.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3857.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3857.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/epsg-3857.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/epsg-4326.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/coordinate-reference-systems');
  test('modules/ember-flexberry-gis/coordinate-reference-systems/epsg-4326.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/epsg-4326.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/epsg-4326.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/coordinate-reference-systems/epsg-4326.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/epsg-4326.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/proj4.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/coordinate-reference-systems');
  test('modules/ember-flexberry-gis/coordinate-reference-systems/proj4.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/proj4.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/proj4.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/coordinate-reference-systems/proj4.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/proj4.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/simple.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/coordinate-reference-systems');
  test('modules/ember-flexberry-gis/coordinate-reference-systems/simple.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/simple.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/coordinate-reference-systems/simple.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/coordinate-reference-systems/simple.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/coordinate-reference-systems/simple.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/array-contains.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/helpers');
  test('modules/ember-flexberry-gis/helpers/array-contains.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/helpers/array-contains.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/array-contains.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/helpers/array-contains.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/helpers/array-contains.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/array.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/helpers');
  test('modules/ember-flexberry-gis/helpers/array.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/helpers/array.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/array.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/helpers/array.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/helpers/array.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/helpers');
  test('modules/ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/get-with-dynamic-actions.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/helpers');
  test('modules/ember-flexberry-gis/helpers/get-with-dynamic-actions.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/helpers/get-with-dynamic-actions.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/get-with-dynamic-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/helpers/get-with-dynamic-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/helpers/get-with-dynamic-actions.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/instance-of.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/helpers');
  test('modules/ember-flexberry-gis/helpers/instance-of.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/helpers/instance-of.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/instance-of.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/helpers/instance-of.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/helpers/instance-of.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/regex-test.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/helpers');
  test('modules/ember-flexberry-gis/helpers/regex-test.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/helpers/regex-test.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/helpers/regex-test.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/helpers/regex-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/helpers/regex-test.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/coordinate-reference-systems.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/coordinate-reference-systems.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/coordinate-reference-systems.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/coordinate-reference-systems.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/coordinate-reference-systems.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/coordinate-reference-systems.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/leaflet-editable-measures.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/leaflet-editable-measures.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/leaflet-editable-measures.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/leaflet-editable-measures.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/leaflet-editable-measures.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/leaflet-editable-measures.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/leaflet.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/leaflet.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/leaflet.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/leaflet.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/leaflet.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/leaflet.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/map-commands.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/map-commands.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/map-commands.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/map-commands.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/map-commands.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/map-commands.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/map-tools.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/map-tools.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/map-tools.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/map-tools.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/map-tools.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/map-tools.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/ows4js.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/ows4js.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/ows4js.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/ows4js.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/ows4js.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/ows4js.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/spatial-bookmark-storage.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/initializers');
  test('modules/ember-flexberry-gis/initializers/spatial-bookmark-storage.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/initializers/spatial-bookmark-storage.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/initializers/spatial-bookmark-storage.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/initializers/spatial-bookmark-storage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/initializers/spatial-bookmark-storage.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/block-slots.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/instance-initializers');
  test('modules/ember-flexberry-gis/instance-initializers/block-slots.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/instance-initializers/block-slots.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/block-slots.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/instance-initializers/block-slots.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/instance-initializers/block-slots.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/flexberry-search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/instance-initializers');
  test('modules/ember-flexberry-gis/instance-initializers/flexberry-search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/instance-initializers/flexberry-search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/flexberry-search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/instance-initializers/flexberry-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/instance-initializers/flexberry-search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/layers.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/instance-initializers');
  test('modules/ember-flexberry-gis/instance-initializers/layers.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/instance-initializers/layers.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/layers.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/instance-initializers/layers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/instance-initializers/layers.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/leaflet-editable-measures.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/instance-initializers');
  test('modules/ember-flexberry-gis/instance-initializers/leaflet-editable-measures.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/instance-initializers/leaflet-editable-measures.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/leaflet-editable-measures.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/instance-initializers/leaflet-editable-measures.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/instance-initializers/leaflet-editable-measures.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/owner.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/instance-initializers');
  test('modules/ember-flexberry-gis/instance-initializers/owner.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/instance-initializers/owner.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/instance-initializers/owner.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/instance-initializers/owner.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/instance-initializers/owner.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/-private/base.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers/-private');
  test('modules/ember-flexberry-gis/layers/-private/base.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/-private/base.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/-private/base.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/-private/base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/-private/base.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/geocoder-osm-overpass.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/geocoder-osm-overpass.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/geocoder-osm-overpass.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/geocoder-osm-overpass.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/geocoder-osm-overpass.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/geocoder-osm-overpass.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/geocoder-osm-ru.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/geocoder-osm-ru.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/geocoder-osm-ru.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/geocoder-osm-ru.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/geocoder-osm-ru.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/geocoder-osm-ru.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/group.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/group.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/group.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/group.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/group.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/group.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/tile.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/tile.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/tile.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/tile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/tile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wms-single-tile.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/wms-single-tile.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/wms-single-tile.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wms-single-tile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/wms-single-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/wms-single-tile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wms-wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/wms-wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/wms-wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wms-wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/wms-wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/wms-wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wms.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/layers');
  test('modules/ember-flexberry-gis/layers/wms.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/layers/wms.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/layers/wms.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/layers/wms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/layers/wms.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/feature-result-item.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/feature-result-item.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/feature-result-item.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/feature-result-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/feature-result-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/feature-result-item.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/flexberry-csw.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/flexberry-csw.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/flexberry-csw.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/flexberry-csw.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/flexberry-csw.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/flexberry-csw.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layer-result-list.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/layer-result-list.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layer-result-list.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layer-result-list.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layer-result-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layer-result-list.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/add.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs/add.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/add.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/add.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/add.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/edit.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs/edit.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/edit.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/edit.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/edit.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/remove.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs/remove.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/remove.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/remove.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/remove.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/remove.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wms.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wms.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wms.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wms.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/layers-dialogs/settings/wms.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/export.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/export.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/export.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/export.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/export.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/export.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/go-to.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/go-to.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/go-to.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/go-to.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/go-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/go-to.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/geocoder-osm-ru.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/geocoder-osm-ru.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search-settings/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands-dialogs/search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/map-commands.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-commands.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-commands.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-commands.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-tools.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/components');
  test('modules/ember-flexberry-gis/locales/en/components/map-tools.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-tools.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/components/map-tools.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/components/map-tools.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/components/map-tools.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-csw-connection.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-csw-connection.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-csw-connection.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-link.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-link.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-link.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-link.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-metadata.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-metadata.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-metadata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-link-parameter.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-link-parameter.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-link-parameter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-object-setting.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-object-setting.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-object-setting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en/models');
  test('modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/models/new-platform-flexberry-g-i-s-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/translations.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/en');
  test('modules/ember-flexberry-gis/locales/en/translations.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/en/translations.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/en/translations.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/en/translations.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/feature-result-item.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/feature-result-item.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/feature-result-item.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/feature-result-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/feature-result-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/feature-result-item.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/flexberry-csw.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/flexberry-csw.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/flexberry-csw.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/flexberry-csw.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/flexberry-csw.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/flexberry-csw.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layer-result-list.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/layer-result-list.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layer-result-list.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layer-result-list.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layer-result-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layer-result-list.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/add.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/add.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/add.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/add.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/add.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/edit.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/edit.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/edit.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/edit.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/edit.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/remove.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/remove.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/remove.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/remove.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/remove.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/remove.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wms.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings');
  test('modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wms.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wms.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wms.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/layers-dialogs/settings/wms.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/export.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/export.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/export.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/export.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/export.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/export.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/go-to.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/go-to.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/go-to.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/go-to.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/go-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/go-to.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/geocoder-osm-ru.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/geocoder-osm-ru.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/geocoder-osm-ru.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/wfs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/wfs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/wfs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/wfs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/wfs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search-settings/wfs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands-dialogs/search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/map-commands.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-commands.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-commands.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-commands.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-tools.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/components');
  test('modules/ember-flexberry-gis/locales/ru/components/map-tools.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-tools.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/components/map-tools.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/components/map-tools.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/components/map-tools.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-csw-connection.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-csw-connection.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-csw-connection.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-link.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-link.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-link.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-link.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-metadata.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-metadata.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-metadata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-link-parameter.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-link-parameter.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-link-parameter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-object-setting.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-object-setting.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-object-setting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru/models');
  test('modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/models/new-platform-flexberry-g-i-s-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/translations.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/locales/ru');
  test('modules/ember-flexberry-gis/locales/ru/translations.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/locales/ru/translations.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/locales/ru/translations.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/locales/ru/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/locales/ru/translations.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/base.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/base.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/base.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/base.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/base.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/export-download.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/export-download.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/export-download.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/export-download.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/export-download.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/export-download.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/export-print.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/export-print.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/export-print.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/export-print.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/export-print.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/export-print.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/export.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/export.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/export.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/export.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/export.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/export.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/full-extent.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/full-extent.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/full-extent.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/full-extent.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/full-extent.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/full-extent.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/go-to.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/go-to.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/go-to.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/go-to.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/go-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/go-to.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search-attributes.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/search-attributes.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/search-attributes.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search-attributes.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/search-attributes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/search-attributes.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search-clear.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/search-clear.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/search-clear.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search-clear.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/search-clear.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/search-clear.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search-show.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/search-show.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/search-show.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search-show.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/search-show.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/search-show.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-commands');
  test('modules/ember-flexberry-gis/map-commands/search.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-commands/search.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-commands/search.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-commands/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-commands/search.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/base.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/base.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/base.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/base.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/base.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/drag.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/drag.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/drag.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/drag.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/drag.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/drag.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-circle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw-circle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw-circle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-circle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw-circle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw-circle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-clear.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw-clear.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw-clear.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-clear.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw-clear.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw-clear.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-marker.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw-marker.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw-marker.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-marker.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw-marker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw-marker.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-polygon.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw-polygon.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw-polygon.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-polygon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw-polygon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw-polygon.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-polyline.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw-polyline.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw-polyline.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-polyline.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw-polyline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw-polyline.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-rectangle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw-rectangle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw-rectangle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw-rectangle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw-rectangle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw-rectangle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/draw.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/draw.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/draw.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/draw.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/draw.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-all-polygon.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-all-polygon.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-all-polygon.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-all-polygon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-all-polygon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-all-polygon.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-all-rectangle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-all-rectangle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-all-rectangle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-all-rectangle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-all-rectangle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-all-rectangle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-polygon.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-polygon.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-polygon.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-polygon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-polygon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-polygon.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-rectangle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-rectangle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-rectangle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-rectangle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-rectangle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-rectangle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-top-polygon.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-top-polygon.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-top-polygon.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-top-polygon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-top-polygon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-top-polygon.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-top-rectangle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-top-rectangle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-top-rectangle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-top-rectangle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-top-rectangle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-top-rectangle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-visible-polygon.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-visible-polygon.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-visible-polygon.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-visible-polygon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-visible-polygon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-visible-polygon.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-visible-rectangle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify-visible-rectangle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify-visible-rectangle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify-visible-rectangle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify-visible-rectangle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify-visible-rectangle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/identify.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/identify.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/identify.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/identify.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/identify.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-area.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/measure-area.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/measure-area.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-area.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/measure-area.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/measure-area.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-clear.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/measure-clear.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/measure-clear.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-clear.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/measure-clear.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/measure-clear.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-coordinates.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/measure-coordinates.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/measure-coordinates.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-coordinates.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/measure-coordinates.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/measure-coordinates.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-distance.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/measure-distance.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/measure-distance.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-distance.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/measure-distance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/measure-distance.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-radius.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/measure-radius.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/measure-radius.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure-radius.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/measure-radius.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/measure-radius.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/measure.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/measure.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/measure.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/measure.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/measure.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/rectangle.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/rectangle.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/rectangle.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/rectangle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/rectangle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/rectangle.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/zoom-in.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/zoom-in.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/zoom-in.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/zoom-in.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/zoom-in.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/zoom-in.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/zoom-out.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/map-tools');
  test('modules/ember-flexberry-gis/map-tools/zoom-out.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/map-tools/zoom-out.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/map-tools/zoom-out.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/map-tools/zoom-out.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/map-tools/zoom-out.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/dom-actions.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/dom-actions.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/dom-actions.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/dom-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/dom-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/dom-actions.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/dynamic-actions.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/dynamic-actions.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/dynamic-actions.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/dynamic-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/dynamic-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/dynamic-actions.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/dynamic-properties.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/dynamic-properties.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/dynamic-properties.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/dynamic-properties.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/dynamic-properties.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/dynamic-properties.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-ddau-checkbox-actions-handler.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/flexberry-ddau-checkbox-actions-handler.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-ddau-checkbox-actions-handler.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-ddau-checkbox-actions-handler.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/flexberry-ddau-checkbox-actions-handler.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-ddau-checkbox-actions-handler.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-ddau-slider-actions-handler.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/flexberry-ddau-slider-actions-handler.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-ddau-slider-actions-handler.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-ddau-slider-actions-handler.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/flexberry-ddau-slider-actions-handler.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-ddau-slider-actions-handler.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-map-actions-handler.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/flexberry-map-actions-handler.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-map-actions-handler.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-map-actions-handler.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/flexberry-map-actions-handler.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-map-actions-handler.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-maplayer-actions-handler.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/flexberry-maplayer-actions-handler.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-maplayer-actions-handler.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-maplayer-actions-handler.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/flexberry-maplayer-actions-handler.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-maplayer-actions-handler.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-treenode-actions-handler.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/flexberry-treenode-actions-handler.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-treenode-actions-handler.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/flexberry-treenode-actions-handler.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/flexberry-treenode-actions-handler.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/flexberry-treenode-actions-handler.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-crs.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/leaflet-crs.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-crs.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-crs.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/leaflet-crs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-crs.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-events.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/leaflet-events.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-events.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-events.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/leaflet-events.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-events.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-options.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/leaflet-options.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-options.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-options.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/leaflet-options.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-options.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-properties.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/leaflet-properties.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-properties.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/leaflet-properties.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/leaflet-properties.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/leaflet-properties.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-route-csw-loader.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/map-route-csw-loader.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/map-route-csw-loader.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-route-csw-loader.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/map-route-csw-loader.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/map-route-csw-loader.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-tools/identify-all.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/map-tools');
  test('modules/ember-flexberry-gis/mixins/map-tools/identify-all.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/map-tools/identify-all.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-tools/identify-all.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/map-tools/identify-all.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/map-tools/identify-all.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-tools/identify-top.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/map-tools');
  test('modules/ember-flexberry-gis/mixins/map-tools/identify-top.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/map-tools/identify-top.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-tools/identify-top.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/map-tools/identify-top.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/map-tools/identify-top.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-tools/identify-visible.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/map-tools');
  test('modules/ember-flexberry-gis/mixins/map-tools/identify-visible.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/map-tools/identify-visible.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/map-tools/identify-visible.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/map-tools/identify-visible.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/map-tools/identify-visible.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-csw-connection.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-csw-connection.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-csw-connection.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-link.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-link.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-link.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-link.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-metadata.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-metadata.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-metadata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-link-parameter.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-link-parameter.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-link-parameter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-object-setting.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-object-setting.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-object-setting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/models');
  test('modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/models/new-platform-flexberry-g-i-s-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-csw-connection.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-csw-connection.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-csw-connection.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-csw-connection.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-link.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-link.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-link.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-link.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-link.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-link.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-metadata.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-metadata.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-metadata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-layer-metadata.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-link-parameter.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-link-parameter.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-link-parameter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-link-parameter.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-object-setting.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-object-setting.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-object-setting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map-object-setting.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins/regenerated/serializers');
  test('modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/regenerated/serializers/new-platform-flexberry-g-i-s-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/required-actions.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/mixins');
  test('modules/ember-flexberry-gis/mixins/required-actions.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/mixins/required-actions.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/mixins/required-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/mixins/required-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/mixins/required-actions.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/models');
  test('modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/objects/dynamic-action.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/objects');
  test('modules/ember-flexberry-gis/objects/dynamic-action.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/objects/dynamic-action.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/objects/dynamic-action.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/objects/dynamic-action.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/objects/dynamic-action.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/objects/tree-node.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/objects');
  test('modules/ember-flexberry-gis/objects/tree-node.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/objects/tree-node.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/objects/tree-node.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/objects/tree-node.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/objects/tree-node.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/routes/edit-map-new.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/routes');
  test('modules/ember-flexberry-gis/routes/edit-map-new.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/routes/edit-map-new.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/routes/edit-map-new.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/routes/edit-map-new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/routes/edit-map-new.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/routes/edit-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/routes');
  test('modules/ember-flexberry-gis/routes/edit-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/routes/edit-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/routes/edit-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/routes/edit-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/routes/edit-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/routes/list-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/routes');
  test('modules/ember-flexberry-gis/routes/list-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/routes/list-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/routes/list-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/routes/list-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/routes/list-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/serializers');
  test('modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/services/spatial-bookmark-local-storage.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/services');
  test('modules/ember-flexberry-gis/services/spatial-bookmark-local-storage.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/services/spatial-bookmark-local-storage.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/services/spatial-bookmark-local-storage.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/services/spatial-bookmark-local-storage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/services/spatial-bookmark-local-storage.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/utils/extended-get.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/utils');
  test('modules/ember-flexberry-gis/utils/extended-get.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/utils/extended-get.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/utils/extended-get.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/utils/extended-get.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/utils/extended-get.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/utils/extended-set.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/utils');
  test('modules/ember-flexberry-gis/utils/extended-set.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/utils/extended-set.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/utils/extended-set.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/utils/extended-set.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/utils/extended-set.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/utils/string.jscs-test', ['exports'], function (exports) {
  module('JSCS - modules/ember-flexberry-gis/utils');
  test('modules/ember-flexberry-gis/utils/string.js should pass jscs', function () {
    ok(true, 'modules/ember-flexberry-gis/utils/string.js should pass jscs.');
  });
});
define('dummy/ember-flexberry-gis/tests/modules/ember-flexberry-gis/utils/string.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-gis/utils/string.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-gis/utils/string.js should pass jshint.');
  });
});
define('dummy/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant', ['exports', 'ember-flexberry-data/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant'], function (exports, _emberFlexberryDataEnumsICSSoftSTORMNETBusinessAuditObjectsTExecutionVariant) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataEnumsICSSoftSTORMNETBusinessAuditObjectsTExecutionVariant['default'];
    }
  });
});
define('dummy/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation', ['exports', 'ember-flexberry-data/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation'], function (exports, _emberFlexberryDataEnumsICSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataEnumsICSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation['default'];
    }
  });
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/array-contains', ['exports', 'ember-flexberry-gis/helpers/array-contains'], function (exports, _emberFlexberryGisHelpersArrayContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersArrayContains['default'];
    }
  });
});
define('dummy/helpers/array', ['exports', 'ember-flexberry-gis/helpers/array'], function (exports, _emberFlexberryGisHelpersArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersArray['default'];
    }
  });
});
define('dummy/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _emberPromiseHelpersHelpersAwait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersAwait['default'];
    }
  });
  Object.defineProperty(exports, 'await', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersAwait.await;
    }
  });
});
define('dummy/helpers/block-params', ['exports', 'ember-block-slots/helpers/block-params'], function (exports, _emberBlockSlotsHelpersBlockParams) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsHelpersBlockParams['default'];
    }
  });
  Object.defineProperty(exports, 'blockParams', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsHelpersBlockParams.blockParams;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/flexberry-enum', ['exports', 'ember-flexberry/helpers/flexberry-enum'], function (exports, _emberFlexberryHelpersFlexberryEnum) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryHelpersFlexberryEnum['default'];
    }
  });
});
define('dummy/helpers/flexberry-search-properties-osm-ru', ['exports', 'ember-flexberry-gis/helpers/flexberry-search-properties-osm-ru'], function (exports, _emberFlexberryGisHelpersFlexberrySearchPropertiesOsmRu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersFlexberrySearchPropertiesOsmRu['default'];
    }
  });
  Object.defineProperty(exports, 'flexberrySearchPropertiesOsmRu', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersFlexberrySearchPropertiesOsmRu.flexberrySearchPropertiesOsmRu;
    }
  });
});
define('dummy/helpers/get-with-dynamic-actions', ['exports', 'ember-flexberry-gis/helpers/get-with-dynamic-actions'], function (exports, _emberFlexberryGisHelpersGetWithDynamicActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersGetWithDynamicActions['default'];
    }
  });
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/instance-of', ['exports', 'ember-flexberry-gis/helpers/instance-of'], function (exports, _emberFlexberryGisHelpersInstanceOf) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersInstanceOf['default'];
    }
  });
  Object.defineProperty(exports, 'instanceOf', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersInstanceOf.instanceOf;
    }
  });
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _emberPromiseHelpersHelpersIsFulfilled) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsFulfilled['default'];
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsFulfilled.isFulfilled;
    }
  });
});
define('dummy/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _emberPromiseHelpersHelpersIsPending) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsPending['default'];
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsPending.isPending;
    }
  });
});
define('dummy/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _emberPromiseHelpersHelpersIsRejected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsRejected['default'];
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsRejected.isRejected;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
  Object.defineProperty(exports, 'momentCalendar', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar.momentCalendar;
    }
  });
});
define('dummy/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('dummy/helpers/moment-format', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_dummyConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('dummy/helpers/moment-from-now', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_dummyConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('dummy/helpers/moment-to-now', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_dummyConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _emberPromiseHelpersHelpersPromiseRejectedReason) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersPromiseRejectedReason['default'];
    }
  });
});
define('dummy/helpers/regex-test', ['exports', 'ember-flexberry-gis/helpers/regex-test'], function (exports, _emberFlexberryGisHelpersRegexTest) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisHelpersRegexTest['default'];
    }
  });
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('dummy/initializers/allow-link-action', ['exports', 'ember-link-action/initializers/allow-link-action'], function (exports, _emberLinkActionInitializersAllowLinkAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLinkActionInitializersAllowLinkAction['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLinkActionInitializersAllowLinkAction.initialize;
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/component-prop-types', ['exports', 'ember-prop-types/initializers/component-prop-types'], function (exports, _emberPropTypesInitializersComponentPropTypes) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPropTypesInitializersComponentPropTypes['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberPropTypesInitializersComponentPropTypes.initialize;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/coordinate-reference-systems', ['exports', 'ember-flexberry-gis/initializers/coordinate-reference-systems'], function (exports, _emberFlexberryGisInitializersCoordinateReferenceSystems) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersCoordinateReferenceSystems['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersCoordinateReferenceSystems.initialize;
    }
  });
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define("dummy/initializers/ember-i18n", ["exports", "dummy/instance-initializers/ember-i18n"], function (exports, _dummyInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _dummyInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _dummyInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/flexberry-enum', ['exports', 'ember-flexberry-data/initializers/flexberry-enum'], function (exports, _emberFlexberryDataInitializersFlexberryEnum) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataInitializersFlexberryEnum['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataInitializersFlexberryEnum.initialize;
    }
  });
});
define('dummy/initializers/i18n', ['exports', 'ember-flexberry/initializers/i18n'], function (exports, _emberFlexberryInitializersI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersI18n['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersI18n.initialize;
    }
  });
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/leaflet-editable-measures', ['exports', 'dummy/config/environment', 'ember-flexberry-gis/initializers/leaflet-editable-measures'], function (exports, _dummyConfigEnvironment, _emberFlexberryGisInitializersLeafletEditableMeasures) {

  // Override initializer to pass into it baseUrl from config/environment.js.
  var originalInitialize = _emberFlexberryGisInitializersLeafletEditableMeasures['default'].initialize;
  _emberFlexberryGisInitializersLeafletEditableMeasures['default'].initialize = function (application) {
    originalInitialize.call(this, application, Ember.get(_dummyConfigEnvironment['default'], 'baseURL'));
  };

  exports['default'] = _emberFlexberryGisInitializersLeafletEditableMeasures['default'];
});
define('dummy/initializers/leaflet', ['exports', 'dummy/config/environment', 'ember-flexberry-gis/initializers/leaflet'], function (exports, _dummyConfigEnvironment, _emberFlexberryGisInitializersLeaflet) {

  // Override initializer to pass into it baseUrl from config/environment.js.
  var originalInitialize = _emberFlexberryGisInitializersLeaflet['default'].initialize;
  _emberFlexberryGisInitializersLeaflet['default'].initialize = function (application) {
    originalInitialize.call(this, application, Ember.get(_dummyConfigEnvironment['default'], 'baseURL'));
  };

  exports['default'] = _emberFlexberryGisInitializersLeaflet['default'];
});
define('dummy/initializers/local-store', ['exports', 'ember-flexberry-data/initializers/local-store'], function (exports, _emberFlexberryDataInitializersLocalStore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataInitializersLocalStore['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataInitializersLocalStore.initialize;
    }
  });
});
define('dummy/initializers/log', ['exports', 'ember-flexberry/initializers/log'], function (exports, _emberFlexberryInitializersLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersLog['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersLog.initialize;
    }
  });
});
define('dummy/initializers/map-commands', ['exports', 'ember-flexberry-gis/initializers/map-commands'], function (exports, _emberFlexberryGisInitializersMapCommands) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersMapCommands['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersMapCommands.initialize;
    }
  });
});
define('dummy/initializers/map-tools', ['exports', 'ember-flexberry-gis/initializers/map-tools'], function (exports, _emberFlexberryGisInitializersMapTools) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersMapTools['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersMapTools.initialize;
    }
  });
});
define('dummy/initializers/moment', ['exports', 'ember-flexberry/initializers/moment'], function (exports, _emberFlexberryInitializersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersMoment['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersMoment.initialize;
    }
  });
});
define('dummy/initializers/offline-globals', ['exports', 'ember-flexberry-data/initializers/offline-globals'], function (exports, _emberFlexberryDataInitializersOfflineGlobals) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataInitializersOfflineGlobals['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataInitializersOfflineGlobals.initialize;
    }
  });
});
define('dummy/initializers/ows4js', ['exports', 'ember-flexberry-gis/initializers/ows4js'], function (exports, _emberFlexberryGisInitializersOws4js) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersOws4js['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersOws4js.initialize;
    }
  });
});
define('dummy/initializers/spatial-bookmark-storage', ['exports', 'ember-flexberry-gis/initializers/spatial-bookmark-storage'], function (exports, _emberFlexberryGisInitializersSpatialBookmarkStorage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersSpatialBookmarkStorage['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInitializersSpatialBookmarkStorage.initialize;
    }
  });
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/initializers/user-settings', ['exports', 'ember-flexberry/initializers/user-settings'], function (exports, _emberFlexberryInitializersUserSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersUserSettings['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInitializersUserSettings.initialize;
    }
  });
});
define('dummy/instance-initializers/block-slots', ['exports', 'ember-flexberry-gis/instance-initializers/block-slots'], function (exports, _emberFlexberryGisInstanceInitializersBlockSlots) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersBlockSlots['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersBlockSlots.initialize;
    }
  });
});
define('dummy/instance-initializers/device', ['exports', 'ember-flexberry/instance-initializers/device'], function (exports, _emberFlexberryInstanceInitializersDevice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersDevice['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersDevice.initialize;
    }
  });
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("dummy/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "dummy/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _dummyConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (_emberI18nLegacyHelper["default"] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new _emberI18nStream["default"](function () {
            return i18n.get('locale');
          });

          _ember["default"].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
        })();
      }
    }
  };
});
define('dummy/instance-initializers/flexberry-search', ['exports', 'ember-flexberry-gis/instance-initializers/flexberry-search'], function (exports, _emberFlexberryGisInstanceInitializersFlexberrySearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersFlexberrySearch['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersFlexberrySearch.initialize;
    }
  });
});
define('dummy/instance-initializers/i18n', ['exports', 'ember-flexberry/instance-initializers/moment'], function (exports, _emberFlexberryInstanceInitializersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersMoment['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersMoment.initialize;
    }
  });
});
define('dummy/instance-initializers/layers', ['exports', 'ember-flexberry-gis/instance-initializers/layers'], function (exports, _emberFlexberryGisInstanceInitializersLayers) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersLayers['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersLayers.initialize;
    }
  });
});
define('dummy/instance-initializers/leaflet-editable-measures', ['exports', 'ember-flexberry-gis/instance-initializers/leaflet-editable-measures'], function (exports, _emberFlexberryGisInstanceInitializersLeafletEditableMeasures) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersLeafletEditableMeasures['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersLeafletEditableMeasures.initialize;
    }
  });
});
define('dummy/instance-initializers/lock', ['exports', 'ember-flexberry/instance-initializers/lock'], function (exports, _emberFlexberryInstanceInitializersLock) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersLock['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersLock.initialize;
    }
  });
});
define('dummy/instance-initializers/log', ['exports', 'ember-flexberry/instance-initializers/log'], function (exports, _emberFlexberryInstanceInitializersLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersLog['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersLog.initialize;
    }
  });
});
define('dummy/instance-initializers/moment', ['exports', 'ember-flexberry/instance-initializers/i18n'], function (exports, _emberFlexberryInstanceInitializersI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersI18n['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryInstanceInitializersI18n.initialize;
    }
  });
});
define('dummy/instance-initializers/owner', ['exports', 'ember-flexberry-gis/instance-initializers/owner'], function (exports, _emberFlexberryGisInstanceInitializersOwner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersOwner['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisInstanceInitializersOwner.initialize;
    }
  });
});
define('dummy/layers/geocoder-osm-overpass', ['exports', 'ember-flexberry-gis/layers/geocoder-osm-overpass'], function (exports, _emberFlexberryGisLayersGeocoderOsmOverpass) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersGeocoderOsmOverpass['default'];
    }
  });
});
define('dummy/layers/geocoder-osm-ru', ['exports', 'ember-flexberry-gis/layers/geocoder-osm-ru'], function (exports, _emberFlexberryGisLayersGeocoderOsmRu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersGeocoderOsmRu['default'];
    }
  });
});
define('dummy/layers/geocoder-yandex', ['exports', 'ember-flexberry-gis-yandex/layers/geocoder-yandex'], function (exports, _emberFlexberryGisYandexLayersGeocoderYandex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexLayersGeocoderYandex['default'];
    }
  });
});
define('dummy/layers/group', ['exports', 'ember-flexberry-gis/layers/group'], function (exports, _emberFlexberryGisLayersGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersGroup['default'];
    }
  });
});
define('dummy/layers/tile-yandex', ['exports', 'ember-flexberry-gis-yandex/layers/tile-yandex'], function (exports, _emberFlexberryGisYandexLayersTileYandex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisYandexLayersTileYandex['default'];
    }
  });
});
define('dummy/layers/tile', ['exports', 'ember-flexberry-gis/layers/tile'], function (exports, _emberFlexberryGisLayersTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersTile['default'];
    }
  });
});
define('dummy/layers/wfs', ['exports', 'ember-flexberry-gis/layers/wfs'], function (exports, _emberFlexberryGisLayersWfs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersWfs['default'];
    }
  });
});
define('dummy/layers/wms-single-tile', ['exports', 'ember-flexberry-gis/layers/wms-single-tile'], function (exports, _emberFlexberryGisLayersWmsSingleTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersWmsSingleTile['default'];
    }
  });
});
define('dummy/layers/wms-wfs', ['exports', 'ember-flexberry-gis/layers/wms-wfs'], function (exports, _emberFlexberryGisLayersWmsWfs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersWmsWfs['default'];
    }
  });
});
define('dummy/layers/wms', ['exports', 'ember-flexberry-gis/layers/wms'], function (exports, _emberFlexberryGisLayersWms) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisLayersWms['default'];
    }
  });
});
define('dummy/locales/en/translations', ['exports', 'ember', 'ember-flexberry/locales/en/translations', 'ember-flexberry-gis/locales/en/translations', 'ember-flexberry-gis-yandex/locales/en/translations'], function (exports, _ember, _emberFlexberryLocalesEnTranslations, _emberFlexberryGisLocalesEnTranslations, _emberFlexberryGisYandexLocalesEnTranslations) {

  var translations = {};
  _ember['default'].$.extend(true, translations, _emberFlexberryLocalesEnTranslations['default'], _emberFlexberryGisLocalesEnTranslations['default'], _emberFlexberryGisYandexLocalesEnTranslations['default']);

  _ember['default'].$.extend(true, translations, {
    'application-name': 'Test stand for ember-flexberry-gis-yandex',

    'forms': {
      'loading': {
        'spinner-caption': 'Loading data, please wait...'
      },
      'index': {
        'greeting': 'Welcome to ember-flexberry-gis-yandex test stand!'
      },

      'application': {
        'header': {
          'menu': {
            'sitemap-button': {
              'caption': '',
              'title': 'Menu'
            },
            'user-settings-service-checkbox': {
              'caption': 'Use user settings service'
            },
            'language-dropdown': {
              'caption': 'Application language',
              'placeholder': 'Choose language'
            }
          }
        },

        'footer': {
          'application-name': 'Test stand for ember-flexberry-gis-yandex',
          'application-version': {
            'caption': 'Addon version {{version}}',
            'title': 'It is version of ember-flexberry-gis-yandex addon, which uses in this dummy application ' + '(npm version + commit sha). ' + 'Click to open commit on GitHub.'
          }
        },

        'sitemap': {
          'application-name': {
            'caption': 'Test stand for ember-flexberry-gis-yandex',
            'title': ''
          },
          'application-version': {
            'caption': 'Addon version {{version}}',
            'title': 'It is version of ember-flexberry-gis addon, which uses in this dummy application ' + '(npm version + commit sha). ' + 'Click to open commit on GitHub.'
          },
          'index': {
            'caption': 'Home',
            'title': ''
          },
          'gis': {
            'caption': 'GIS',
            'title': '',
            'map': {
              'caption': 'Map',
              'title': ''
            }
          }
        }
      },

      'map': {
        'caption': 'Map'
      }
    }
  });

  exports['default'] = translations;
});
define('dummy/locales/ru/translations', ['exports', 'ember', 'ember-flexberry/locales/ru/translations', 'ember-flexberry-gis/locales/ru/translations', 'ember-flexberry-gis-yandex/locales/ru/translations'], function (exports, _ember, _emberFlexberryLocalesRuTranslations, _emberFlexberryGisLocalesRuTranslations, _emberFlexberryGisYandexLocalesRuTranslations) {

  var translations = {};
  _ember['default'].$.extend(true, translations, _emberFlexberryLocalesRuTranslations['default'], _emberFlexberryGisLocalesRuTranslations['default'], _emberFlexberryGisYandexLocalesRuTranslations['default']);

  _ember['default'].$.extend(true, translations, {
    'application-name': 'Тестовый стенд ember-flexberry-gis-yandex',

    'forms': {
      'loading': {
        'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
      },
      'index': {
        'greeting': 'Добро пожаловать на тестовый стенд ember-flexberry-gis-yandex!'
      },

      'application': {
        'header': {
          'menu': {
            'sitemap-button': {
              'caption': '',
              'title': 'Меню'
            },
            'user-settings-service-checkbox': {
              'caption': 'Использовать сервис пользовательских настроек'
            },
            'language-dropdown': {
              'caption': 'Язык приложения',
              'placeholder': 'Выберете язык'
            }
          }
        },

        'footer': {
          'application-name': 'Тестовый стенд ember-flexberry-gis-yandex',
          'application-version': {
            'caption': 'Версия аддона {{version}}',
            'title': 'Это версия аддона ember-flexberry-gis-yandex, которая сейчас используется в этом тестовом приложении ' + '(версия npm-пакета + хэш коммита). ' + 'Кликните, чтобы перейти на GitHub.'
          }
        },

        'sitemap': {
          'application-name': {
            'caption': 'Тестовый стенд ember-flexberry-gis-yandex',
            'title': ''
          },
          'application-version': {
            'caption': 'Версия аддона {{version}}',
            'title': 'Это версия аддона ember-flexberry-gis-yandex, которая сейчас используется в этом тестовом приложении ' + '(версия npm-пакета + хэш коммита). ' + 'Кликните, чтобы перейти на GitHub.'
          },
          'index': {
            'caption': 'Главная',
            'title': ''
          },
          'gis': {
            'caption': 'ГИС',
            'title': '',
            'map': {
              'caption': 'Карта',
              'title': ''
            }
          }
        }
      },

      'map': {
        'caption': 'Карта'
      }
    }
  });

  exports['default'] = translations;
});
define('dummy/map-commands/base', ['exports', 'ember-flexberry-gis/map-commands/base'], function (exports, _emberFlexberryGisMapCommandsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsBase['default'];
    }
  });
});
define('dummy/map-commands/export-download', ['exports', 'ember-flexberry-gis/map-commands/export-download'], function (exports, _emberFlexberryGisMapCommandsExportDownload) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsExportDownload['default'];
    }
  });
});
define('dummy/map-commands/export-print', ['exports', 'ember-flexberry-gis/map-commands/export-print'], function (exports, _emberFlexberryGisMapCommandsExportPrint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsExportPrint['default'];
    }
  });
});
define('dummy/map-commands/export', ['exports', 'ember-flexberry-gis/map-commands/export'], function (exports, _emberFlexberryGisMapCommandsExport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsExport['default'];
    }
  });
});
define('dummy/map-commands/full-extent', ['exports', 'ember-flexberry-gis/map-commands/full-extent'], function (exports, _emberFlexberryGisMapCommandsFullExtent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsFullExtent['default'];
    }
  });
});
define('dummy/map-commands/go-to', ['exports', 'ember-flexberry-gis/map-commands/go-to'], function (exports, _emberFlexberryGisMapCommandsGoTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsGoTo['default'];
    }
  });
});
define('dummy/map-commands/search-attributes', ['exports', 'ember-flexberry-gis/map-commands/search-attributes'], function (exports, _emberFlexberryGisMapCommandsSearchAttributes) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsSearchAttributes['default'];
    }
  });
});
define('dummy/map-commands/search-clear', ['exports', 'ember-flexberry-gis/map-commands/search-clear'], function (exports, _emberFlexberryGisMapCommandsSearchClear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsSearchClear['default'];
    }
  });
});
define('dummy/map-commands/search-show', ['exports', 'ember-flexberry-gis/map-commands/search-show'], function (exports, _emberFlexberryGisMapCommandsSearchShow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsSearchShow['default'];
    }
  });
});
define('dummy/map-commands/search', ['exports', 'ember-flexberry-gis/map-commands/search'], function (exports, _emberFlexberryGisMapCommandsSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapCommandsSearch['default'];
    }
  });
});
define('dummy/map-tools/base', ['exports', 'ember-flexberry-gis/map-tools/base'], function (exports, _emberFlexberryGisMapToolsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsBase['default'];
    }
  });
});
define('dummy/map-tools/drag', ['exports', 'ember-flexberry-gis/map-tools/drag'], function (exports, _emberFlexberryGisMapToolsDrag) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrag['default'];
    }
  });
});
define('dummy/map-tools/draw-circle', ['exports', 'ember-flexberry-gis/map-tools/draw-circle'], function (exports, _emberFlexberryGisMapToolsDrawCircle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrawCircle['default'];
    }
  });
});
define('dummy/map-tools/draw-clear', ['exports', 'ember-flexberry-gis/map-tools/draw-clear'], function (exports, _emberFlexberryGisMapToolsDrawClear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrawClear['default'];
    }
  });
});
define('dummy/map-tools/draw-marker', ['exports', 'ember-flexberry-gis/map-tools/draw-marker'], function (exports, _emberFlexberryGisMapToolsDrawMarker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrawMarker['default'];
    }
  });
});
define('dummy/map-tools/draw-polygon', ['exports', 'ember-flexberry-gis/map-tools/draw-polygon'], function (exports, _emberFlexberryGisMapToolsDrawPolygon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrawPolygon['default'];
    }
  });
});
define('dummy/map-tools/draw-polyline', ['exports', 'ember-flexberry-gis/map-tools/draw-polyline'], function (exports, _emberFlexberryGisMapToolsDrawPolyline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrawPolyline['default'];
    }
  });
});
define('dummy/map-tools/draw-rectangle', ['exports', 'ember-flexberry-gis/map-tools/draw-rectangle'], function (exports, _emberFlexberryGisMapToolsDrawRectangle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDrawRectangle['default'];
    }
  });
});
define('dummy/map-tools/draw', ['exports', 'ember-flexberry-gis/map-tools/draw'], function (exports, _emberFlexberryGisMapToolsDraw) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsDraw['default'];
    }
  });
});
define('dummy/map-tools/identify-all-polygon', ['exports', 'ember-flexberry-gis/map-tools/identify-all-polygon'], function (exports, _emberFlexberryGisMapToolsIdentifyAllPolygon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentifyAllPolygon['default'];
    }
  });
});
define('dummy/map-tools/identify-all-rectangle', ['exports', 'ember-flexberry-gis/map-tools/identify-all-rectangle'], function (exports, _emberFlexberryGisMapToolsIdentifyAllRectangle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentifyAllRectangle['default'];
    }
  });
});
define('dummy/map-tools/identify-top-polygon', ['exports', 'ember-flexberry-gis/map-tools/identify-top-polygon'], function (exports, _emberFlexberryGisMapToolsIdentifyTopPolygon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentifyTopPolygon['default'];
    }
  });
});
define('dummy/map-tools/identify-top-rectangle', ['exports', 'ember-flexberry-gis/map-tools/identify-top-rectangle'], function (exports, _emberFlexberryGisMapToolsIdentifyTopRectangle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentifyTopRectangle['default'];
    }
  });
});
define('dummy/map-tools/identify-visible-polygon', ['exports', 'ember-flexberry-gis/map-tools/identify-visible-polygon'], function (exports, _emberFlexberryGisMapToolsIdentifyVisiblePolygon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentifyVisiblePolygon['default'];
    }
  });
});
define('dummy/map-tools/identify-visible-rectangle', ['exports', 'ember-flexberry-gis/map-tools/identify-visible-rectangle'], function (exports, _emberFlexberryGisMapToolsIdentifyVisibleRectangle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentifyVisibleRectangle['default'];
    }
  });
});
define('dummy/map-tools/identify', ['exports', 'ember-flexberry-gis/map-tools/identify'], function (exports, _emberFlexberryGisMapToolsIdentify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsIdentify['default'];
    }
  });
});
define('dummy/map-tools/measure-area', ['exports', 'ember-flexberry-gis/map-tools/measure-area'], function (exports, _emberFlexberryGisMapToolsMeasureArea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsMeasureArea['default'];
    }
  });
});
define('dummy/map-tools/measure-clear', ['exports', 'ember-flexberry-gis/map-tools/measure-clear'], function (exports, _emberFlexberryGisMapToolsMeasureClear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsMeasureClear['default'];
    }
  });
});
define('dummy/map-tools/measure-coordinates', ['exports', 'ember-flexberry-gis/map-tools/measure-coordinates'], function (exports, _emberFlexberryGisMapToolsMeasureCoordinates) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsMeasureCoordinates['default'];
    }
  });
});
define('dummy/map-tools/measure-distance', ['exports', 'ember-flexberry-gis/map-tools/measure-distance'], function (exports, _emberFlexberryGisMapToolsMeasureDistance) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsMeasureDistance['default'];
    }
  });
});
define('dummy/map-tools/measure-radius', ['exports', 'ember-flexberry-gis/map-tools/measure-radius'], function (exports, _emberFlexberryGisMapToolsMeasureRadius) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsMeasureRadius['default'];
    }
  });
});
define('dummy/map-tools/measure', ['exports', 'ember-flexberry-gis/map-tools/measure'], function (exports, _emberFlexberryGisMapToolsMeasure) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsMeasure['default'];
    }
  });
});
define('dummy/map-tools/rectangle', ['exports', 'ember-flexberry-gis/map-tools/rectangle'], function (exports, _emberFlexberryGisMapToolsRectangle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsRectangle['default'];
    }
  });
});
define('dummy/map-tools/zoom-in', ['exports', 'ember-flexberry-gis/map-tools/zoom-in'], function (exports, _emberFlexberryGisMapToolsZoomIn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsZoomIn['default'];
    }
  });
});
define('dummy/map-tools/zoom-out', ['exports', 'ember-flexberry-gis/map-tools/zoom-out'], function (exports, _emberFlexberryGisMapToolsZoomOut) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisMapToolsZoomOut['default'];
    }
  });
});
define('dummy/mixins/link-action', ['exports', 'ember-link-action/mixins/link-action'], function (exports, _emberLinkActionMixinsLinkAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLinkActionMixinsLinkAction['default'];
    }
  });
});
define('dummy/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'], function (exports, _emberFlexberryDataModelsICSSoftSTORMNETBusinessAuditObjectsAuditEntity) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsICSSoftSTORMNETBusinessAuditObjectsAuditEntity['default'];
    }
  });
});
define('dummy/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field'], function (exports, _emberFlexberryDataModelsICSSoftSTORMNETBusinessAuditObjectsAuditField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsICSSoftSTORMNETBusinessAuditObjectsAuditField['default'];
    }
  });
});
define('dummy/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'], function (exports, _emberFlexberryDataModelsICSSoftSTORMNETBusinessAuditObjectsObjectType) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsICSSoftSTORMNETBusinessAuditObjectsObjectType['default'];
    }
  });
});
define('dummy/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'], function (exports, _emberFlexberryDataModelsICSSoftSTORMNETSecurityAgent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsICSSoftSTORMNETSecurityAgent['default'];
    }
  });
});
define('dummy/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'], function (exports, _emberFlexberryDataModelsICSSoftSTORMNETSecurityLinkGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsICSSoftSTORMNETSecurityLinkGroup['default'];
    }
  });
});
define('dummy/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session'], function (exports, _emberFlexberryDataModelsICSSoftSTORMNETSecuritySession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsICSSoftSTORMNETSecuritySession['default'];
    }
  });
});
define('dummy/models/i-i-s-caseberry-logging-objects-application-log', ['exports', 'ember-flexberry/models/i-i-s-caseberry-logging-objects-application-log'], function (exports, _emberFlexberryModelsIISCaseberryLoggingObjectsApplicationLog) {
  /**
   * @module ember-flexberry
   */
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryModelsIISCaseberryLoggingObjectsApplicationLog['default'];
    }
  });
});
define('dummy/models/model', ['exports', 'ember-flexberry-data/models/model'], function (exports, _emberFlexberryDataModelsModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsModel['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-flexberry-user-setting', ['exports', 'ember-flexberry/models/new-platform-flexberry-flexberry-user-setting'], function (exports, _emberFlexberryModelsNewPlatformFlexberryFlexberryUserSetting) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryModelsNewPlatformFlexberryFlexberryUserSetting['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-csw-connection', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-csw-connection'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISCswConnection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISCswConnection['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-layer-link', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-link'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISLayerLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISLayerLink['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-layer-metadata', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-layer-metadata'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISLayerMetadata) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISLayerMetadata['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-link-parameter', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-link-parameter'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISLinkParameter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISLinkParameter['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-map-layer', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-layer'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISMapLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISMapLayer['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-map-object-setting', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map-object-setting'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISMapObjectSetting) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISMapObjectSetting['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-g-i-s-map', ['exports', 'ember-flexberry-gis/models/new-platform-flexberry-g-i-s-map'], function (exports, _emberFlexberryGisModelsNewPlatformFlexberryGISMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisModelsNewPlatformFlexberryGISMap['default'];
    }
  });
});
define('dummy/models/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/models/new-platform-flexberry-services-lock'], function (exports, _emberFlexberryModelsNewPlatformFlexberryServicesLock) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryModelsNewPlatformFlexberryServicesLock['default'];
    }
  });
});
define('dummy/models/offline-model', ['exports', 'ember-flexberry-data/models/offline-model'], function (exports, _emberFlexberryDataModelsOfflineModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataModelsOfflineModel['default'];
    }
  });
});
define('dummy/resolver', ['exports', 'ember-flexberry/resolver'], function (exports, _emberFlexberryResolver) {
  exports['default'] = _emberFlexberryResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    // Map route.
    this.route('map');
  });

  exports['default'] = Router;
});
define('dummy/routes/application', ['exports', 'ember', 'ember-flexberry/mixins/modal-application-route'], function (exports, _ember, _emberFlexberryMixinsModalApplicationRoute) {

  /**
    Application route.
  
    @class ApplicationRoute
    @extends ApplicationRoute
  */
  exports['default'] = _ember['default'].Route.extend(_emberFlexberryMixinsModalApplicationRoute['default'], {});
});
/**
  @module ember-flexberry-gis-dummy
*/
define('dummy/routes/edit-form', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _emberFlexberryRoutesEditForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryRoutesEditForm['default'];
    }
  });
});
define('dummy/routes/i-i-s-caseberry-logging-objects-application-log-e', ['exports', 'ember-flexberry/routes/i-i-s-caseberry-logging-objects-application-log-e'], function (exports, _emberFlexberryRoutesIISCaseberryLoggingObjectsApplicationLogE) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryRoutesIISCaseberryLoggingObjectsApplicationLogE['default'];
    }
  });
});
define('dummy/routes/i-i-s-caseberry-logging-objects-application-log-l', ['exports', 'ember-flexberry/routes/i-i-s-caseberry-logging-objects-application-log-l'], function (exports, _emberFlexberryRoutesIISCaseberryLoggingObjectsApplicationLogL) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryRoutesIISCaseberryLoggingObjectsApplicationLogL['default'];
    }
  });
});
define('dummy/routes/index', ['exports', 'ember'], function (exports, _ember) {

  /**
    Index route.
  
    @class IndexRoute
    @extends IndexRoute
  */
  exports['default'] = _ember['default'].Route.extend({});
});
/**
  @module ember-flexberry-gis-dummy
*/
define('dummy/routes/list-form', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _emberFlexberryRoutesListForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryRoutesListForm['default'];
    }
  });
});
define('dummy/routes/map', ['exports', 'ember', 'ember-flexberry-gis/routes/edit-map'], function (exports, _ember, _emberFlexberryGisRoutesEditMap) {

  /**
    Map edit route.
  
    @class MapRoute
    @extends EditMapRoute
  */
  exports['default'] = _emberFlexberryGisRoutesEditMap['default'].extend({
    model: function model() {
      var store = this.get('store');

      var rootLayer = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
        type: 'group'
      });

      var map = store.createRecord('new-platform-flexberry-g-i-s-map', {
        name: 'testMap',
        zoom: 14,
        'public': true,
        coordinateReferenceSystem: '{"code":"EPSG:4326"}',
        lat: 44.9392254340553,
        lng: 34.105339050293,
        rootLayer: rootLayer
      });

      var yandexGeocoderLayer = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
        parent: rootLayer,
        type: 'geocoder-yandex',
        name: 'Yandex geocoder layer',
        visibility: true,
        coordinateReferenceSystem: '{"code":"EPSG:4326"}',
        settings: '{"searchSettings":{"canBeSearched":true,' + '"featuresPropertiesSettings":{"displayPropertyIsCallback":false,"displayProperty":"text",' + '"excludedProperties":["description","text"],"localizedProperties":{"ru":{"name":"Имя",' + '"description":"Описание","text":"Текст","address":"Адрес","country":"Страна",' + '"administrativeArea":"Регион","subAdministrativeArea":"Район","locality":"Населенный пункт",' + '"premise":"Объект"},"en":{"name":"Name","description":"Description","text":"Text","address":"Address",' + '"country":"Country","administrativeArea":"Administrative area",' + '"subAdministrativeArea":"Subadministrative area","locality":"Locality","premise":"Premise"}}}},' + '"url":"https://geocode-maps.yandex.ru/1.x/"}',
        index: 0
      });

      var yandexTileLayerMap = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
        parent: rootLayer,
        type: 'tile-yandex',
        name: 'Yandex tile layer (map)',
        visibility: true,
        coordinateReferenceSystem: '{"code":"EPSG:4326"}',
        settings: '{"type":"map"}',
        index: 0
      });

      var yandexTileLayerSatellite = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
        parent: rootLayer,
        type: 'tile-yandex',
        name: 'Yandex tile layer (satellite)',
        visibility: true,
        coordinateReferenceSystem: '{"code":"EPSG:4326"}',
        settings: '{"type":"satellite"}',
        index: 0
      });

      var yandexTileLayerHybrid = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
        parent: rootLayer,
        type: 'tile-yandex',
        name: 'Yandex tile layer (hybrid)',
        visibility: true,
        coordinateReferenceSystem: '{"code":"EPSG:4326"}',
        settings: '{"type":"hybrid"}',
        index: 0
      });

      rootLayer.set('layers', _ember['default'].A([yandexGeocoderLayer, yandexTileLayerMap, yandexTileLayerSatellite, yandexTileLayerHybrid]));

      return map;
    }
  });
});
/**
  @module ember-flexberry-gis-yandex-dummy
*/
define('dummy/routes/new-platform-flexberry-services-lock-edit', ['exports', 'ember-flexberry/routes/new-platform-flexberry-services-lock-edit'], function (exports, _emberFlexberryRoutesNewPlatformFlexberryServicesLockEdit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryRoutesNewPlatformFlexberryServicesLockEdit['default'];
    }
  });
});
define('dummy/routes/new-platform-flexberry-services-lock-list', ['exports', 'ember-flexberry/routes/new-platform-flexberry-services-lock-list'], function (exports, _emberFlexberryRoutesNewPlatformFlexberryServicesLockList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryRoutesNewPlatformFlexberryServicesLockList['default'];
    }
  });
});
define('dummy/serializers/application', ['exports', 'ember-flexberry-data'], function (exports, _emberFlexberryData) {

  /**
    Application serializer.
  
    @class ApplicationSerializer
    @extends OdataSerializer
  */
  exports['default'] = _emberFlexberryData.Serializer.Odata.extend({});
});
/**
  @module ember-flexberry-gis-dummy
*/
define('dummy/serializers/base', ['exports', 'ember-flexberry-data/serializers/base'], function (exports, _emberFlexberryDataSerializersBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersBase['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-offline'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditEntityOffline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditEntityOffline['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditEntity) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditEntity['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field-offline'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditFieldOffline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditFieldOffline['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsAuditField['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type-offline'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsObjectTypeOffline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsObjectTypeOffline['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsObjectType) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETBusinessAuditObjectsObjectType['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent-offline'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETSecurityAgentOffline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETSecurityAgentOffline['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETSecurityAgent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETSecurityAgent['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETSecurityLinkGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETSecurityLinkGroup['default'];
    }
  });
});
define('dummy/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-session', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-session'], function (exports, _emberFlexberryDataSerializersICSSoftSTORMNETSecuritySession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersICSSoftSTORMNETSecuritySession['default'];
    }
  });
});
define('dummy/serializers/i-i-s-caseberry-logging-objects-application-log', ['exports', 'ember-flexberry/serializers/i-i-s-caseberry-logging-objects-application-log'], function (exports, _emberFlexberrySerializersIISCaseberryLoggingObjectsApplicationLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberrySerializersIISCaseberryLoggingObjectsApplicationLog['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-flexberry-user-setting', ['exports', 'ember-flexberry/serializers/new-platform-flexberry-flexberry-user-setting'], function (exports, _emberFlexberrySerializersNewPlatformFlexberryFlexberryUserSetting) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberrySerializersNewPlatformFlexberryFlexberryUserSetting['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-csw-connection', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-csw-connection'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISCswConnection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISCswConnection['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-layer-link', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-link'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISLayerLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISLayerLink['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-layer-metadata', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-layer-metadata'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISLayerMetadata) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISLayerMetadata['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-link-parameter', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-link-parameter'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISLinkParameter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISLinkParameter['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-map-layer', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-layer'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISMapLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISMapLayer['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-map-object-setting', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map-object-setting'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISMapObjectSetting) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISMapObjectSetting['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-g-i-s-map', ['exports', 'ember-flexberry-gis/serializers/new-platform-flexberry-g-i-s-map'], function (exports, _emberFlexberryGisSerializersNewPlatformFlexberryGISMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisSerializersNewPlatformFlexberryGISMap['default'];
    }
  });
});
define('dummy/serializers/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/serializers/new-platform-flexberry-services-lock'], function (exports, _emberFlexberrySerializersNewPlatformFlexberryServicesLock) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberrySerializersNewPlatformFlexberryServicesLock['default'];
    }
  });
});
define('dummy/serializers/odata', ['exports', 'ember-flexberry-data/serializers/odata'], function (exports, _emberFlexberryDataSerializersOdata) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersOdata['default'];
    }
  });
});
define('dummy/serializers/offline', ['exports', 'ember-flexberry-data/serializers/offline'], function (exports, _emberFlexberryDataSerializersOffline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataSerializersOffline['default'];
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/cols-config-menu', ['exports', 'ember-flexberry/services/cols-config-menu', 'dummy/config/environment'], function (exports, _emberFlexberryServicesColsConfigMenu, _dummyConfigEnvironment) {
  var environment = Ember.get(_dummyConfigEnvironment['default'], 'environment');
  _emberFlexberryServicesColsConfigMenu['default'].reopen({
    environment: environment
  });

  exports['default'] = _emberFlexberryServicesColsConfigMenu['default'];

  // export { default } from 'ember-flexberry/services/cols-config-menu';
});
define('dummy/services/detail-interaction', ['exports', 'ember-flexberry/services/detail-interaction'], function (exports, _emberFlexberryServicesDetailInteraction) {
  exports['default'] = _emberFlexberryServicesDetailInteraction['default'];
});
define('dummy/services/device', ['exports', 'ember-flexberry/services/device'], function (exports, _emberFlexberryServicesDevice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryServicesDevice['default'];
    }
  });
});
define('dummy/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('dummy/services/log', ['exports', 'ember', 'ember-flexberry/services/log', 'dummy/config/environment'], function (exports, _ember, _emberFlexberryServicesLog, _dummyConfigEnvironment) {

  var enabled = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.log.enabled');
  if (_ember['default'].typeOf(enabled) === 'boolean') {
    _emberFlexberryServicesLog['default'].reopen({
      enabled: enabled
    });
  }

  exports['default'] = _emberFlexberryServicesLog['default'];
});
define('dummy/services/moment', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_dummyConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('dummy/services/objectlistview-events', ['exports', 'ember-flexberry/services/objectlistview-events'], function (exports, _emberFlexberryServicesObjectlistviewEvents) {
  exports['default'] = _emberFlexberryServicesObjectlistviewEvents['default'];
});
define('dummy/services/offline-globals', ['exports', 'ember-flexberry-data/services/offline-globals'], function (exports, _emberFlexberryDataServicesOfflineGlobals) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataServicesOfflineGlobals['default'];
    }
  });
});
define('dummy/services/spatial-bookmark-local-storage', ['exports', 'ember-flexberry-gis/services/spatial-bookmark-local-storage'], function (exports, _emberFlexberryGisServicesSpatialBookmarkLocalStorage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryGisServicesSpatialBookmarkLocalStorage['default'];
    }
  });
});
define('dummy/services/store', ['exports', 'ember-data', 'ember-flexberry-data'], function (exports, _emberData, _emberFlexberryData) {

  /**
    Application store.
  
    @class Store
    @extends <a href="http://emberjs.com/api/data/classes/DS.Store.html">DS.Store</a>
    @uses StoreMixin
  */
  exports['default'] = _emberData['default'].Store.reopen(_emberFlexberryData.Projection.StoreMixin);
});
/**
  @module ember-flexberry-gis-dummy
*/
define('dummy/services/syncer', ['exports', 'ember-flexberry-data/services/syncer'], function (exports, _emberFlexberryDataServicesSyncer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataServicesSyncer['default'];
    }
  });
});
define('dummy/services/user-settings', ['exports', 'ember', 'ember-flexberry/services/user-settings', 'dummy/config/environment'], function (exports, _ember, _emberFlexberryServicesUserSettings, _dummyConfigEnvironment) {

  var enabled = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.useUserSettingsService');
  var appName = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.name');
  if (_ember['default'].typeOf(enabled) === 'boolean') {
    _emberFlexberryServicesUserSettings['default'].reopen({
      isUserSettingsServiceEnabled: enabled,
      appName: appName
    });
  }

  exports['default'] = _emberFlexberryServicesUserSettings['default'];
});
define('dummy/services/user', ['exports', 'ember-flexberry-data/services/user'], function (exports, _emberFlexberryDataServicesUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataServicesUser['default'];
    }
  });
});
define('dummy/services/validations', ['exports', 'ember'], function (exports, _ember) {

  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "item");
          dom.setAttribute(el1, "href", "https://github.com/flexberry");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "class", "ui centered image");
          dom.setAttribute(el2, "src", "assets/images/flexberry-logo.png");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "item");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(fragment, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element2, 'title');
          morphs[1] = dom.createAttrMorph(element3, 'href');
          morphs[2] = dom.createAttrMorph(element3, 'title');
          morphs[3] = dom.createMorphAt(element3, 1, 1);
          morphs[4] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "title", ["subexpr", "t", ["forms.application.sitemap.application-name.title"], [], ["loc", [null, [5, 11], [5, 67]]]]], ["attribute", "href", ["get", "addonVersionHref", ["loc", [null, [9, 12], [9, 28]]]]], ["attribute", "title", ["subexpr", "t", ["forms.application.sitemap.application-version.title"], [], ["loc", [null, [11, 11], [11, 70]]]]], ["inline", "t", ["forms.application.sitemap.application-version.caption"], ["version", ["subexpr", "@mut", [["get", "addonVersion", ["loc", [null, [12, 72], [12, 84]]]]], [], []]], ["loc", [null, [12, 4], [12, 86]]]], ["inline", "render", ["sitemap", ["get", "sitemap", ["loc", [null, [14, 21], [14, 28]]]]], [], ["loc", [null, [14, 2], [14, 30]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 16
              },
              "end": {
                "line": 47,
                "column": 16
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'value');
            morphs[1] = dom.createAttrMorph(element0, 'selected');
            morphs[2] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "locale", ["loc", [null, [44, 34], [44, 40]]]]], ["attribute", "selected", ["subexpr", "eq", [["subexpr", "get", [["get", "i18n", ["loc", [null, [44, 62], [44, 66]]]], "locale"], [], ["loc", [null, [44, 57], [44, 76]]]], ["get", "locale", ["loc", [null, [44, 77], [44, 83]]]]], [], ["loc", [null, [44, 52], [44, 85]]]]], ["content", "locale", ["loc", [null, [45, 20], [45, 30]]]]],
          locals: ["locale"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 12
            },
            "end": {
              "line": 49,
              "column": 12
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("select");
          dom.setAttribute(el1, "class", "ui dropdown");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("              ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'onchange');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["subexpr", "get", [["get", "i18n", ["loc", [null, [42, 70], [42, 74]]]], "locale"], [], ["loc", [null, [42, 65], [42, 84]]]]], [], ["loc", [null, [42, 60], [42, 85]]]]], ["value", "target.value"], ["loc", [null, [42, 51], [42, 108]]]]], ["block", "each", [["get", "locales", ["loc", [null, [43, 24], [43, 31]]]]], [], 0, null, ["loc", [null, [43, 16], [47, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 12
            },
            "end": {
              "line": 56,
              "column": 12
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "flexberry-dropdown", [], ["class", "compact", "items", ["subexpr", "@mut", [["get", "locales", ["loc", [null, [52, 22], [52, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "i18n.locale", ["loc", [null, [53, 22], [53, 33]]]]], [], []], "placeholder", ["subexpr", "t", ["forms.application.header.menu.language-dropdown.placeholder"], [], ["loc", [null, [54, 28], [54, 93]]]]], ["loc", [null, [50, 14], [55, 16]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 89,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "example");
        dom.setAttribute(el1, "class", "pusher");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "full height");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui top attached");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui attached menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui container");
        var el6 = dom.createTextNode("          \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "launch icon item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "sidebar icon");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "right item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7, "style", "margin-right: 5px;");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7, "style", "margin-right: 5px;");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flexberry-content ui attached segment");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui main container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "stackable grid container");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui vertical footer segment");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui text menu");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "brand item");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "right menu");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "item");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element5, [1, 1, 1]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3]);
        var element9 = dom.childAt(element6, [5]);
        var element10 = dom.childAt(element5, [3, 1, 1]);
        var element11 = dom.childAt(element4, [3, 1, 1]);
        var element12 = dom.childAt(element11, [3, 1]);
        var morphs = new Array(14);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element7, 'title');
        morphs[2] = dom.createElementMorph(element7);
        morphs[3] = dom.createMorphAt(element7, 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
        morphs[5] = dom.createMorphAt(element8, 3, 3);
        morphs[6] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
        morphs[7] = dom.createMorphAt(element9, 3, 3);
        morphs[8] = dom.createMorphAt(element10, 1, 1);
        morphs[9] = dom.createMorphAt(element10, 3, 3);
        morphs[10] = dom.createMorphAt(dom.childAt(element11, [1]), 1, 1);
        morphs[11] = dom.createAttrMorph(element12, 'href');
        morphs[12] = dom.createAttrMorph(element12, 'title');
        morphs[13] = dom.createMorphAt(element12, 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "ui-sidebar", [], ["class", "inverted vertical menu", "dimPage", false], 0, null, ["loc", [null, [1, 0], [15, 15]]]], ["attribute", "title", ["subexpr", "t", ["forms.application.header.menu.sitemap-button.title"], [], ["loc", [null, [23, 19], [23, 77]]]]], ["element", "action", ["toggleSidebar"], [], ["loc", [null, [21, 13], [21, 39]]]], ["inline", "t", ["forms.application.header.menu.sitemap-button.caption"], [], ["loc", [null, [24, 12], [24, 72]]]], ["inline", "t", ["forms.application.header.menu.user-settings-service-checkbox.caption"], [], ["loc", [null, [29, 14], [29, 90]]]], ["inline", "flexberry-checkbox", [], ["class", "toggle", "value", ["subexpr", "@mut", [["get", "userSettingsService.isUserSettingsServiceEnabled", ["loc", [null, [33, 20], [33, 68]]]]], [], []]], ["loc", [null, [31, 12], [34, 14]]]], ["inline", "t", ["forms.application.header.menu.language-dropdown.caption"], [], ["loc", [null, [38, 14], [38, 77]]]], ["block", "if", [["get", "browserIsInternetExplorer", ["loc", [null, [41, 18], [41, 43]]]]], [], 1, 2, ["loc", [null, [41, 12], [56, 19]]]], ["content", "outlet", ["loc", [null, [64, 12], [64, 22]]]], ["inline", "outlet", ["modal"], [], ["loc", [null, [65, 12], [65, 30]]]], ["inline", "t", ["forms.application.footer.application-name"], [], ["loc", [null, [74, 8], [74, 57]]]], ["attribute", "href", ["get", "addonVersionHref", ["loc", [null, [78, 20], [78, 36]]]]], ["attribute", "title", ["subexpr", "t", ["forms.application.footer.application-version.title"], [], ["loc", [null, [80, 19], [80, 77]]]]], ["inline", "t", ["forms.application.footer.application-version.caption"], ["version", ["subexpr", "@mut", [["get", "addonVersion", ["loc", [null, [82, 79], [82, 91]]]]], [], []]], ["loc", [null, [82, 12], [82, 93]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/colsconfig-dialog-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/colsconfig-dialog-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "colsconfig-dialog-content", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "close", "sortByColumnsConfig"], ["loc", [null, [1, 0], [4, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/colsconfig-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/colsconfig-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "outlet", ["modal-content"], [], ["loc", [null, [9, 2], [9, 28]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/colsconfig-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "sizeClass", "small", "close", "removeModalDialog", "created", "createdModalDialog", "useOkButton", false, "useCloseButton", false], 0, null, ["loc", [null, [1, 0], [10, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/colsconfig-dialog-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 48,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/colsconfig-dialog-content.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "colsConfigHidden", "false");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "ui icon tiny button");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "chevron up icon");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "ui icon tiny button no-margin");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "chevron down icon");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("select");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("option");
          dom.setAttribute(el4, "value", "0");
          var el5 = dom.createTextNode("-");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("option");
          dom.setAttribute(el4, "value", "1");
          var el5 = dom.createTextNode("▲");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("option");
          dom.setAttribute(el4, "value", "-1");
          var el5 = dom.createTextNode("▼");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("input");
          dom.setAttribute(el4, "size", "2");
          dom.setAttribute(el4, "type", "input");
          dom.setAttribute(el4, "style", "");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("input");
          dom.setAttribute(el4, "size", "2");
          dom.setAttribute(el4, "class", "columnWidth");
          dom.setAttribute(el4, "type", "input");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [0, 0]);
          var element2 = dom.childAt(element0, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element2, [2]);
          var element5 = dom.childAt(element0, [2]);
          var element6 = dom.childAt(element0, [3, 0]);
          var element7 = dom.childAt(element6, [1]);
          var element8 = dom.childAt(element6, [3]);
          var element9 = dom.childAt(element6, [5]);
          var element10 = dom.childAt(element0, [4]);
          var element11 = dom.childAt(element10, [1]);
          var element12 = dom.childAt(element11, [1]);
          var element13 = dom.childAt(element0, [5]);
          var element14 = dom.childAt(element13, [1]);
          var element15 = dom.childAt(element14, [1]);
          var morphs = new Array(32);
          morphs[0] = dom.createAttrMorph(element0, 'id');
          morphs[1] = dom.createAttrMorph(element0, 'propName');
          morphs[2] = dom.createAttrMorph(element1, 'id');
          morphs[3] = dom.createAttrMorph(element1, 'class');
          morphs[4] = dom.createElementMorph(element1);
          morphs[5] = dom.createAttrMorph(element2, 'class');
          morphs[6] = dom.createAttrMorph(element3, 'id');
          morphs[7] = dom.createElementMorph(element3);
          morphs[8] = dom.createAttrMorph(element4, 'id');
          morphs[9] = dom.createElementMorph(element4);
          morphs[10] = dom.createAttrMorph(element5, 'class');
          morphs[11] = dom.createMorphAt(element5, 0, 0);
          morphs[12] = dom.createAttrMorph(element6, 'class');
          morphs[13] = dom.createAttrMorph(element6, 'id');
          morphs[14] = dom.createAttrMorph(element6, 'name');
          morphs[15] = dom.createElementMorph(element6);
          morphs[16] = dom.createAttrMorph(element7, 'selected');
          morphs[17] = dom.createAttrMorph(element8, 'selected');
          morphs[18] = dom.createAttrMorph(element9, 'selected');
          morphs[19] = dom.createAttrMorph(element10, 'class');
          morphs[20] = dom.createAttrMorph(element11, 'class');
          morphs[21] = dom.createAttrMorph(element12, 'id');
          morphs[22] = dom.createAttrMorph(element12, 'class');
          morphs[23] = dom.createAttrMorph(element12, 'disabled');
          morphs[24] = dom.createAttrMorph(element12, 'value');
          morphs[25] = dom.createAttrMorph(element12, 'prevValue');
          morphs[26] = dom.createElementMorph(element12);
          morphs[27] = dom.createAttrMorph(element13, 'class');
          morphs[28] = dom.createAttrMorph(element14, 'class');
          morphs[29] = dom.createAttrMorph(element15, 'id');
          morphs[30] = dom.createAttrMorph(element15, 'value');
          morphs[31] = dom.createElementMorph(element15);
          return morphs;
        },
        statements: [["attribute", "id", ["concat", [["get", "colDesc.trId", ["loc", [null, [17, 20], [17, 32]]]]]]], ["attribute", "propName", ["concat", [["get", "colDesc.propName", ["loc", [null, [17, 48], [17, 64]]]]]]], ["attribute", "id", ["concat", [["get", "colDesc.hideId", ["loc", [null, [18, 26], [18, 40]]]]]]], ["attribute", "class", ["concat", ["large ", ["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [18, 62], [18, 74]]]], "hide", "unhide"], [], ["loc", [null, [18, 57], [18, 92]]]], " icon"]]], ["element", "action", ["invertVisibility", ["get", "n", ["loc", [null, [18, 150], [18, 151]]]]], [], ["loc", [null, [18, 122], [18, 153]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [19, 29], [19, 41]]]], "disabled", ""], [], ["loc", [null, [19, 24], [19, 57]]]]]]], ["attribute", "id", ["concat", [["get", "colDesc.rowUpId", ["loc", [null, [20, 49], [20, 64]]]]]]], ["element", "action", ["rowUp", ["get", "n", ["loc", [null, [20, 39], [20, 40]]]]], [], ["loc", [null, [20, 22], [20, 42]]]], ["attribute", "id", ["concat", [["get", "colDesc.rowDownId", ["loc", [null, [23, 53], [23, 70]]]]]]], ["element", "action", ["rowDown", ["get", "n", ["loc", [null, [23, 42], [23, 43]]]]], [], ["loc", [null, [23, 23], [23, 45]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [27, 29], [27, 41]]]], "disabled", ""], [], ["loc", [null, [27, 24], [27, 57]]]]]]], ["content", "colDesc.name", ["loc", [null, [27, 59], [27, 75]]]], ["attribute", "class", ["concat", ["ui compact dropdown selection icon button ", ["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [29, 77], [29, 89]]]], "disabled", ""], [], ["loc", [null, [29, 72], [29, 105]]]]]]], ["attribute", "id", ["concat", [["get", "colDesc.sortOrderId", ["loc", [null, [29, 114], [29, 133]]]]]]], ["attribute", "name", ["concat", ["sortorder[", ["get", "colDesc.name", ["loc", [null, [29, 155], [29, 167]]]], "]"]]], ["element", "action", ["setSortOrder", ["get", "n", ["loc", [null, [29, 196], [29, 197]]]]], [], ["loc", [null, [29, 172], [29, 199]]]], ["attribute", "selected", ["concat", [["get", "colDesc.sortOrderNot", ["loc", [null, [30, 36], [30, 56]]]]]]], ["attribute", "selected", ["concat", [["get", "colDesc.sortOrderAsc", ["loc", [null, [31, 36], [31, 56]]]]]]], ["attribute", "selected", ["concat", [["get", "colDesc.sortOrderDesc", ["loc", [null, [32, 36], [32, 57]]]]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [35, 29], [35, 41]]]], "disabled", ""], [], ["loc", [null, [35, 24], [35, 57]]]]]]], ["attribute", "class", ["concat", ["ui input ", ["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [36, 40], [36, 52]]]], "disabled", ""], [], ["loc", [null, [36, 35], [36, 68]]]]]]], ["attribute", "id", ["concat", [["get", "colDesc.sortPriorityId", ["loc", [null, [37, 29], [37, 51]]]]]]], ["attribute", "class", ["concat", ["sortPriority ", ["subexpr", "if", [["get", "colDesc.sortOrder", ["loc", [null, [37, 89], [37, 106]]]], "", "hidden"], [], ["loc", [null, [37, 84], [37, 120]]]]]]], ["attribute", "disabled", ["concat", [["subexpr", "if", [["get", "colDesc.sortOrder", ["loc", [null, [37, 137], [37, 154]]]], "", "disabled"], [], ["loc", [null, [37, 132], [37, 170]]]]]]], ["attribute", "value", ["concat", [["get", "colDesc.sortPriority", ["loc", [null, [37, 181], [37, 201]]]]]]], ["attribute", "prevValue", ["concat", [["get", "colDesc.sortPriority", ["loc", [null, [38, 76], [38, 96]]]]]]], ["element", "action", ["setSortPriority", ["get", "n", ["loc", [null, [38, 45], [38, 46]]]]], ["on", "focusOut"], ["loc", [null, [38, 18], [38, 62]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "colDesc.hide", ["loc", [null, [41, 29], [41, 41]]]], "disabled", ""], [], ["loc", [null, [41, 24], [41, 57]]]]]]], ["attribute", "class", ["concat", ["ui input ", ["subexpr", "if", [["subexpr", "or", [["get", "colDesc.hide", ["loc", [null, [42, 42], [42, 54]]]], ["subexpr", "not", [["get", "saveColWidthState", ["loc", [null, [42, 60], [42, 77]]]]], [], ["loc", [null, [42, 55], [42, 78]]]]], [], ["loc", [null, [42, 38], [42, 79]]]], "disabled", ""], [], ["loc", [null, [42, 33], [42, 95]]]]]]], ["attribute", "id", ["concat", [["get", "colDesc.columnWidthId", ["loc", [null, [43, 25], [43, 46]]]]]]], ["attribute", "value", ["concat", [["get", "colDesc.columnWidth", ["loc", [null, [43, 88], [43, 107]]]]]]], ["element", "action", ["widthChanged"], ["on", "focusOut"], ["loc", [null, [43, 124], [43, 164]]]]],
        locals: ["colDesc", "n"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 73,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/colsconfig-dialog-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexberry-colsconfig content");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "ui unstackable fixed selectable celled table");
        var el3 = dom.createElement("thead");
        var el4 = dom.createElement("tr");
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "show-columns");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "large hide icon");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "columns-order");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "large sort icon");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "sort-direction");
        var el6 = dom.createElement("nobr");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "large sort content ascending icon");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "large sort content descending icon");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "sort-priority");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "large ordered list icon");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "column-width");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "large text width icon");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        dom.setAttribute(el3, "id", "colsConfigtableRows");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tfoot");
        dom.setAttribute(el3, "class", "full-width");
        var el4 = dom.createElement("tr");
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "colspan", "5");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "ui action input");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "id", "columnConfigurtionSettingName");
        dom.setAttribute(el7, "type", "input");
        dom.setAttribute(el7, "name", "configName");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "columnConfigurtionButtonSave");
        dom.setAttribute(el7, "class", "ui small button disabled");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "columnConfigurtionButtonUse");
        dom.setAttribute(el6, "class", "ui right floated button disabled");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element16 = dom.childAt(fragment, [0, 1]);
        var element17 = dom.childAt(element16, [0, 0]);
        var element18 = dom.childAt(element17, [0]);
        var element19 = dom.childAt(element17, [1, 0]);
        var element20 = dom.childAt(element17, [2]);
        var element21 = dom.childAt(element17, [3]);
        var element22 = dom.childAt(element17, [4]);
        var element23 = dom.childAt(element17, [5]);
        var element24 = dom.childAt(element16, [2, 0]);
        var element25 = dom.childAt(element24, [0]);
        var element26 = dom.childAt(element25, [1]);
        var element27 = dom.childAt(element26, [1]);
        var element28 = dom.childAt(element26, [3]);
        var element29 = dom.childAt(element25, [3]);
        var morphs = new Array(16);
        morphs[0] = dom.createAttrMorph(element18, 'title');
        morphs[1] = dom.createAttrMorph(element19, 'title');
        morphs[2] = dom.createAttrMorph(element20, 'title');
        morphs[3] = dom.createMorphAt(element20, 0, 0);
        morphs[4] = dom.createAttrMorph(element21, 'title');
        morphs[5] = dom.createAttrMorph(element22, 'title');
        morphs[6] = dom.createAttrMorph(element23, 'title');
        morphs[7] = dom.createMorphAt(dom.childAt(element16, [1]), 1, 1);
        morphs[8] = dom.createAttrMorph(element27, 'placeholder');
        morphs[9] = dom.createAttrMorph(element27, 'value');
        morphs[10] = dom.createElementMorph(element27);
        morphs[11] = dom.createElementMorph(element28);
        morphs[12] = dom.createMorphAt(element28, 1, 1);
        morphs[13] = dom.createElementMorph(element29);
        morphs[14] = dom.createMorphAt(element29, 0, 0);
        morphs[15] = dom.createMorphAt(dom.childAt(element24, [1]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "title", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.dont-show-columns"], [], ["loc", [null, [5, 43], [5, 105]]]]]]], ["attribute", "title", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.columns-order"], [], ["loc", [null, [6, 71], [6, 129]]]]]]], ["attribute", "title", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.column-name"], [], ["loc", [null, [7, 22], [7, 78]]]]]]], ["inline", "t", ["components.colsconfig-dialog-content.column-name"], [], ["loc", [null, [7, 80], [7, 136]]]], ["attribute", "title", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.sort-direction"], [], ["loc", [null, [8, 45], [8, 104]]]]]]], ["attribute", "title", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.sort-priority"], [], ["loc", [null, [9, 44], [9, 102]]]]]]], ["attribute", "title", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.column-width"], [], ["loc", [null, [10, 43], [10, 100]]]]]]], ["block", "each", [["get", "modelForDOM", ["loc", [null, [14, 16], [14, 27]]]]], [], 0, null, ["loc", [null, [14, 8], [48, 9]]]], ["attribute", "placeholder", ["concat", [["subexpr", "t", ["components.colsconfig-dialog-content.enter-setting-name"], [], ["loc", [null, [55, 27], [55, 90]]]]]]], ["attribute", "value", ["concat", [["get", "settingName", ["loc", [null, [55, 101], [55, 112]]]]]]], ["element", "action", ["setConfigName", ["get", "n", ["loc", [null, [56, 39], [56, 40]]]]], ["on", "focusOut"], ["loc", [null, [56, 14], [56, 56]]]], ["element", "action", ["saveColsSetting"], [], ["loc", [null, [57, 84], [57, 112]]]], ["inline", "t", ["components.colsconfig-dialog-content.save"], [], ["loc", [null, [58, 14], [58, 63]]]], ["element", "action", ["apply"], [], ["loc", [null, [61, 91], [61, 109]]]], ["inline", "t", ["components.colsconfig-dialog-content.use"], [], ["loc", [null, [61, 110], [61, 158]]]], ["inline", "flexberry-checkbox", [], ["class", "toggle", "value", ["subexpr", "@mut", [["get", "saveColWidthState", ["loc", [null, [66, 18], [66, 35]]]]], [], []]], ["loc", [null, [64, 10], [67, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/flexberry-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1, "class", "flexberry-checkbox-label");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["class", "flexberry-checkbox-input", "type", "checkbox", "checked", ["subexpr", "get", [["get", "this", ["loc", [null, [4, 15], [4, 19]]]], "value"], [], ["loc", [null, [4, 10], [4, 28]]]]], ["loc", [null, [1, 0], [5, 2]]]], ["content", "label", ["loc", [null, [7, 2], [7, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-datepicker", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-datepicker.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'class');
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [2, 7], [2, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "classes", ["loc", [null, [3, 8], [3, 15]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [4, 11], [4, 19]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [5, 11], [5, 19]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [6, 14], [6, 25]]]]], [], []]], ["loc", [null, [1, 0], [7, 2]]]], ["attribute", "class", ["concat", ["calendar ", ["subexpr", "unless", [["get", "readonly", ["loc", [null, [8, 28], [8, 36]]]], "link"], [], ["loc", [null, [8, 19], [8, 45]]]], " icon"]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "class", "search");
            dom.setAttribute(el1, "autocomplete", "off");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "class", "search");
            dom.setAttribute(el1, "autocomplete", "off");
            dom.setAttribute(el1, "readonly", "");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 2
              },
              "end": {
                "line": 18,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "default text");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "placeholder", ["loc", [null, [17, 30], [17, 45]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 20,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "text");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "text", ["loc", [null, [19, 22], [19, 30]]]]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 6
                },
                "end": {
                  "line": 25,
                  "column": 6
                }
              },
              "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "item");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'data-value');
              morphs[1] = dom.createMorphAt(element0, 0, 0);
              return morphs;
            },
            statements: [["attribute", "data-value", ["concat", [["get", "value", ["loc", [null, [24, 40], [24, 45]]]]]]], ["content", "value", ["loc", [null, [24, 49], [24, 58]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 25,
                  "column": 6
                },
                "end": {
                  "line": 27,
                  "column": 6
                }
              },
              "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "item");
              dom.setAttribute(el1, "data-value", "_");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "value", ["loc", [null, [26, 41], [26, 50]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 4
              },
              "end": {
                "line": 28,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], 0, 1, ["loc", [null, [23, 6], [27, 13]]]]],
          locals: ["key", "value"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [8]), 1, 1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "and", [["get", "isSearch", ["loc", [null, [7, 13], [7, 21]]]], ["get", "isSearchReadOnly", ["loc", [null, [7, 22], [7, 38]]]]], [], ["loc", [null, [7, 8], [7, 39]]]]], [], 0, null, ["loc", [null, [7, 2], [9, 9]]]], ["block", "if", [["subexpr", "and", [["get", "isSearch", ["loc", [null, [11, 13], [11, 21]]]], ["subexpr", "not", [["get", "isSearchReadOnly", ["loc", [null, [11, 27], [11, 43]]]]], [], ["loc", [null, [11, 22], [11, 44]]]]], [], ["loc", [null, [11, 8], [11, 45]]]]], [], 1, null, ["loc", [null, [11, 2], [13, 9]]]], ["block", "if", [["get", "showPlaceholder", ["loc", [null, [16, 8], [16, 23]]]]], [], 2, 3, ["loc", [null, [16, 2], [20, 9]]]], ["block", "each-in", [["get", "_items", ["loc", [null, [22, 15], [22, 21]]]]], [], 4, null, ["loc", [null, [22, 4], [28, 16]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ui-dropdown", [], ["class", ["subexpr", "concat", ["flexberry-dropdown ", ["get", "class", ["loc", [null, [2, 38], [2, 43]]]], " selection", ["subexpr", "if", [["get", "readonly", ["loc", [null, [2, 61], [2, 69]]]], " disabled", ""], [], ["loc", [null, [2, 57], [2, 85]]]]], [], ["loc", [null, [2, 8], [2, 86]]]], "onChange", ["subexpr", "action", ["onChange"], [], ["loc", [null, [3, 11], [3, 30]]]], "onHide", ["subexpr", "action", ["onShowHide"], [], ["loc", [null, [4, 9], [4, 30]]]], "onShow", ["subexpr", "action", ["onShowHide"], [], ["loc", [null, [5, 9], [5, 30]]]]], 0, null, ["loc", [null, [1, 0], [30, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/flexberry-field", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-field.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-field.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "label", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "flexberry-textbox", [], ["type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [5, 7], [5, 11]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [6, 8], [6, 13]]]]], [], []], "readonly", ["subexpr", "if", [["get", "readonly", ["loc", [null, [7, 15], [7, 23]]]], "readonly"], [], ["loc", [null, [7, 11], [7, 35]]]], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 11], [8, 19]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [9, 14], [9, 25]]]]], [], []]], ["loc", [null, [4, 0], [10, 2]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/flexberry-file", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/flexberry-file.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("label");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "add outline square icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element6, 'class');
            morphs[1] = dom.createAttrMorph(element6, 'title');
            morphs[2] = dom.createAttrMorph(element6, 'for');
            morphs[3] = dom.createElementMorph(element6);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["flexberry-file-add-button ui icon ", ["get", "buttonClass", ["loc", [null, [14, 51], [14, 62]]]], " ", ["subexpr", "unless", [["get", "_addButtonIsEnabled", ["loc", [null, [14, 74], [14, 93]]]], "disabled"], [], ["loc", [null, [14, 65], [14, 106]]]], " button"]]], ["attribute", "title", ["subexpr", "t", ["components.flexberry-file.add-button-title"], [], ["loc", [null, [15, 14], [15, 64]]]]], ["attribute", "for", ["get", "_fileInputId", ["loc", [null, [16, 14], [16, 26]]]]], ["element", "action", ["addButtonClick"], ["on", "click", "preventDefault", false], ["loc", [null, [17, 8], [17, 67]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 4
              },
              "end": {
                "line": 28,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/flexberry-file.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("label");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "trash outline icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element5, 'class');
            morphs[1] = dom.createAttrMorph(element5, 'title');
            morphs[2] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["flexberry-file-remove-button ui icon ", ["get", "buttonClass", ["loc", [null, [23, 54], [23, 65]]]], " ", ["subexpr", "unless", [["get", "_removeButtonIsEnabled", ["loc", [null, [23, 77], [23, 99]]]], "disabled"], [], ["loc", [null, [23, 68], [23, 112]]]], " button"]]], ["attribute", "title", ["subexpr", "t", ["components.flexberry-file.remove-button-title"], [], ["loc", [null, [24, 14], [24, 67]]]]], ["element", "action", ["removeButtonClick"], ["on", "click", "preventDefault", false], ["loc", [null, [25, 8], [25, 70]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 4
              },
              "end": {
                "line": 36,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/flexberry-file.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("label");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "upload outline icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element4, 'class');
            morphs[1] = dom.createAttrMorph(element4, 'title');
            morphs[2] = dom.createElementMorph(element4);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["flexberry-file-upload-button ui icon ", ["get", "buttonClass", ["loc", [null, [31, 54], [31, 65]]]], " ", ["subexpr", "unless", [["get", "_uploadButtonIsEnabled", ["loc", [null, [31, 77], [31, 99]]]], "disabled"], [], ["loc", [null, [31, 68], [31, 112]]]], " ", ["subexpr", "if", [["get", "_uploadIsInProgress", ["loc", [null, [31, 118], [31, 137]]]], "loading"], [], ["loc", [null, [31, 113], [31, 149]]]], " button"]]], ["attribute", "title", ["subexpr", "t", ["components.flexberry-file.upload-button-title"], [], ["loc", [null, [32, 14], [32, 67]]]]], ["element", "action", ["uploadButtonClick"], ["on", "click", "preventDefault", false], ["loc", [null, [33, 8], [33, 70]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 2
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/flexberry-file.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "_addButtonIsVisible", ["loc", [null, [12, 10], [12, 29]]]]], [], 0, null, ["loc", [null, [12, 4], [20, 11]]]], ["block", "if", [["get", "_removeButtonIsVisible", ["loc", [null, [21, 10], [21, 32]]]]], [], 1, null, ["loc", [null, [21, 4], [28, 11]]]], ["block", "if", [["get", "_uploadButtonIsVisible", ["loc", [null, [29, 10], [29, 32]]]]], [], 2, null, ["loc", [null, [29, 4], [36, 11]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 2
            },
            "end": {
              "line": 45,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/flexberry-file.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "download outline icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element3, 'class');
          morphs[1] = dom.createAttrMorph(element3, 'title');
          morphs[2] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["flexberry-file-download-button ui icon ", ["get", "buttonClass", ["loc", [null, [40, 54], [40, 65]]]], " ", ["subexpr", "unless", [["get", "_downloadButtonIsEnabled", ["loc", [null, [40, 77], [40, 101]]]], "disabled"], [], ["loc", [null, [40, 68], [40, 114]]]], " button"]]], ["attribute", "title", ["subexpr", "t", ["components.flexberry-file.download-button-title"], [], ["loc", [null, [41, 12], [41, 67]]]]], ["element", "action", ["downloadButtonClick"], ["on", "click", "preventDefault", false], ["loc", [null, [42, 6], [42, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 6
              },
              "end": {
                "line": 54,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/components/flexberry-file.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "class", "flexberry-file-image-preview ui small centered image");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            morphs[1] = dom.createAttrMorph(element0, 'alt');
            return morphs;
          },
          statements: [["attribute", "src", ["get", "_previewImageAsBase64String", ["loc", [null, [52, 16], [52, 43]]]]], ["attribute", "alt", ["subexpr", "t", ["components.flexberry-file.preview-image-alternative-text"], [], ["loc", [null, [53, 14], [53, 78]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 0
            },
            "end": {
              "line": 57,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-file.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flexberry-file-image-preview-wrapper ui segment");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createAttrMorph(element2, 'class');
          return morphs;
        },
        statements: [["element", "action", ["viewLoadedImage"], [], ["loc", [null, [48, 65], [48, 93]]]], ["block", "unless", [["get", "_previewDownloadIsInProgress", ["loc", [null, [49, 16], [49, 44]]]]], [], 0, null, ["loc", [null, [49, 6], [54, 17]]]], ["attribute", "class", ["concat", ["ui ", ["subexpr", "if", [["get", "_previewDownloadIsInProgress", ["loc", [null, [55, 26], [55, 54]]]], "active", ""], [], ["loc", [null, [55, 21], [55, 68]]]], " loader"]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 80,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-file.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "file");
        dom.setAttribute(el2, "name", "files[]");
        dom.setAttribute(el2, "class", "flexberry-file-file-input");
        dom.setAttribute(el2, "style", "display:none");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexberry-file-download-iframes-container");
        dom.setAttribute(el1, "style", "display: none;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexberry-file-error-modal-dialog ui small basic modal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui icon header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "file icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flexberry-file-error-modal-dialog-content center aligned ui grid");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "center aligned ui grid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "actions");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "flexberry-file-error-modal-dialog-ok-button ui approve green inverted button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "checkmark icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element7 = dom.childAt(fragment, [0]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(fragment, [5]);
        var morphs = new Array(9);
        morphs[0] = dom.createAttrMorph(element7, 'class');
        morphs[1] = dom.createAttrMorph(element8, 'id');
        morphs[2] = dom.createMorphAt(element7, 4, 4);
        morphs[3] = dom.createMorphAt(element7, 6, 6);
        morphs[4] = dom.createMorphAt(element7, 7, 7);
        morphs[5] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[6] = dom.createMorphAt(dom.childAt(element9, [1]), 3, 3);
        morphs[7] = dom.createMorphAt(dom.childAt(element9, [3, 1]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element9, [5, 1, 1]), 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ui ", ["get", "inputClass", ["loc", [null, [1, 17], [1, 27]]]], " action input"]]], ["attribute", "id", ["get", "_fileInputId", ["loc", [null, [2, 41], [2, 53]]]]], ["inline", "input", [], ["type", "text", "class", "flexberry-file-filename-input", "readonly", "readonly", "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [8, 16], [8, 27]]]]], [], []], "value", ["subexpr", "get", [["get", "this", ["loc", [null, [9, 15], [9, 19]]]], "_fileName"], [], ["loc", [null, [9, 10], [9, 32]]]]], ["loc", [null, [4, 2], [10, 4]]]], ["block", "unless", [["get", "readonly", ["loc", [null, [11, 12], [11, 20]]]]], [], 0, null, ["loc", [null, [11, 2], [37, 13]]]], ["block", "if", [["get", "_downloadButtonIsVisible", ["loc", [null, [38, 8], [38, 32]]]]], [], 1, null, ["loc", [null, [38, 2], [45, 9]]]], ["block", "if", [["subexpr", "and", [["get", "showPreview", ["loc", [null, [47, 11], [47, 22]]]], ["get", "_hasFile", ["loc", [null, [47, 23], [47, 31]]]]], [], ["loc", [null, [47, 6], [47, 32]]]]], [], 2, null, ["loc", [null, [47, 0], [57, 7]]]], ["content", "_errorModalDialogCaption", ["loc", [null, [64, 4], [64, 32]]]], ["content", "_errorModalDialogContent", ["loc", [null, [68, 6], [68, 34]]]], ["inline", "t", ["components.flexberry-file.error-dialog-ok-button-caption"], [], ["loc", [null, [75, 8], [75, 72]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/components/flexberry-groupedit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-groupedit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "groupedit-toolbar", [], ["componentName", ["subexpr", "@mut", [["get", "componentName", ["loc", [null, [2, 16], [2, 29]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [3, 11], [3, 19]]]]], [], []], "buttonClass", ["subexpr", "@mut", [["get", "buttonClass", ["loc", [null, [4, 14], [4, 25]]]]], [], []], "createNewButton", ["subexpr", "@mut", [["get", "createNewButton", ["loc", [null, [5, 18], [5, 33]]]]], [], []], "deleteButton", ["subexpr", "@mut", [["get", "deleteButton", ["loc", [null, [6, 15], [6, 27]]]]], [], []], "confirmDeleteRows", ["subexpr", "@mut", [["get", "confirmDeleteRows", ["loc", [null, [7, 20], [7, 37]]]]], [], []]], ["loc", [null, [1, 0], [8, 2]]]], ["inline", "object-list-view", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 14], [10, 25]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [11, 11], [11, 19]]]]], [], []], "buttonClass", ["subexpr", "@mut", [["get", "buttonClass", ["loc", [null, [12, 14], [12, 25]]]]], [], []], "tableStriped", ["subexpr", "@mut", [["get", "tableStriped", ["loc", [null, [13, 15], [13, 27]]]]], [], []], "customTableClass", ["subexpr", "@mut", [["get", "customTableClass", ["loc", [null, [14, 19], [14, 35]]]]], [], []], "headerCellComponent", ["subexpr", "@mut", [["get", "headerCellComponent", ["loc", [null, [15, 22], [15, 41]]]]], [], []], "cellComponent", ["subexpr", "@mut", [["get", "cellComponent", ["loc", [null, [16, 16], [16, 29]]]]], [], []], "singleColumnCellComponent", ["subexpr", "@mut", [["get", "singleColumnCellComponent", ["loc", [null, [17, 28], [17, 53]]]]], [], []], "singleColumnHeaderTitle", ["subexpr", "@mut", [["get", "singleColumnHeaderTitle", ["loc", [null, [18, 26], [18, 49]]]]], [], []], "showAsteriskInRow", ["subexpr", "@mut", [["get", "showAsteriskInRow", ["loc", [null, [19, 20], [19, 37]]]]], [], []], "showCheckBoxInRow", ["subexpr", "@mut", [["get", "showCheckBoxInRow", ["loc", [null, [20, 20], [20, 37]]]]], [], []], "showDeleteButtonInRow", ["subexpr", "@mut", [["get", "showDeleteButtonInRow", ["loc", [null, [21, 24], [21, 45]]]]], [], []], "showEditMenuItemInRow", ["subexpr", "@mut", [["get", "showEditMenuItemInRow", ["loc", [null, [22, 24], [22, 45]]]]], [], []], "showDeleteMenuItemInRow", ["subexpr", "@mut", [["get", "showDeleteMenuItemInRow", ["loc", [null, [23, 26], [23, 49]]]]], [], []], "menuInRowAdditionalItems", ["subexpr", "@mut", [["get", "menuInRowAdditionalItems", ["loc", [null, [24, 27], [24, 51]]]]], [], []], "rowClickable", ["subexpr", "@mut", [["get", "rowClickable", ["loc", [null, [25, 15], [25, 27]]]]], [], []], "headerClickable", ["subexpr", "@mut", [["get", "orderable", ["loc", [null, [26, 18], [26, 27]]]]], [], []], "editOnSeparateRoute", ["subexpr", "@mut", [["get", "editOnSeparateRoute", ["loc", [null, [27, 22], [27, 41]]]]], [], []], "saveBeforeRouteLeave", ["subexpr", "@mut", [["get", "saveBeforeRouteLeave", ["loc", [null, [28, 23], [28, 43]]]]], [], []], "sorting", ["subexpr", "@mut", [["get", "sorting", ["loc", [null, [29, 10], [29, 17]]]]], [], []], "modelName", ["subexpr", "@mut", [["get", "modelName", ["loc", [null, [30, 12], [30, 21]]]]], [], []], "mainModelProjection", ["subexpr", "@mut", [["get", "mainModelProjection", ["loc", [null, [31, 22], [31, 41]]]]], [], []], "modelProjection", ["subexpr", "@mut", [["get", "modelProjection", ["loc", [null, [32, 18], [32, 33]]]]], [], []], "content", ["subexpr", "@mut", [["get", "content", ["loc", [null, [33, 10], [33, 17]]]]], [], []], "sortByColumn", ["subexpr", "action", [["subexpr", "if", [["get", "this.attrs.sortByColumn", ["loc", [null, [34, 27], [34, 50]]]], ["get", "this.attrs.sortByColumn", ["loc", [null, [34, 51], [34, 74]]]], "sortByColumn"], [], ["loc", [null, [34, 23], [34, 90]]]]], [], ["loc", [null, [34, 15], [34, 91]]]], "addColumnToSorting", ["subexpr", "action", [["subexpr", "if", [["get", "this.attrs.addColumnToSorting", ["loc", [null, [35, 33], [35, 62]]]], ["get", "this.attrs.addColumnToSorting", ["loc", [null, [35, 63], [35, 92]]]], "addColumnToSorting"], [], ["loc", [null, [35, 29], [35, 114]]]]], [], ["loc", [null, [35, 21], [35, 115]]]], "action", "groupEditRowClick", "componentName", ["subexpr", "@mut", [["get", "componentName", ["loc", [null, [37, 16], [37, 29]]]]], [], []], "allowColumnResize", ["subexpr", "@mut", [["get", "allowColumnResize", ["loc", [null, [38, 20], [38, 37]]]]], [], []], "configurateRow", ["subexpr", "@mut", [["get", "this.attrs.configurateRow", ["loc", [null, [39, 17], [39, 42]]]]], [], []], "confirmDeleteRow", ["subexpr", "@mut", [["get", "confirmDeleteRow", ["loc", [null, [40, 19], [40, 35]]]]], [], []], "beforeDeleteRecord", ["subexpr", "@mut", [["get", "beforeDeleteRecord", ["loc", [null, [41, 21], [41, 39]]]]], [], []], "searchForContentChange", ["subexpr", "@mut", [["get", "searchForContentChange", ["loc", [null, [42, 25], [42, 47]]]]], [], []], "immediateDelete", false, "notUseUserSettings", true], ["loc", [null, [9, 0], [45, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-lookup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-lookup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "flexberry-dropdown", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [3, 16], [3, 27]]]]], [], []], "class", "search", "value", ["subexpr", "@mut", [["get", "displayValue", ["loc", [null, [5, 10], [5, 22]]]]], [], []], "readonly", ["subexpr", "if", [["get", "readonly", ["loc", [null, [6, 17], [6, 25]]]], "readonly"], [], ["loc", [null, [6, 13], [6, 37]]]], "needChecksOnValue", false, "isSearch", true, "isSearchReadOnly", ["subexpr", "@mut", [["get", "dropdownIsSearch", ["loc", [null, [9, 21], [9, 37]]]]], [], []]], ["loc", [null, [2, 2], [10, 4]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-lookup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui fluid action input");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element0, [5]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createAttrMorph(element1, 'class');
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createUnsafeMorphAt(element1, 0, 0);
          morphs[4] = dom.createAttrMorph(element2, 'class');
          morphs[5] = dom.createElementMorph(element2);
          morphs[6] = dom.createUnsafeMorphAt(element2, 0, 0);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "class", ["subexpr", "concat", ["lookup-field ", ["subexpr", "if", [["get", "autocomplete", ["loc", [null, [15, 40], [15, 52]]]], "prompt"], [], ["loc", [null, [15, 36], [15, 62]]]]], [], ["loc", [null, [15, 12], [15, 63]]]], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [16, 18], [16, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "displayValue", ["loc", [null, [17, 12], [17, 24]]]]], [], []], "readonly", ["subexpr", "if", [["subexpr", "or", [["get", "readonly", ["loc", [null, [18, 23], [18, 31]]]], ["subexpr", "not", [["get", "autocomplete", ["loc", [null, [18, 37], [18, 49]]]]], [], ["loc", [null, [18, 32], [18, 50]]]]], [], ["loc", [null, [18, 19], [18, 51]]]], "readonly"], [], ["loc", [null, [18, 15], [18, 63]]]]], ["loc", [null, [13, 4], [19, 6]]]], ["attribute", "class", ["concat", ["ui ", ["subexpr", "if", [["get", "readonly", ["loc", [null, [20, 27], [20, 35]]]], " read-only"], [], ["loc", [null, [20, 22], [20, 50]]]], " ", ["get", "chooseButtonClass", ["loc", [null, [20, 53], [20, 70]]]], " button"]]], ["element", "action", ["choose", ["get", "chooseData", ["loc", [null, [20, 99], [20, 109]]]]], [], ["loc", [null, [20, 81], [20, 111]]]], ["content", "chooseText", ["loc", [null, [20, 112], [20, 128]]]], ["attribute", "class", ["concat", ["ui ", ["subexpr", "if", [["get", "readonly", ["loc", [null, [21, 27], [21, 35]]]], " read-only"], [], ["loc", [null, [21, 22], [21, 50]]]], " ", ["get", "removeButtonClass", ["loc", [null, [21, 53], [21, 70]]]], " button"]]], ["element", "action", ["remove", ["get", "removeData", ["loc", [null, [21, 99], [21, 109]]]]], [], ["loc", [null, [21, 81], [21, 111]]]], ["content", "removeText", ["loc", [null, [21, 112], [21, 128]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 0
            },
            "end": {
              "line": 26,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-lookup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "results");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-lookup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "dropdown", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [23, 7]]]], ["block", "if", [["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [24, 16], [24, 24]]]]], [], ["loc", [null, [24, 11], [24, 25]]]], ["get", "autocomplete", ["loc", [null, [24, 26], [24, 38]]]]], [], ["loc", [null, [24, 6], [24, 39]]]]], [], 2, null, ["loc", [null, [24, 0], [26, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/components/flexberry-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-menu.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "flexberry-menuitem", [], ["tagName", "", "item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [2, 39], [2, 43]]]]], [], []]], ["loc", [null, [2, 2], [2, 45]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-menu.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "each", [["get", "items", ["loc", [null, [1, 8], [1, 13]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 9]]]], ["content", "yield", ["loc", [null, [4, 0], [4, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/flexberry-menuitem", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-menuitem.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "item.title", ["loc", [null, [2, 8], [2, 22]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-menuitem.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "item.icon", ["loc", [null, [5, 14], [5, 23]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-menuitem.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "item.title", ["loc", [null, [8, 8], [8, 22]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 4
              },
              "end": {
                "line": 14,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/flexberry-menuitem.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "flexberry-menuitem", [], ["item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [13, 32], [13, 36]]]]], [], []]], ["loc", [null, [13, 6], [13, 38]]]]],
          locals: ["item"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-menuitem.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "item.itemsAlignment", ["loc", [null, [11, 19], [11, 38]]]], ["get", "item.itemsAlignment", ["loc", [null, [11, 39], [11, 58]]]]], [], ["loc", [null, [11, 14], [11, 60]]]], " menu"]]], ["block", "each", [["get", "item.items", ["loc", [null, [12, 12], [12, 22]]]]], [], 0, null, ["loc", [null, [12, 4], [14, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-menuitem.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "and", [["get", "titleIsBeforeIcon", ["loc", [null, [1, 11], [1, 28]]]], ["get", "item.title", ["loc", [null, [1, 29], [1, 39]]]]], [], ["loc", [null, [1, 6], [1, 40]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "item.icon", ["loc", [null, [4, 6], [4, 15]]]]], [], 1, null, ["loc", [null, [4, 0], [6, 7]]]], ["block", "if", [["subexpr", "and", [["subexpr", "not", [["get", "titleIsBeforeIcon", ["loc", [null, [7, 16], [7, 33]]]]], [], ["loc", [null, [7, 11], [7, 34]]]], ["get", "item.title", ["loc", [null, [7, 35], [7, 45]]]]], [], ["loc", [null, [7, 6], [7, 46]]]]], [], 2, null, ["loc", [null, [7, 0], [9, 7]]]], ["block", "if", [["get", "hasSubitems", ["loc", [null, [10, 6], [10, 17]]]]], [], 3, null, ["loc", [null, [10, 0], [16, 7]]]], ["content", "yield", ["loc", [null, [17, 0], [17, 9]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/components/flexberry-objectlistview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 79,
                  "column": 5
                },
                "end": {
                  "line": 81,
                  "column": 5
                }
              },
              "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("  		  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1, "class", "ui button");
              var el2 = dom.createTextNode("...");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 82,
                    "column": 4
                  },
                  "end": {
                    "line": 84,
                    "column": 4
                  }
                },
                "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("  			");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("button");
                dom.setAttribute(el1, "class", "ui active button");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                return morphs;
              },
              statements: [["content", "page.number", ["loc", [null, [83, 38], [83, 53]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 84,
                    "column": 4
                  },
                  "end": {
                    "line": 86,
                    "column": 4
                  }
                },
                "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("  			");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("button");
                dom.setAttribute(el1, "class", "ui button");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createElementMorph(element0);
                morphs[1] = dom.createMorphAt(element0, 0, 0);
                return morphs;
              },
              statements: [["element", "action", [["subexpr", "if", [["get", "this.attrs.gotoPage", ["loc", [null, [85, 44], [85, 63]]]], ["get", "this.attrs.gotoPage", ["loc", [null, [85, 64], [85, 83]]]], "gotoPage"], [], ["loc", [null, [85, 40], [85, 95]]]], ["get", "page.number", ["loc", [null, [85, 96], [85, 107]]]]], [], ["loc", [null, [85, 31], [85, 109]]]], ["content", "page.number", ["loc", [null, [85, 110], [85, 125]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 81,
                  "column": 5
                },
                "end": {
                  "line": 87,
                  "column": 5
                }
              },
              "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "page.isCurrent", ["loc", [null, [82, 10], [82, 24]]]]], [], 0, 1, ["loc", [null, [82, 4], [86, 11]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 78,
                "column": 3
              },
              "end": {
                "line": 88,
                "column": 3
              }
            },
            "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "page.isEllipsis", ["loc", [null, [79, 11], [79, 26]]]]], [], 0, 1, ["loc", [null, [79, 5], [87, 12]]]]],
          locals: ["page"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 74,
              "column": 0
            },
            "end": {
              "line": 95,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui secondary menu no-margin");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui basic buttons");
          var el3 = dom.createTextNode("\n  	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          var el4 = dom.createTextNode("«");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          var el4 = dom.createTextNode("»");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "right menu");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element2, [5]);
          var morphs = new Array(6);
          morphs[0] = dom.createAttrMorph(element3, 'class');
          morphs[1] = dom.createElementMorph(element3);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          morphs[3] = dom.createAttrMorph(element4, 'class');
          morphs[4] = dom.createElementMorph(element4);
          morphs[5] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["subexpr", "unless", [["get", "hasPreviousPage", ["loc", [null, [77, 30], [77, 45]]]], "disabled"], [], ["loc", [null, [77, 21], [77, 58]]]], " button"]]], ["element", "action", [["subexpr", "if", [["get", "this.attrs.previousPage", ["loc", [null, [77, 80], [77, 103]]]], ["get", "this.attrs.previousPage", ["loc", [null, [77, 104], [77, 127]]]], "previousPage"], [], ["loc", [null, [77, 76], [77, 143]]]]], [], ["loc", [null, [77, 67], [77, 145]]]], ["block", "each", [["get", "pages", ["loc", [null, [78, 11], [78, 16]]]]], [], 0, null, ["loc", [null, [78, 3], [88, 12]]]], ["attribute", "class", ["concat", ["ui ", ["subexpr", "unless", [["get", "hasNextPage", ["loc", [null, [89, 30], [89, 41]]]], "disabled"], [], ["loc", [null, [89, 21], [89, 54]]]], " button"]]], ["element", "action", [["subexpr", "if", [["get", "this.attrs.nextPage", ["loc", [null, [89, 76], [89, 95]]]], ["get", "this.attrs.nextPage", ["loc", [null, [89, 96], [89, 115]]]], "nextPage"], [], ["loc", [null, [89, 72], [89, 127]]]]], [], ["loc", [null, [89, 63], [89, 129]]]], ["inline", "flexberry-dropdown", [], ["items", ["subexpr", "@mut", [["get", "perPageValues", ["loc", [null, [92, 33], [92, 46]]]]], [], []], "value", ["subexpr", "@mut", [["get", "perPageValue", ["loc", [null, [92, 53], [92, 65]]]]], [], []], "class", "compact selection"], ["loc", [null, [92, 6], [92, 93]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 96,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-objectlistview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "olv-toolbar", [], ["class", "ui secondary menu no-margin", "createNewButton", ["subexpr", "@mut", [["get", "createNewButton", ["loc", [null, [3, 18], [3, 33]]]]], [], []], "enableCreateNewButton", ["subexpr", "not", [["get", "readonly", ["loc", [null, [4, 29], [4, 37]]]]], [], ["loc", [null, [4, 24], [4, 38]]]], "refreshButton", ["subexpr", "@mut", [["get", "refreshButton", ["loc", [null, [5, 16], [5, 29]]]]], [], []], "deleteButton", ["subexpr", "@mut", [["get", "deleteButton", ["loc", [null, [6, 15], [6, 27]]]]], [], []], "colsConfigButton", ["subexpr", "@mut", [["get", "colsConfigButton", ["loc", [null, [7, 19], [7, 35]]]]], [], []], "enableFilters", ["subexpr", "@mut", [["get", "enableFilters", ["loc", [null, [8, 16], [8, 29]]]]], [], []], "showFilters", ["subexpr", "@mut", [["get", "_showFilters", ["loc", [null, [9, 14], [9, 26]]]]], [], []], "filters", ["subexpr", "@mut", [["get", "filters", ["loc", [null, [10, 10], [10, 17]]]]], [], []], "toggleStateFilters", ["subexpr", "action", ["toggleStateFilters"], [], ["loc", [null, [11, 21], [11, 50]]]], "resetFilters", ["subexpr", "action", [["subexpr", "if", [["get", "resetFilters", ["loc", [null, [12, 29], [12, 41]]]], ["get", "resetFilters", ["loc", [null, [12, 42], [12, 54]]]], "resetFilters"], [], ["loc", [null, [12, 25], [12, 70]]]]], [], ["loc", [null, [12, 17], [12, 71]]]], "filterButton", ["subexpr", "@mut", [["get", "filterButton", ["loc", [null, [13, 15], [13, 27]]]]], [], []], "filterText", ["subexpr", "@mut", [["get", "filterText", ["loc", [null, [14, 13], [14, 23]]]]], [], []], "buttonClass", ["subexpr", "@mut", [["get", "buttonClass", ["loc", [null, [15, 14], [15, 25]]]]], [], []], "enableDeleteButton", ["subexpr", "not", [["get", "readonly", ["loc", [null, [16, 26], [16, 34]]]]], [], ["loc", [null, [16, 21], [16, 35]]]], "componentName", ["subexpr", "@mut", [["get", "componentName", ["loc", [null, [17, 16], [17, 29]]]]], [], []], "modelController", ["subexpr", "@mut", [["get", "currentController", ["loc", [null, [18, 18], [18, 35]]]]], [], []], "customButtonAction", "customButtonAction", "customButtons", ["subexpr", "@mut", [["get", "customButtons", ["loc", [null, [20, 16], [20, 29]]]]], [], []], "editFormRoute", ["subexpr", "@mut", [["get", "editFormRoute", ["loc", [null, [21, 16], [21, 29]]]]], [], []], "showConfigDialog", "showConfigDialog", "confirmDeleteRows", ["subexpr", "@mut", [["get", "confirmDeleteRows", ["loc", [null, [23, 20], [23, 37]]]]], [], []], "inHierarchicalMode", ["subexpr", "@mut", [["get", "_inHierarchicalMode", ["loc", [null, [24, 21], [24, 40]]]]], [], []], "availableHierarchicalMode", ["subexpr", "@mut", [["get", "_availableHierarchicalMode", ["loc", [null, [25, 28], [25, 54]]]]], [], []], "switchHierarchicalMode", ["subexpr", "action", ["switchHierarchicalMode"], [], ["loc", [null, [26, 25], [26, 58]]]]], ["loc", [null, [1, 0], [27, 2]]]], ["inline", "object-list-view", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [29, 14], [29, 25]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [30, 11], [30, 19]]]]], [], []], "buttonClass", ["subexpr", "@mut", [["get", "buttonClass", ["loc", [null, [31, 14], [31, 25]]]]], [], []], "tableStriped", ["subexpr", "@mut", [["get", "tableStriped", ["loc", [null, [32, 15], [32, 27]]]]], [], []], "customTableClass", ["subexpr", "@mut", [["get", "customTableClass", ["loc", [null, [33, 19], [33, 35]]]]], [], []], "headerCellComponent", ["subexpr", "@mut", [["get", "headerCellComponent", ["loc", [null, [34, 22], [34, 41]]]]], [], []], "cellComponent", ["subexpr", "@mut", [["get", "cellComponent", ["loc", [null, [35, 16], [35, 29]]]]], [], []], "singleColumnCellComponent", ["subexpr", "@mut", [["get", "singleColumnCellComponent", ["loc", [null, [36, 28], [36, 53]]]]], [], []], "singleColumnHeaderTitle", ["subexpr", "@mut", [["get", "singleColumnHeaderTitle", ["loc", [null, [37, 26], [37, 49]]]]], [], []], "showAsteriskInRow", ["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [38, 30], [38, 38]]]]], [], ["loc", [null, [38, 25], [38, 39]]]], ["get", "showAsteriskInRow", ["loc", [null, [38, 40], [38, 57]]]]], [], ["loc", [null, [38, 20], [38, 58]]]], "showCheckBoxInRow", ["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [39, 30], [39, 38]]]]], [], ["loc", [null, [39, 25], [39, 39]]]], ["get", "showCheckBoxInRow", ["loc", [null, [39, 40], [39, 57]]]]], [], ["loc", [null, [39, 20], [39, 58]]]], "showDeleteButtonInRow", ["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [40, 34], [40, 42]]]]], [], ["loc", [null, [40, 29], [40, 43]]]], ["get", "showDeleteButtonInRow", ["loc", [null, [40, 44], [40, 65]]]]], [], ["loc", [null, [40, 24], [40, 66]]]], "showEditMenuItemInRow", ["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [41, 34], [41, 42]]]]], [], ["loc", [null, [41, 29], [41, 43]]]], ["get", "showEditMenuItemInRow", ["loc", [null, [41, 44], [41, 65]]]]], [], ["loc", [null, [41, 24], [41, 66]]]], "showDeleteMenuItemInRow", ["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [42, 36], [42, 44]]]]], [], ["loc", [null, [42, 31], [42, 45]]]], ["get", "showDeleteMenuItemInRow", ["loc", [null, [42, 46], [42, 69]]]]], [], ["loc", [null, [42, 26], [42, 70]]]], "menuInRowAdditionalItems", ["subexpr", "@mut", [["get", "menuInRowAdditionalItems", ["loc", [null, [43, 27], [43, 51]]]]], [], []], "rowClickable", ["subexpr", "and", [["subexpr", "not", [["get", "readonly", ["loc", [null, [44, 25], [44, 33]]]]], [], ["loc", [null, [44, 20], [44, 34]]]], ["get", "rowClickable", ["loc", [null, [44, 35], [44, 47]]]]], [], ["loc", [null, [44, 15], [44, 48]]]], "headerClickable", ["subexpr", "@mut", [["get", "orderable", ["loc", [null, [45, 18], [45, 27]]]]], [], []], "sorting", ["subexpr", "@mut", [["get", "sorting", ["loc", [null, [46, 10], [46, 17]]]]], [], []], "immediateDelete", true, "modelName", ["subexpr", "@mut", [["get", "modelName", ["loc", [null, [48, 12], [48, 21]]]]], [], []], "modelProjection", ["subexpr", "@mut", [["get", "modelProjection", ["loc", [null, [49, 18], [49, 33]]]]], [], []], "content", ["subexpr", "@mut", [["get", "content", ["loc", [null, [50, 10], [50, 17]]]]], [], []], "sortByColumn", ["subexpr", "action", [["subexpr", "if", [["get", "this.attrs.sortByColumn", ["loc", [null, [51, 27], [51, 50]]]], ["get", "this.attrs.sortByColumn", ["loc", [null, [51, 51], [51, 74]]]], "sortByColumn"], [], ["loc", [null, [51, 23], [51, 90]]]]], [], ["loc", [null, [51, 15], [51, 91]]]], "addColumnToSorting", ["subexpr", "action", [["subexpr", "if", [["get", "this.attrs.addColumnToSorting", ["loc", [null, [52, 33], [52, 62]]]], ["get", "this.attrs.addColumnToSorting", ["loc", [null, [52, 63], [52, 92]]]], "addColumnToSorting"], [], ["loc", [null, [52, 29], [52, 114]]]]], [], ["loc", [null, [52, 21], [52, 115]]]], "enableFilters", ["subexpr", "@mut", [["get", "enableFilters", ["loc", [null, [53, 16], [53, 29]]]]], [], []], "showFilters", ["subexpr", "@mut", [["get", "_showFilters", ["loc", [null, [54, 14], [54, 26]]]]], [], []], "filters", ["subexpr", "@mut", [["get", "filters", ["loc", [null, [55, 10], [55, 17]]]]], [], []], "applyFilters", ["subexpr", "action", [["subexpr", "if", [["get", "applyFilters", ["loc", [null, [56, 29], [56, 41]]]], ["get", "applyFilters", ["loc", [null, [56, 42], [56, 54]]]], "applyFilters"], [], ["loc", [null, [56, 25], [56, 70]]]]], [], ["loc", [null, [56, 17], [56, 71]]]], "componentForFilter", ["subexpr", "@mut", [["get", "componentForFilter", ["loc", [null, [57, 21], [57, 39]]]]], [], []], "conditionsByType", ["subexpr", "@mut", [["get", "conditionsByType", ["loc", [null, [58, 19], [58, 35]]]]], [], []], "filterByAnyMatch", ["subexpr", "action", [["subexpr", "if", [["get", "this.attrs.filterByAnyMatch", ["loc", [null, [59, 31], [59, 58]]]], ["get", "this.attrs.filterByAnyMatch", ["loc", [null, [59, 59], [59, 86]]]], "filterByAnyMatch"], [], ["loc", [null, [59, 27], [59, 106]]]]], [], ["loc", [null, [59, 19], [59, 107]]]], "configurateRow", ["subexpr", "@mut", [["get", "this.attrs.configurateRow", ["loc", [null, [60, 17], [60, 42]]]]], [], []], "confirmDeleteRow", ["subexpr", "@mut", [["get", "confirmDeleteRow", ["loc", [null, [61, 19], [61, 35]]]]], [], []], "beforeDeleteRecord", ["subexpr", "@mut", [["get", "beforeDeleteRecord", ["loc", [null, [62, 21], [62, 39]]]]], [], []], "action", "objectListViewRowClick", "componentName", ["subexpr", "@mut", [["get", "componentName", ["loc", [null, [64, 16], [64, 29]]]]], [], []], "allowColumnResize", ["subexpr", "@mut", [["get", "allowColumnResize", ["loc", [null, [65, 20], [65, 37]]]]], [], []], "selectedRecord", ["subexpr", "@mut", [["get", "selectedRecord", ["loc", [null, [66, 17], [66, 31]]]]], [], []], "notUseUserSettings", ["subexpr", "@mut", [["get", "notUseUserSettings", ["loc", [null, [67, 21], [67, 39]]]]], [], []], "hierarchicalIndent", ["subexpr", "@mut", [["get", "hierarchicalIndent", ["loc", [null, [68, 21], [68, 39]]]]], [], []], "inHierarchicalMode", ["subexpr", "@mut", [["get", "_inHierarchicalMode", ["loc", [null, [69, 21], [69, 40]]]]], [], []], "disableHierarchicalMode", ["subexpr", "if", [["get", "hierarchyByAttribute", ["loc", [null, [70, 30], [70, 50]]]], true, ["get", "disableHierarchicalMode", ["loc", [null, [70, 56], [70, 79]]]]], [], ["loc", [null, [70, 26], [70, 80]]]], "loadRecords", ["subexpr", "action", ["loadRecords"], [], ["loc", [null, [71, 14], [71, 36]]]], "availableHierarchicalMode", ["subexpr", "action", ["availableHierarchicalMode"], [], ["loc", [null, [72, 28], [72, 64]]]]], ["loc", [null, [28, 0], [73, 2]]]], ["block", "unless", [["get", "_inHierarchicalMode", ["loc", [null, [74, 10], [74, 29]]]]], [], 0, null, ["loc", [null, [74, 0], [95, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/flexberry-simpledatetime", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-simpledatetime.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [1, 13], [1, 17]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonlyAttr", ["loc", [null, [1, 27], [1, 39]]]]], [], []], "value", ["subexpr", "@mut", [["get", "_valueAsString", ["loc", [null, [1, 46], [1, 60]]]]], [], []], "min", ["subexpr", "@mut", [["get", "_minAsString", ["loc", [null, [1, 65], [1, 77]]]]], [], []], "max", ["subexpr", "@mut", [["get", "_maxAsString", ["loc", [null, [1, 82], [1, 94]]]]], [], []]], ["loc", [null, [1, 0], [1, 96]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "readonly", ["subexpr", "if", [["get", "readonly", ["loc", [null, [3, 15], [3, 23]]]], "readonly"], [], ["loc", [null, [3, 11], [3, 35]]]], "required", ["subexpr", "if", [["get", "required", ["loc", [null, [4, 15], [4, 23]]]], "required"], [], ["loc", [null, [4, 11], [4, 35]]]], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [5, 14], [5, 25]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [6, 7], [6, 11]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [7, 7], [7, 11]]]]], [], []], "disabled", ["subexpr", "if", [["get", "disabled", ["loc", [null, [8, 15], [8, 23]]]], "disabled"], [], ["loc", [null, [8, 11], [8, 35]]]], "maxlength", ["subexpr", "@mut", [["get", "maxlength", ["loc", [null, [9, 12], [9, 21]]]]], [], []], "selectionEnd", ["subexpr", "@mut", [["get", "selectionEnd", ["loc", [null, [10, 15], [10, 27]]]]], [], []], "selectionStart", ["subexpr", "@mut", [["get", "selectionStart", ["loc", [null, [11, 17], [11, 31]]]]], [], []], "selectionDirection", ["subexpr", "@mut", [["get", "selectionDirection", ["loc", [null, [12, 21], [12, 39]]]]], [], []], "wrap", ["subexpr", "@mut", [["get", "wrap", ["loc", [null, [13, 7], [13, 11]]]]], [], []], "autofocus", ["subexpr", "if", [["get", "autofocus", ["loc", [null, [14, 16], [14, 25]]]], "autofocus"], [], ["loc", [null, [14, 12], [14, 38]]]], "spellcheck", ["subexpr", "@mut", [["get", "spellcheck", ["loc", [null, [15, 13], [15, 23]]]]], [], []]], ["loc", [null, [1, 0], [16, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-textbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-textbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [2, 7], [2, 11]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 8], [3, 13]]]]], [], []], "readonly", ["subexpr", "if", [["get", "readonly", ["loc", [null, [4, 15], [4, 23]]]], "readonly"], [], ["loc", [null, [4, 11], [4, 35]]]], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [5, 11], [5, 19]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [6, 14], [6, 25]]]]], [], []]], ["loc", [null, [1, 0], [7, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-toggler", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-toggler.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "flexberry-toggler-caption");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(fragment, [2]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [2]), 0, 0);
        morphs[3] = dom.createAttrMorph(element2, 'class');
        morphs[4] = dom.createMorphAt(element2, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["title ", ["subexpr", "if", [["get", "expanded", ["loc", [null, [1, 23], [1, 31]]]], "active"], [], ["loc", [null, [1, 18], [1, 42]]]]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "iconClass", ["loc", [null, [2, 17], [2, 26]]]], ["get", "iconClass", ["loc", [null, [2, 27], [2, 36]]]], "dropdown icon"], [], ["loc", [null, [2, 12], [2, 55]]]]]]], ["content", "currentCaption", ["loc", [null, [2, 101], [2, 119]]]], ["attribute", "class", ["concat", ["content flexberry-toggler-content ", ["subexpr", "if", [["get", "expanded", ["loc", [null, [4, 51], [4, 59]]]], "active"], [], ["loc", [null, [4, 46], [4, 70]]]]]]], ["content", "yield", ["loc", [null, [4, 72], [4, 81]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-validationmessage", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-validationmessage.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "error", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-validationsummary", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/flexberry-validationsummary.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "message", ["loc", [null, [3, 8], [3, 19]]]]],
        locals: ["message"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 5
          }
        },
        "moduleName": "dummy/templates/components/flexberry-validationsummary.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "list");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "messages", ["loc", [null, [2, 10], [2, 18]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/groupedit-toolbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/groupedit-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "plus icon");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'disabled');
          morphs[2] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [2, 22], [2, 33]]]], " button"]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [2, 75], [2, 83]]]]], ["element", "action", ["addRow"], [], ["loc", [null, [2, 44], [2, 63]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/groupedit-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "minus icon");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'disabled');
          morphs[2] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["subexpr", "if", [["get", "_isDeleteRowsEnabled", ["loc", [null, [5, 25], [5, 45]]]], "", "disabled"], [], ["loc", [null, [5, 20], [5, 61]]]], " ", ["get", "buttonClass", ["loc", [null, [5, 64], [5, 75]]]], " button"]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [5, 97], [5, 105]]]]], ["element", "action", ["deleteRows"], [], ["loc", [null, [5, 108], [5, 131]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/groupedit-toolbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "createNewButton", ["loc", [null, [1, 6], [1, 21]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "deleteButton", ["loc", [null, [4, 6], [4, 18]]]]], [], 1, null, ["loc", [null, [4, 0], [6, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/components/modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "ui centered image");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [9, 8], [9, 17]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 15,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "description");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [13, 8], [13, 17]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 6
                },
                "end": {
                  "line": 23,
                  "column": 6
                }
              },
              "moduleName": "dummy/templates/components/modal-dialog.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1, "type", "button");
              dom.setAttribute(el1, "class", "ui cancel button");
              dom.setAttribute(el1, "data-dismiss", "modal");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["inline", "t", ["components.modal-dialog.close-button-text"], [], ["loc", [null, [21, 10], [21, 59]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 24,
                  "column": 6
                },
                "end": {
                  "line": 28,
                  "column": 6
                }
              },
              "moduleName": "dummy/templates/components/modal-dialog.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1, "type", "button");
              dom.setAttribute(el1, "class", "ui positive button");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["inline", "t", ["components.modal-dialog.ok-button-text"], [], ["loc", [null, [26, 10], [26, 56]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 30,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "actions");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createMorphAt(element0, 2, 2);
            return morphs;
          },
          statements: [["block", "if", [["get", "useCloseButton", ["loc", [null, [19, 12], [19, 26]]]]], [], 0, null, ["loc", [null, [19, 6], [23, 13]]]], ["block", "if", [["get", "useOkButton", ["loc", [null, [24, 12], [24, 23]]]]], [], 1, null, ["loc", [null, [24, 6], [28, 13]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 31,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "close icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [5]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createAttrMorph(element1, 'class');
          morphs[2] = dom.createMorphAt(element1, 1, 1);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [4, 4], [4, 13]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "viewImageContent", ["loc", [null, [6, 19], [6, 35]]]], "image", ""], [], ["loc", [null, [6, 14], [6, 48]]]], " content"]]], ["block", "if", [["get", "viewImageContent", ["loc", [null, [7, 10], [7, 26]]]]], [], 0, 1, ["loc", [null, [7, 4], [15, 11]]]], ["block", "if", [["get", "toolbarVisible", ["loc", [null, [17, 8], [17, 22]]]]], [], 2, null, ["loc", [null, [17, 2], [30, 9]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ui-modal", [], ["class", ["subexpr", "concat", ["flexberry-modal ", ["get", "sizeClass", ["loc", [null, [1, 45], [1, 54]]]]], [], ["loc", [null, [1, 18], [1, 55]]]]], 0, null, ["loc", [null, [1, 0], [31, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/object-list-view-cell", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 18
          }
        },
        "moduleName": "dummy/templates/components/object-list-view-cell.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "formattedValue", ["loc", [null, [1, 0], [1, 18]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/object-list-view-header-cell", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-header-cell.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "t", [["get", "column.keyLocale", ["loc", [null, [4, 8], [4, 24]]]]], [], ["loc", [null, [4, 4], [4, 26]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-header-cell.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "column.header", ["loc", [null, [6, 4], [6, 21]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 6
              },
              "end": {
                "line": 15,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-header-cell.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "title", "Order ascending");
            var el2 = dom.createTextNode("\n        ▲");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "column.sortNumber", ["loc", [null, [13, 9], [13, 30]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 6
              },
              "end": {
                "line": 19,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-header-cell.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "title", "Order descending");
            var el2 = dom.createTextNode("\n        ▼");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "column.sortNumber", ["loc", [null, [17, 9], [17, 30]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 21,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-header-cell.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "float:right;");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "column.sortAscending", ["loc", [null, [11, 12], [11, 32]]]]], [], 0, 1, ["loc", [null, [11, 6], [19, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/object-list-view-header-cell.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "title", "Click to change ordering, Ctrl+Click to append ordering for this column");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'data-olv-header-property-name');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "data-olv-header-property-name", ["get", "column.propName", ["loc", [null, [1, 37], [1, 52]]]]], ["block", "if", [["get", "column.keyLocale", ["loc", [null, [3, 8], [3, 24]]]]], [], 0, 1, ["loc", [null, [3, 2], [7, 9]]]], ["block", "if", [["get", "column.sorted", ["loc", [null, [9, 8], [9, 21]]]]], [], 2, null, ["loc", [null, [9, 2], [21, 9]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/components/object-list-view-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "cell");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element4, 'class');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["asterisk small red icon ", ["subexpr", "unless", [["get", "record.data.hasDirtyAttributes", ["loc", [null, [8, 55], [8, 85]]]], "transparent"], [], ["loc", [null, [8, 46], [8, 101]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "cell");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "flexberry-checkbox", [], ["readonly", ["subexpr", "or", [["get", "readonly", ["loc", [null, [14, 27], [14, 35]]]], ["subexpr", "not", [["get", "record.rowConfig.canBeSelected", ["loc", [null, [14, 41], [14, 71]]]]], [], ["loc", [null, [14, 36], [14, 72]]]]], [], ["loc", [null, [14, 23], [14, 73]]]], "onChange", ["subexpr", "action", [["get", "selectRow", ["loc", [null, [15, 31], [15, 40]]]], ["get", "record", ["loc", [null, [15, 41], [15, 47]]]]], [], ["loc", [null, [15, 23], [15, 48]]]]], ["loc", [null, [13, 12], [16, 14]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 8
              },
              "end": {
                "line": 25,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "cell");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("i");
            dom.setAttribute(el3, "class", "minus icon");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element3, 'class');
            morphs[1] = dom.createElementMorph(element3);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [21, 32], [21, 43]]]], " ", ["subexpr", "if", [["subexpr", "or", [["get", "readonly", ["loc", [null, [21, 55], [21, 63]]]], ["subexpr", "not", [["get", "record.rowConfig.canBeDeleted", ["loc", [null, [21, 69], [21, 98]]]]], [], ["loc", [null, [21, 64], [21, 99]]]]], [], ["loc", [null, [21, 51], [21, 100]]]], "disabled"], [], ["loc", [null, [21, 46], [21, 113]]]], " button"]]], ["element", "action", [["get", "deleteRow", ["loc", [null, [21, 131], [21, 140]]]], ["get", "record", ["loc", [null, [21, 141], [21, 147]]]]], [], ["loc", [null, [21, 122], [21, 149]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 27,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "object-list-view-helper-column-cell");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element5, 1, 1);
          morphs[1] = dom.createMorphAt(element5, 2, 2);
          morphs[2] = dom.createMorphAt(element5, 3, 3);
          return morphs;
        },
        statements: [["block", "if", [["get", "showAsteriskInRow", ["loc", [null, [6, 14], [6, 31]]]]], [], 0, null, ["loc", [null, [6, 8], [10, 15]]]], ["block", "if", [["get", "showCheckBoxInRow", ["loc", [null, [11, 14], [11, 31]]]]], [], 1, null, ["loc", [null, [11, 8], [18, 15]]]], ["block", "if", [["get", "showDeleteButtonInRow", ["loc", [null, [19, 14], [19, 35]]]]], [], 2, null, ["loc", [null, [19, 8], [25, 15]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 8
                },
                "end": {
                  "line": 37,
                  "column": 8
                }
              },
              "moduleName": "dummy/templates/components/object-list-view-row.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("i");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var element1 = dom.childAt(element0, [1]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element0, 'class');
              morphs[1] = dom.createElementMorph(element0);
              morphs[2] = dom.createAttrMorph(element1, 'class');
              return morphs;
            },
            statements: [["attribute", "class", ["concat", ["ui button icon mini ", ["get", "buttonClass", ["loc", [null, [34, 47], [34, 58]]]]]]], ["element", "action", ["expand"], ["bubbles", false], ["loc", [null, [34, 62], [34, 95]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "_expanded", ["loc", [null, [35, 27], [35, 36]]]], "minus", "plus"], [], ["loc", [null, [35, 22], [35, 53]]]], " icon"]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 6
              },
              "end": {
                "line": 38,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "hierarchicalIndent", ["loc", [null, [32, 8], [32, 30]]]], ["block", "if", [["get", "hasRecords", ["loc", [null, [33, 14], [33, 24]]]]], [], 0, null, ["loc", [null, [33, 8], [37, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 2
            },
            "end": {
              "line": 47,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element2, 1, 1);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          return morphs;
        },
        statements: [["element", "action", [["get", "rowClick", ["loc", [null, [30, 17], [30, 25]]]], ["get", "record", ["loc", [null, [30, 26], [30, 32]]]]], ["preventDefault", false], ["loc", [null, [30, 8], [30, 55]]]], ["block", "if", [["subexpr", "and", [["subexpr", "not", [["get", "index", ["loc", [null, [31, 22], [31, 27]]]]], [], ["loc", [null, [31, 17], [31, 28]]]], ["get", "inHierarchicalMode", ["loc", [null, [31, 29], [31, 47]]]]], [], ["loc", [null, [31, 12], [31, 48]]]]], [], 0, null, ["loc", [null, [31, 6], [38, 13]]]], ["inline", "component", [["get", "column.cellComponent.componentName", ["loc", [null, [39, 18], [39, 52]]]]], ["dynamicProperties", ["subexpr", "@mut", [["get", "column.cellComponent.componentProperties", ["loc", [null, [40, 26], [40, 66]]]]], [], []], "relatedModel", ["subexpr", "@mut", [["get", "record.data", ["loc", [null, [41, 21], [41, 32]]]]], [], []], "value", ["subexpr", "mut", [["subexpr", "get", [["get", "record.data", ["loc", [null, [42, 24], [42, 35]]]], ["get", "column.propName", ["loc", [null, [42, 36], [42, 51]]]]], [], ["loc", [null, [42, 19], [42, 52]]]]], [], ["loc", [null, [42, 14], [42, 53]]]], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [43, 17], [43, 25]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [44, 17], [44, 25]]]]], [], []]], ["loc", [null, [39, 6], [45, 8]]]]],
        locals: ["column", "index"],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 2
            },
            "end": {
              "line": 57,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          dom.setAttribute(el1, "class", "object-list-view-menu");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "flexberry-menu", [], ["class", "basic right pointing", "callItemsOnClickCallbacks", false, "configurateItems", ["subexpr", "action", [["get", "menuInRowConfigurateItems", ["loc", [null, [53, 33], [53, 58]]]], ["get", "record", ["loc", [null, [53, 59], [53, 65]]]]], [], ["loc", [null, [53, 25], [53, 66]]]], "onItemClick", ["subexpr", "action", [["get", "menuInRowItemClick", ["loc", [null, [54, 28], [54, 46]]]], ["get", "record", ["loc", [null, [54, 47], [54, 53]]]]], [], ["loc", [null, [54, 20], [54, 54]]]]], ["loc", [null, [50, 6], [55, 8]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 60,
                "column": 2
              },
              "end": {
                "line": 82,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "object-list-view-row", [], ["record", ["subexpr", "@mut", [["get", "record", ["loc", [null, [62, 13], [62, 19]]]]], [], []], "columns", ["subexpr", "@mut", [["get", "columns", ["loc", [null, [63, 14], [63, 21]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [64, 15], [64, 23]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [65, 15], [65, 23]]]]], [], []], "showMenuColumn", ["subexpr", "@mut", [["get", "showMenuColumn", ["loc", [null, [66, 21], [66, 35]]]]], [], []], "showHelperColumn", ["subexpr", "@mut", [["get", "showHelperColumn", ["loc", [null, [67, 23], [67, 39]]]]], [], []], "defaultRowConfig", ["subexpr", "@mut", [["get", "defaultRowConfig", ["loc", [null, [68, 23], [68, 39]]]]], [], []], "showAsteriskInRow", ["subexpr", "@mut", [["get", "showAsteriskInRow", ["loc", [null, [69, 24], [69, 41]]]]], [], []], "showCheckBoxInRow", ["subexpr", "@mut", [["get", "showCheckBoxInRow", ["loc", [null, [70, 24], [70, 41]]]]], [], []], "showDeleteButtonInRow", ["subexpr", "@mut", [["get", "showDeleteButtonInRow", ["loc", [null, [71, 28], [71, 49]]]]], [], []], "inHierarchicalMode", ["subexpr", "@mut", [["get", "inHierarchicalMode", ["loc", [null, [72, 25], [72, 43]]]]], [], []], "loadRecords", ["subexpr", "@mut", [["get", "loadRecords", ["loc", [null, [73, 18], [73, 29]]]]], [], []], "rowClick", ["subexpr", "@mut", [["get", "rowClick", ["loc", [null, [74, 15], [74, 23]]]]], [], []], "selectRow", ["subexpr", "@mut", [["get", "selectRow", ["loc", [null, [75, 16], [75, 25]]]]], [], []], "deleteRow", ["subexpr", "@mut", [["get", "deleteRow", ["loc", [null, [76, 16], [76, 25]]]]], [], []], "menuInRowItemClick", ["subexpr", "@mut", [["get", "menuInRowItemClick", ["loc", [null, [77, 25], [77, 43]]]]], [], []], "menuInRowConfigurateItems", ["subexpr", "@mut", [["get", "menuInRowConfigurateItems", ["loc", [null, [78, 32], [78, 57]]]]], [], []], "_currentLevel", ["subexpr", "@mut", [["get", "_currentLevel", ["loc", [null, [79, 20], [79, 33]]]]], [], []], "hierarchicalIndent", ["subexpr", "@mut", [["get", "_hierarchicalIndent", ["loc", [null, [80, 25], [80, 44]]]]], [], []]], ["loc", [null, [61, 4], [81, 6]]]]],
          locals: ["record"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 59,
              "column": 0
            },
            "end": {
              "line": 83,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "records", ["loc", [null, [60, 10], [60, 17]]]]], ["key", "key"], 0, null, ["loc", [null, [60, 2], [82, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 84,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/object-list-view-row.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "hidden");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0]);
        var element7 = dom.childAt(element6, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element6, 'class');
        morphs[1] = dom.createAttrMorph(element7, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element7, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(element7, 3, 3);
        morphs[4] = dom.createMorphAt(element6, 3, 3);
        morphs[5] = dom.createMorphAt(element6, 4, 4);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "record.rowConfig.customClass", ["loc", [null, [1, 13], [1, 41]]]]]]], ["attribute", "class", ["concat", ["object-list-view-helper-column ", ["subexpr", "unless", [["get", "showHelperColumn", ["loc", [null, [2, 53], [2, 69]]]], "hidden"], [], ["loc", [null, [2, 44], [2, 80]]]]]]], ["content", "record.key", ["loc", [null, [3, 24], [3, 38]]]], ["block", "if", [["get", "showHelperColumn", ["loc", [null, [4, 10], [4, 26]]]]], [], 0, null, ["loc", [null, [4, 4], [27, 11]]]], ["block", "each", [["get", "columns", ["loc", [null, [29, 10], [29, 17]]]]], [], 1, null, ["loc", [null, [29, 2], [47, 11]]]], ["block", "if", [["get", "showMenuColumn", ["loc", [null, [48, 8], [48, 22]]]]], [], 2, null, ["loc", [null, [48, 2], [57, 9]]]], ["block", "if", [["subexpr", "and", [["get", "_expanded", ["loc", [null, [59, 11], [59, 20]]]], ["get", "inHierarchicalMode", ["loc", [null, [59, 21], [59, 39]]]]], [], ["loc", [null, [59, 6], [59, 40]]]]], [], 3, null, ["loc", [null, [59, 0], [83, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/components/object-list-view-single-column-cell", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/object-list-view-single-column-cell.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(":");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["inline fields ", ["subexpr", "if", [["subexpr", "not", [["get", "hasEditableValues", ["loc", [null, [2, 38], [2, 55]]]]], [], ["loc", [null, [2, 33], [2, 56]]]], "readonly"], [], ["loc", [null, [2, 28], [2, 69]]]]]]], ["content", "column.header", ["loc", [null, [3, 11], [3, 28]]]], ["inline", "component", [["get", "column.cellComponent.componentName", ["loc", [null, [4, 16], [4, 50]]]]], ["dynamicProperties", ["subexpr", "@mut", [["get", "column.cellComponent.componentProperties", ["loc", [null, [5, 24], [5, 64]]]]], [], []], "relatedModel", ["subexpr", "@mut", [["get", "model", ["loc", [null, [6, 19], [6, 24]]]]], [], []], "value", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [7, 22], [7, 27]]]], ["get", "column.propName", ["loc", [null, [7, 28], [7, 43]]]]], [], ["loc", [null, [7, 17], [7, 44]]]]], [], ["loc", [null, [7, 12], [7, 45]]]], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [8, 15], [8, 23]]]]], [], []]], ["loc", [null, [4, 4], [9, 6]]]]],
        locals: ["column"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/object-list-view-single-column-cell.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "columns", ["loc", [null, [1, 8], [1, 15]]]]], [], 0, null, ["loc", [null, [1, 0], [11, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/object-list-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "ui-message", [], ["type", "error", "closeable", true, "visible", true, "title", "Error occurred", "message", ["subexpr", "@mut", [["get", "currentError", ["loc", [null, [8, 14], [8, 26]]]]], [], []]], ["loc", [null, [3, 4], [9, 6]]]]],
          locals: ["currentError"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "errorMessages", ["loc", [null, [2, 10], [2, 23]]]]], [], 0, null, ["loc", [null, [2, 2], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 8
            },
            "end": {
              "line": 21,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", [["get", "headerCellComponent.componentName", ["loc", [null, [17, 22], [17, 55]]]]], ["column", ["subexpr", "@mut", [["get", "column", ["loc", [null, [18, 19], [18, 25]]]]], [], []], "dynamicProperties", ["subexpr", "@mut", [["get", "headerCellComponent.componentProperties", ["loc", [null, [19, 30], [19, 69]]]]], [], []]], ["loc", [null, [17, 10], [20, 12]]]]],
        locals: ["column"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 6
            },
            "end": {
              "line": 24,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("th");
          dom.setAttribute(el1, "class", "object-list-view-menu collapsing");
          dom.setAttribute(el1, "data-olv-header-property-name", "OlvRowMenu");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 12
                },
                "end": {
                  "line": 41,
                  "column": 12
                }
              },
              "moduleName": "dummy/templates/components/object-list-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "component", ["flexberry-dropdown"], ["value", ["subexpr", "@mut", [["get", "column.filter.condition", ["loc", [null, [35, 22], [35, 45]]]]], [], []], "items", ["subexpr", "@mut", [["get", "column.filter.conditions", ["loc", [null, [36, 22], [36, 46]]]]], [], []], "class", "compact fluid", "placeholder", "", "needChecksOnValue", false], ["loc", [null, [34, 14], [40, 16]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 8
              },
              "end": {
                "line": 43,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "if", [["get", "column.filter.conditions", ["loc", [null, [33, 18], [33, 42]]]]], [], 0, null, ["loc", [null, [33, 12], [41, 19]]]]],
          locals: ["column"],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 44,
                "column": 8
              },
              "end": {
                "line": 46,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1, "rowspan", "2");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 51,
                  "column": 12
                },
                "end": {
                  "line": 56,
                  "column": 12
                }
              },
              "moduleName": "dummy/templates/components/object-list-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "component", [["get", "column.filter.component.name", ["loc", [null, [52, 26], [52, 54]]]]], ["value", ["subexpr", "@mut", [["get", "column.filter.pattern", ["loc", [null, [53, 22], [53, 43]]]]], [], []], "dynamicProperties", ["subexpr", "@mut", [["get", "column.filter.component.properties", ["loc", [null, [54, 34], [54, 68]]]]], [], []]], ["loc", [null, [52, 14], [55, 16]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 8
              },
              "end": {
                "line": 58,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "if", [["get", "column.filter.component.name", ["loc", [null, [51, 18], [51, 46]]]]], [], 0, null, ["loc", [null, [51, 12], [56, 19]]]]],
          locals: ["column"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 4
            },
            "end": {
              "line": 60,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "rowspan", "2");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element2, 'class');
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          morphs[2] = dom.createMorphAt(element1, 4, 4);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "unless", [["subexpr", "and", [["get", "showHelperColumn", ["loc", [null, [30, 45], [30, 61]]]], ["get", "hasContent", ["loc", [null, [30, 62], [30, 72]]]]], [], ["loc", [null, [30, 40], [30, 73]]]], "hidden"], [], ["loc", [null, [30, 31], [30, 84]]]]]]], ["block", "each", [["get", "columns", ["loc", [null, [31, 16], [31, 23]]]]], [], 0, null, ["loc", [null, [31, 8], [43, 17]]]], ["block", "if", [["get", "showMenuColumn", ["loc", [null, [44, 14], [44, 28]]]]], [], 1, null, ["loc", [null, [44, 8], [46, 15]]]], ["block", "each", [["get", "columns", ["loc", [null, [49, 16], [49, 23]]]]], [], 2, null, ["loc", [null, [49, 8], [58, 17]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 61,
              "column": 4
            },
            "end": {
              "line": 65,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "style", "text-align:center;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'colspan');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "colspan", ["concat", [["get", "colspan", ["loc", [null, [63, 23], [63, 30]]]]]]], ["content", "placeholder", ["loc", [null, [63, 61], [63, 76]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 66,
              "column": 4
            },
            "end": {
              "line": 87,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "object-list-view-row", [], ["record", ["subexpr", "@mut", [["get", "record", ["loc", [null, [68, 15], [68, 21]]]]], [], []], "columns", ["subexpr", "@mut", [["get", "columns", ["loc", [null, [69, 16], [69, 23]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [70, 17], [70, 25]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [71, 17], [71, 25]]]]], [], []], "showMenuColumn", ["subexpr", "@mut", [["get", "showMenuColumn", ["loc", [null, [72, 23], [72, 37]]]]], [], []], "showHelperColumn", ["subexpr", "@mut", [["get", "showHelperColumn", ["loc", [null, [73, 25], [73, 41]]]]], [], []], "defaultRowConfig", ["subexpr", "@mut", [["get", "defaultRowConfig", ["loc", [null, [74, 25], [74, 41]]]]], [], []], "showAsteriskInRow", ["subexpr", "@mut", [["get", "showAsteriskInRow", ["loc", [null, [75, 26], [75, 43]]]]], [], []], "showCheckBoxInRow", ["subexpr", "@mut", [["get", "showCheckBoxInRow", ["loc", [null, [76, 26], [76, 43]]]]], [], []], "showDeleteButtonInRow", ["subexpr", "@mut", [["get", "showDeleteButtonInRow", ["loc", [null, [77, 30], [77, 51]]]]], [], []], "hierarchicalIndent", ["subexpr", "@mut", [["get", "hierarchicalIndent", ["loc", [null, [78, 27], [78, 45]]]]], [], []], "inHierarchicalMode", ["subexpr", "@mut", [["get", "inHierarchicalMode", ["loc", [null, [79, 27], [79, 45]]]]], [], []], "loadRecords", ["subexpr", "@mut", [["get", "loadRecords", ["loc", [null, [80, 20], [80, 31]]]]], [], []], "rowClick", ["subexpr", "action", ["rowClick"], [], ["loc", [null, [81, 17], [81, 36]]]], "selectRow", ["subexpr", "action", ["selectRow"], [], ["loc", [null, [82, 18], [82, 38]]]], "deleteRow", ["subexpr", "action", ["deleteRow"], [], ["loc", [null, [83, 18], [83, 38]]]], "menuInRowItemClick", ["subexpr", "action", ["menuInRowItemClick"], [], ["loc", [null, [84, 27], [84, 56]]]], "menuInRowConfigurateItems", ["subexpr", "action", ["menuInRowConfigurateItems"], [], ["loc", [null, [85, 34], [85, 70]]]]], ["loc", [null, [67, 6], [86, 8]]]]],
        locals: ["record"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 90,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/object-list-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "data-olv-header-property-name", "OlvRowToolbar");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [1, 1]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element3, [3]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element3, 'class');
        morphs[2] = dom.createAttrMorph(element5, 'class');
        morphs[3] = dom.createMorphAt(element4, 3, 3);
        morphs[4] = dom.createMorphAt(element4, 4, 4);
        morphs[5] = dom.createMorphAt(element6, 1, 1);
        morphs[6] = dom.createMorphAt(element6, 2, 2);
        morphs[7] = dom.createMorphAt(element6, 3, 3);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "errorMessages", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [11, 7]]]], ["attribute", "class", ["concat", ["object-list-view ui unstackable celled ", ["subexpr", "if", [["get", "readonly", ["loc", [null, [12, 58], [12, 66]]]], "readonly"], [], ["loc", [null, [12, 53], [12, 79]]]], " ", ["get", "tableClass", ["loc", [null, [12, 82], [12, 92]]]], " table"]]], ["attribute", "class", ["concat", ["object-list-view-operations collapsing ", ["subexpr", "unless", [["get", "showHelperColumn", ["loc", [null, [15, 65], [15, 81]]]], "hidden"], [], ["loc", [null, [15, 56], [15, 92]]]]]]], ["block", "each", [["get", "columns", ["loc", [null, [16, 16], [16, 23]]]]], [], 1, null, ["loc", [null, [16, 8], [21, 17]]]], ["block", "if", [["get", "showMenuColumn", ["loc", [null, [22, 12], [22, 26]]]]], [], 2, null, ["loc", [null, [22, 6], [24, 13]]]], ["block", "if", [["get", "showFilters", ["loc", [null, [28, 10], [28, 21]]]]], [], 3, null, ["loc", [null, [28, 4], [60, 11]]]], ["block", "unless", [["get", "hasContent", ["loc", [null, [61, 14], [61, 24]]]]], [], 4, null, ["loc", [null, [61, 4], [65, 15]]]], ["block", "each", [["get", "contentWithKeys", ["loc", [null, [66, 12], [66, 27]]]]], ["key", "key"], 5, null, ["loc", [null, [66, 4], [87, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("dummy/templates/components/olv-setconfigdialogbutton", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/olv-setconfigdialogbutton.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "ui button");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "large setting icon");
        dom.setAttribute(el2, "title", "customize column views");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["choose", ["get", "chooseData", ["loc", [null, [1, 44], [1, 54]]]]], [], ["loc", [null, [1, 26], [1, 56]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/olv-toolbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element12 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element12, 'class');
          morphs[1] = dom.createElementMorph(element12);
          morphs[2] = dom.createMorphAt(element12, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [2, 22], [2, 33]]]], " button"]]], ["element", "action", ["refresh"], [], ["loc", [null, [2, 44], [2, 64]]]], ["inline", "t", ["components.olv-toolbar.refresh-button-text"], [], ["loc", [null, [3, 4], [3, 54]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element11 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element11, 'class');
          morphs[1] = dom.createElementMorph(element11);
          morphs[2] = dom.createMorphAt(element11, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [7, 22], [7, 33]]]], " ", ["subexpr", "if", [["get", "enableCreateNewButton", ["loc", [null, [7, 41], [7, 62]]]], "", "disabled"], [], ["loc", [null, [7, 36], [7, 78]]]], " button"]]], ["element", "action", ["createNew"], [], ["loc", [null, [7, 87], [7, 109]]]], ["inline", "t", ["components.olv-toolbar.add-button-text"], [], ["loc", [null, [8, 4], [8, 50]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element10 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element10, 'class');
          morphs[1] = dom.createElementMorph(element10);
          morphs[2] = dom.createMorphAt(element10, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [12, 22], [12, 33]]]], " ", ["subexpr", "if", [["get", "isDeleteButtonEnabled", ["loc", [null, [12, 41], [12, 62]]]], "", "disabled"], [], ["loc", [null, [12, 36], [12, 78]]]], " button"]]], ["element", "action", ["delete"], [], ["loc", [null, [12, 87], [12, 106]]]], ["inline", "t", ["components.olv-toolbar.delete-button-text"], [], ["loc", [null, [13, 4], [13, 53]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "sitemap icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element9 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element9, 'class');
          morphs[1] = dom.createElementMorph(element9);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui button icon ", ["get", "buttonClass", ["loc", [null, [17, 34], [17, 45]]]], " ", ["subexpr", "if", [["get", "inHierarchicalMode", ["loc", [null, [17, 53], [17, 71]]]], "active"], [], ["loc", [null, [17, 48], [17, 82]]]]]]], ["element", "action", [["get", "switchHierarchicalMode", ["loc", [null, [17, 93], [17, 115]]]]], [], ["loc", [null, [17, 84], [17, 117]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 4
              },
              "end": {
                "line": 31,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/olv-toolbar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "or");
            dom.setAttribute(el1, "data-text", "•");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "remove icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [3]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element6, 'class');
            morphs[1] = dom.createElementMorph(element6);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["ui button ", ["get", "buttonClass", ["loc", [null, [28, 33], [28, 44]]]]]]], ["element", "action", [["get", "resetFilters", ["loc", [null, [28, 57], [28, 69]]]]], [], ["loc", [null, [28, 48], [28, 71]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui icon input buttons");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "filter icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(element7, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element8, 'class');
          morphs[1] = dom.createElementMorph(element8);
          morphs[2] = dom.createMorphAt(element7, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui button ", ["get", "buttonClass", ["loc", [null, [23, 31], [23, 42]]]], " ", ["subexpr", "if", [["get", "showFilters", ["loc", [null, [23, 50], [23, 61]]]], "active"], [], ["loc", [null, [23, 45], [23, 72]]]]]]], ["element", "action", [["get", "toggleStateFilters", ["loc", [null, [23, 83], [23, 101]]]]], [], ["loc", [null, [23, 74], [23, 103]]]], ["block", "if", [["get", "filters", ["loc", [null, [26, 10], [26, 17]]]]], [], 0, null, ["loc", [null, [26, 4], [31, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 0
            },
            "end": {
              "line": 48,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui action input");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "search icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "remove icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [3]);
          var element5 = dom.childAt(element3, [5]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(element3, 1, 1);
          morphs[1] = dom.createAttrMorph(element4, 'class');
          morphs[2] = dom.createElementMorph(element4);
          morphs[3] = dom.createAttrMorph(element5, 'class');
          morphs[4] = dom.createElementMorph(element5);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "placeholder", ["subexpr", "t", ["components.olv-toolbar.filter-by-any-match-placeholder"], [], ["loc", [null, [38, 18], [38, 78]]]], "value", ["subexpr", "@mut", [["get", "filterByAnyMatchText", ["loc", [null, [39, 12], [39, 32]]]]], [], []], "enter", "filterByAnyMatch"], ["loc", [null, [36, 4], [40, 6]]]], ["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [41, 24], [41, 35]]]], " icon button"]]], ["element", "action", ["filterByAnyMatch"], [], ["loc", [null, [41, 51], [41, 80]]]], ["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [44, 24], [44, 35]]]], " icon button"]]], ["element", "action", ["removeFilter"], [], ["loc", [null, [44, 51], [44, 76]]]]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 4
              },
              "end": {
                "line": 59,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/olv-toolbar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "flexberry-menu", [], ["items", ["subexpr", "@mut", [["get", "colsSettingsItems", ["loc", [null, [56, 14], [56, 31]]]]], [], []], "onItemClick", ["subexpr", "action", ["onMenuItemClick"], [], ["loc", [null, [57, 20], [57, 46]]]]], ["loc", [null, [55, 6], [58, 8]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 0
            },
            "end": {
              "line": 61,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui buttons");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui icon button");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "large table icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["showConfigDialog"], [], ["loc", [null, [51, 35], [51, 64]]]], ["block", "if", [["get", "colsSettingsItems", ["loc", [null, [54, 10], [54, 27]]]]], [], 0, null, ["loc", [null, [54, 4], [59, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 62,
              "column": 0
            },
            "end": {
              "line": 68,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/olv-toolbar.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui ", ["subexpr", "if", [["get", "customButton.buttonClasses", ["loc", [null, [64, 19], [64, 45]]]], ["get", "customButton.buttonClasses", ["loc", [null, [64, 46], [64, 72]]]], ""], [], ["loc", [null, [64, 14], [64, 77]]]], " button"]]], ["element", "action", ["customButtonAction", ["get", "customButton.buttonAction", ["loc", [null, [65, 34], [65, 59]]]]], [], ["loc", [null, [65, 4], [65, 61]]]], ["inline", "if", [["get", "customButton.buttonName", ["loc", [null, [66, 9], [66, 32]]]], ["get", "customButton.buttonName", ["loc", [null, [66, 33], [66, 56]]]], ["subexpr", "t", ["components.olv-toolbar.custom-button-text"], [], ["loc", [null, [66, 57], [66, 104]]]]], [], ["loc", [null, [66, 4], [66, 106]]]]],
        locals: ["customButton"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 93,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/olv-toolbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "olv-toolbar-info-modal-dialog ui small basic modal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui icon header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "olvt icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "center aligned ui grid");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "ui icon button");
        dom.setAttribute(el3, "id", "OLVToolbarInfoCopyButton");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "copy icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "actions");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "olv-toolbar-info-modal-dialog-ok-button ui approve green inverted button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "remove icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui form");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "olv-toolbar-info-modal-dialog-content center aligned ui field");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("textarea");
        dom.setAttribute(el4, "id", "OLVToolbarInfoContent");
        dom.setAttribute(el4, "cols", "80");
        dom.setAttribute(el4, "rows", "20");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element13 = dom.childAt(fragment, [8]);
        var element14 = dom.childAt(element13, [3]);
        var element15 = dom.childAt(element14, [1]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        morphs[6] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        morphs[8] = dom.createMorphAt(dom.childAt(element13, [1]), 3, 3);
        morphs[9] = dom.createElementMorph(element15);
        morphs[10] = dom.createMorphAt(element15, 3, 3);
        morphs[11] = dom.createMorphAt(dom.childAt(element14, [3, 1]), 3, 3);
        morphs[12] = dom.createMorphAt(dom.childAt(element13, [5, 1, 1]), 0, 0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "refreshButton", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "if", [["get", "createNewButton", ["loc", [null, [6, 6], [6, 21]]]]], [], 1, null, ["loc", [null, [6, 0], [10, 7]]]], ["block", "if", [["get", "deleteButton", ["loc", [null, [11, 6], [11, 18]]]]], [], 2, null, ["loc", [null, [11, 0], [15, 7]]]], ["block", "if", [["get", "availableHierarchicalMode", ["loc", [null, [16, 6], [16, 31]]]]], [], 3, null, ["loc", [null, [16, 0], [20, 7]]]], ["block", "if", [["get", "enableFilters", ["loc", [null, [21, 6], [21, 19]]]]], [], 4, null, ["loc", [null, [21, 0], [33, 7]]]], ["block", "if", [["get", "filterButton", ["loc", [null, [34, 6], [34, 18]]]]], [], 5, null, ["loc", [null, [34, 0], [48, 7]]]], ["block", "if", [["get", "colsConfigButton", ["loc", [null, [49, 6], [49, 22]]]]], [], 6, null, ["loc", [null, [49, 0], [61, 7]]]], ["block", "each", [["get", "customButtons", ["loc", [null, [62, 8], [62, 21]]]]], [], 7, null, ["loc", [null, [62, 0], [68, 9]]]], ["content", "_infoModalDialogCaption", ["loc", [null, [72, 4], [72, 31]]]], ["element", "action", ["copyJSONContent"], [], ["loc", [null, [75, 33], [75, 61]]]], ["inline", "t", ["components.olv-toolbar.copy"], [], ["loc", [null, [77, 6], [77, 41]]]], ["inline", "t", ["components.olv-toolbar.close"], [], ["loc", [null, [82, 8], [82, 44]]]], ["content", "_infoModalDialogContent", ["loc", [null, [88, 63], [88, 90]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
define("dummy/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ui-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'checked');
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createAttrMorph(element0, 'data-id');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [1, 28], [1, 32]]]]], ["attribute", "checked", ["get", "checked", ["loc", [null, [1, 45], [1, 52]]]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [1, 66], [1, 74]]]]], ["attribute", "data-id", ["get", "data-id", ["loc", [null, [1, 87], [1, 94]]]]], ["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/ui-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ui-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/ui-message-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/ui-message-content.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "caption", ["loc", [null, [2, 22], [2, 33]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/ui-message-content.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "message", ["loc", [null, [5, 5], [5, 16]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ui-message-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "caption", ["loc", [null, [1, 6], [1, 13]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "message", ["loc", [null, [4, 6], [4, 13]]]]], [], 1, null, ["loc", [null, [4, 0], [6, 7]]]], ["content", "yield", ["loc", [null, [7, 0], [7, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/components/ui-message", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/ui-message.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [2, 14], [2, 18]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/ui-message.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "close icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/ui-message.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "content");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "partial", ["components/ui-message-content"], [], ["loc", [null, [9, 4], [9, 47]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/ui-message.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "partial", ["components/ui-message-content"], [], ["loc", [null, [12, 2], [12, 45]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ui-message.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "closeable", ["loc", [null, [4, 6], [4, 15]]]]], [], 1, null, ["loc", [null, [4, 0], [6, 7]]]], ["block", "if", [["get", "icon", ["loc", [null, [7, 6], [7, 10]]]]], [], 2, 3, ["loc", [null, [7, 0], [13, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/components/ui-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ui-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/ui-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ui-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'checked');
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createAttrMorph(element0, 'data-id');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [1, 28], [1, 32]]]]], ["attribute", "checked", ["get", "checked", ["loc", [null, [1, 45], [1, 52]]]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [1, 66], [1, 74]]]]], ["attribute", "data-id", ["get", "data-id", ["loc", [null, [1, 87], [1, 94]]]]], ["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/flexberry-file-view-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/flexberry-file-view-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "flexberry-file-view-dialog");
          dom.setAttribute(el1, "alt", "LoadedImage");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "imageSrc", ["loc", [null, [8, 49], [8, 57]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/flexberry-file-view-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "useOkButton", false, "close", "removeModalDialog", "created", "createdModalDialog", "viewImageContent", true, "sizeClass", ["subexpr", "@mut", [["get", "sizeClass", ["loc", [null, [7, 12], [7, 21]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [9, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/i-i-s-caseberry-logging-objects-application-log-e", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "ui-message", [], ["type", "error", "closeable", true, "title", "Error occurred", "message", ["subexpr", "@mut", [["get", "currentError", ["loc", [null, [8, 14], [8, 26]]]]], [], []]], ["loc", [null, [4, 4], [9, 6]]]]],
          locals: ["currentError"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "errorMessages", ["loc", [null, [3, 10], [3, 23]]]]], [], 0, null, ["loc", [null, [3, 2], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 8
              },
              "end": {
                "line": 19,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "ui positive button");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element2);
            morphs[1] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["save"], [], ["loc", [null, [18, 59], [18, 76]]]], ["inline", "t", ["forms.edit-form.save-button-text"], [], ["loc", [null, [18, 77], [18, 117]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 8
              },
              "end": {
                "line": 22,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "ui positive button");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element1);
            morphs[1] = dom.createMorphAt(element1, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["saveAndClose"], [], ["loc", [null, [21, 59], [21, 84]]]], ["inline", "t", ["forms.edit-form.saveAndClose-button-text"], [], ["loc", [null, [21, 85], [21, 133]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 8
              },
              "end": {
                "line": 25,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "ui negative button");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["delete"], [], ["loc", [null, [24, 59], [24, 78]]]], ["inline", "t", ["forms.edit-form.delete-button-text"], [], ["loc", [null, [24, 79], [24, 121]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 6
            },
            "end": {
              "line": 26,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "unless", [["subexpr", "and", [["get", "hasParentRoute", ["loc", [null, [17, 23], [17, 37]]]], ["subexpr", "not", [["get", "saveBeforeRouteLeave", ["loc", [null, [17, 43], [17, 63]]]]], [], ["loc", [null, [17, 38], [17, 64]]]]], [], ["loc", [null, [17, 18], [17, 65]]]]], [], 0, null, ["loc", [null, [17, 8], [19, 19]]]], ["block", "unless", [["subexpr", "and", [["get", "hasParentRoute", ["loc", [null, [20, 23], [20, 37]]]], ["subexpr", "not", [["get", "saveBeforeRouteLeave", ["loc", [null, [20, 43], [20, 63]]]]], [], ["loc", [null, [20, 38], [20, 64]]]]], [], ["loc", [null, [20, 18], [20, 65]]]]], [], 1, null, ["loc", [null, [20, 8], [22, 19]]]], ["block", "unless", [["subexpr", "and", [["get", "model.isNew", ["loc", [null, [23, 23], [23, 34]]]], ["subexpr", "or", [["subexpr", "not", [["get", "hasParentRoute", ["loc", [null, [23, 44], [23, 58]]]]], [], ["loc", [null, [23, 39], [23, 59]]]], ["subexpr", "and", [["get", "hasParentRoute", ["loc", [null, [23, 65], [23, 79]]]], ["get", "saveBeforeRouteLeave", ["loc", [null, [23, 80], [23, 100]]]]], [], ["loc", [null, [23, 60], [23, 101]]]]], [], ["loc", [null, [23, 35], [23, 102]]]]], [], ["loc", [null, [23, 18], [23, 103]]]]], [], 2, null, ["loc", [null, [23, 8], [25, 19]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 2
            },
            "end": {
              "line": 36,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.category", ["loc", [null, [34, 6], [34, 31]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 2
            },
            "end": {
              "line": 51,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.eventId", ["loc", [null, [49, 6], [49, 30]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 62,
              "column": 2
            },
            "end": {
              "line": 66,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.priority", ["loc", [null, [64, 6], [64, 31]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 77,
              "column": 2
            },
            "end": {
              "line": 81,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.severity", ["loc", [null, [79, 6], [79, 31]]]]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 2
            },
            "end": {
              "line": 96,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.title", ["loc", [null, [94, 6], [94, 28]]]]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 108,
              "column": 2
            },
            "end": {
              "line": 110,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.errors.timestamp", ["loc", [null, [109, 28], [109, 54]]]]],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 119,
              "column": 2
            },
            "end": {
              "line": 123,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.machineName", ["loc", [null, [121, 6], [121, 34]]]]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 134,
              "column": 2
            },
            "end": {
              "line": 138,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.appDomainName", ["loc", [null, [136, 6], [136, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 149,
              "column": 2
            },
            "end": {
              "line": 153,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.processId", ["loc", [null, [151, 6], [151, 32]]]]],
        locals: [],
        templates: []
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 164,
              "column": 2
            },
            "end": {
              "line": 168,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.processName", ["loc", [null, [166, 6], [166, 34]]]]],
        locals: [],
        templates: []
      };
    })();
    var child12 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 179,
              "column": 2
            },
            "end": {
              "line": 183,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.threadName", ["loc", [null, [181, 6], [181, 33]]]]],
        locals: [],
        templates: []
      };
    })();
    var child13 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 194,
              "column": 2
            },
            "end": {
              "line": 198,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.win32ThreadId", ["loc", [null, [196, 6], [196, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child14 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 209,
              "column": 2
            },
            "end": {
              "line": 213,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.message", ["loc", [null, [211, 6], [211, 30]]]]],
        locals: [],
        templates: []
      };
    })();
    var child15 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 224,
              "column": 2
            },
            "end": {
              "line": 228,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "color:red");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.formattedMessage", ["loc", [null, [226, 6], [226, 39]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 239,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1, "class", "ui header");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "ui form flexberry-vertical-form");
        dom.setAttribute(el1, "role", "form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "field");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "flexberry-edit-panel");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "submit");
        dom.setAttribute(el5, "class", "ui button");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Timestamp");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [3]);
        var element4 = dom.childAt(element3, [1, 1, 1]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element3, [3]);
        var element7 = dom.childAt(element3, [5]);
        var element8 = dom.childAt(element3, [7]);
        var element9 = dom.childAt(element3, [9]);
        var element10 = dom.childAt(element3, [11]);
        var element11 = dom.childAt(element3, [13]);
        var element12 = dom.childAt(element3, [15]);
        var element13 = dom.childAt(element3, [17]);
        var element14 = dom.childAt(element3, [19]);
        var element15 = dom.childAt(element3, [21]);
        var element16 = dom.childAt(element3, [23]);
        var element17 = dom.childAt(element3, [25]);
        var element18 = dom.childAt(element3, [27]);
        var element19 = dom.childAt(element3, [29]);
        var morphs = new Array(32);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(element4, 1, 1);
        morphs[2] = dom.createElementMorph(element5);
        morphs[3] = dom.createMorphAt(element5, 0, 0);
        morphs[4] = dom.createMorphAt(element6, 1, 1);
        morphs[5] = dom.createMorphAt(element6, 3, 3);
        morphs[6] = dom.createMorphAt(element7, 1, 1);
        morphs[7] = dom.createMorphAt(element7, 3, 3);
        morphs[8] = dom.createMorphAt(element8, 1, 1);
        morphs[9] = dom.createMorphAt(element8, 3, 3);
        morphs[10] = dom.createMorphAt(element9, 1, 1);
        morphs[11] = dom.createMorphAt(element9, 3, 3);
        morphs[12] = dom.createMorphAt(element10, 1, 1);
        morphs[13] = dom.createMorphAt(element10, 3, 3);
        morphs[14] = dom.createMorphAt(element11, 3, 3);
        morphs[15] = dom.createMorphAt(element11, 5, 5);
        morphs[16] = dom.createMorphAt(element12, 1, 1);
        morphs[17] = dom.createMorphAt(element12, 3, 3);
        morphs[18] = dom.createMorphAt(element13, 1, 1);
        morphs[19] = dom.createMorphAt(element13, 3, 3);
        morphs[20] = dom.createMorphAt(element14, 1, 1);
        morphs[21] = dom.createMorphAt(element14, 3, 3);
        morphs[22] = dom.createMorphAt(element15, 1, 1);
        morphs[23] = dom.createMorphAt(element15, 3, 3);
        morphs[24] = dom.createMorphAt(element16, 1, 1);
        morphs[25] = dom.createMorphAt(element16, 3, 3);
        morphs[26] = dom.createMorphAt(element17, 1, 1);
        morphs[27] = dom.createMorphAt(element17, 3, 3);
        morphs[28] = dom.createMorphAt(element18, 1, 1);
        morphs[29] = dom.createMorphAt(element18, 3, 3);
        morphs[30] = dom.createMorphAt(element19, 1, 1);
        morphs[31] = dom.createMorphAt(element19, 3, 3);
        return morphs;
      },
      statements: [["block", "if", [["get", "errorMessages", ["loc", [null, [2, 6], [2, 19]]]]], [], 0, null, ["loc", [null, [2, 0], [11, 7]]]], ["block", "unless", [["get", "readonly", ["loc", [null, [16, 16], [16, 24]]]]], [], 1, null, ["loc", [null, [16, 6], [26, 17]]]], ["element", "action", ["close"], [], ["loc", [null, [27, 46], [27, 64]]]], ["inline", "t", ["forms.edit-form.close-button-text"], [], ["loc", [null, [27, 65], [27, 106]]]], ["block", "if", [["get", "model.errors.category", ["loc", [null, [32, 8], [32, 29]]]]], [], 2, null, ["loc", [null, [32, 2], [36, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [38, 13], [38, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.category", ["loc", [null, [40, 10], [40, 24]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.category", ["loc", [null, [41, 14], [41, 35]]]], "error", ""], [], ["loc", [null, [41, 10], [41, 47]]]], "label", "Category"], ["loc", [null, [37, 2], [43, 4]]]], ["block", "if", [["get", "model.errors.eventId", ["loc", [null, [47, 8], [47, 28]]]]], [], 3, null, ["loc", [null, [47, 2], [51, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [53, 13], [53, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.eventId", ["loc", [null, [55, 10], [55, 23]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.eventId", ["loc", [null, [56, 14], [56, 34]]]], "error", ""], [], ["loc", [null, [56, 10], [56, 46]]]], "label", "Event id"], ["loc", [null, [52, 2], [58, 4]]]], ["block", "if", [["get", "model.errors.priority", ["loc", [null, [62, 8], [62, 29]]]]], [], 4, null, ["loc", [null, [62, 2], [66, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [68, 13], [68, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.priority", ["loc", [null, [70, 10], [70, 24]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.priority", ["loc", [null, [71, 14], [71, 35]]]], "error", ""], [], ["loc", [null, [71, 10], [71, 47]]]], "label", "Priority"], ["loc", [null, [67, 2], [73, 4]]]], ["block", "if", [["get", "model.errors.severity", ["loc", [null, [77, 8], [77, 29]]]]], [], 5, null, ["loc", [null, [77, 2], [81, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [83, 13], [83, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.severity", ["loc", [null, [85, 10], [85, 24]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.severity", ["loc", [null, [86, 14], [86, 35]]]], "error", ""], [], ["loc", [null, [86, 10], [86, 47]]]], "label", "Severity"], ["loc", [null, [82, 2], [88, 4]]]], ["block", "if", [["get", "model.errors.title", ["loc", [null, [92, 8], [92, 26]]]]], [], 6, null, ["loc", [null, [92, 2], [96, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [98, 13], [98, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [100, 10], [100, 21]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.title", ["loc", [null, [101, 14], [101, 32]]]], "error", ""], [], ["loc", [null, [101, 10], [101, 44]]]], "label", "Title"], ["loc", [null, [97, 2], [103, 4]]]], ["block", "if", [["get", "model.errors.timestamp", ["loc", [null, [108, 8], [108, 30]]]]], [], 7, null, ["loc", [null, [108, 2], [110, 9]]]], ["inline", "flexberry-datepicker", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [112, 13], [112, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "model.timestamp", ["loc", [null, [113, 10], [113, 25]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.timestamp", ["loc", [null, [114, 14], [114, 36]]]], "error", ""], [], ["loc", [null, [114, 10], [114, 48]]]]], ["loc", [null, [111, 2], [115, 4]]]], ["block", "if", [["get", "model.errors.machineName", ["loc", [null, [119, 8], [119, 32]]]]], [], 8, null, ["loc", [null, [119, 2], [123, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [125, 13], [125, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.machineName", ["loc", [null, [127, 10], [127, 27]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.machineName", ["loc", [null, [128, 14], [128, 38]]]], "error", ""], [], ["loc", [null, [128, 10], [128, 50]]]], "label", "Machine name"], ["loc", [null, [124, 2], [130, 4]]]], ["block", "if", [["get", "model.errors.appDomainName", ["loc", [null, [134, 8], [134, 34]]]]], [], 9, null, ["loc", [null, [134, 2], [138, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [140, 13], [140, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.appDomainName", ["loc", [null, [142, 10], [142, 29]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.appDomainName", ["loc", [null, [143, 14], [143, 40]]]], "error", ""], [], ["loc", [null, [143, 10], [143, 52]]]], "label", "App domain name"], ["loc", [null, [139, 2], [145, 4]]]], ["block", "if", [["get", "model.errors.processId", ["loc", [null, [149, 8], [149, 30]]]]], [], 10, null, ["loc", [null, [149, 2], [153, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [155, 13], [155, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.processId", ["loc", [null, [157, 10], [157, 25]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.processId", ["loc", [null, [158, 14], [158, 36]]]], "error", ""], [], ["loc", [null, [158, 10], [158, 48]]]], "label", "Process id"], ["loc", [null, [154, 2], [160, 4]]]], ["block", "if", [["get", "model.errors.processName", ["loc", [null, [164, 8], [164, 32]]]]], [], 11, null, ["loc", [null, [164, 2], [168, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [170, 13], [170, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.processName", ["loc", [null, [172, 10], [172, 27]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.processName", ["loc", [null, [173, 14], [173, 38]]]], "error", ""], [], ["loc", [null, [173, 10], [173, 50]]]], "label", "Process name"], ["loc", [null, [169, 2], [175, 4]]]], ["block", "if", [["get", "model.errors.threadName", ["loc", [null, [179, 8], [179, 31]]]]], [], 12, null, ["loc", [null, [179, 2], [183, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [185, 13], [185, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.threadName", ["loc", [null, [187, 10], [187, 26]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.threadName", ["loc", [null, [188, 14], [188, 37]]]], "error", ""], [], ["loc", [null, [188, 10], [188, 49]]]], "label", "Thread name"], ["loc", [null, [184, 2], [190, 4]]]], ["block", "if", [["get", "model.errors.win32ThreadId", ["loc", [null, [194, 8], [194, 34]]]]], [], 13, null, ["loc", [null, [194, 2], [198, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [200, 13], [200, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.win32ThreadId", ["loc", [null, [202, 10], [202, 29]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.win32ThreadId", ["loc", [null, [203, 14], [203, 40]]]], "error", ""], [], ["loc", [null, [203, 10], [203, 52]]]], "label", "Win32 thread id"], ["loc", [null, [199, 2], [205, 4]]]], ["block", "if", [["get", "model.errors.message", ["loc", [null, [209, 8], [209, 28]]]]], [], 14, null, ["loc", [null, [209, 2], [213, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [215, 13], [215, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.message", ["loc", [null, [217, 10], [217, 23]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.message", ["loc", [null, [218, 14], [218, 34]]]], "error", ""], [], ["loc", [null, [218, 10], [218, 46]]]], "label", "Message"], ["loc", [null, [214, 2], [220, 4]]]], ["block", "if", [["get", "model.errors.formattedMessage", ["loc", [null, [224, 8], [224, 37]]]]], [], 15, null, ["loc", [null, [224, 2], [228, 9]]]], ["inline", "flexberry-field", [], ["readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [230, 13], [230, 21]]]]], [], []], "required", true, "value", ["subexpr", "@mut", [["get", "model.formattedMessage", ["loc", [null, [232, 10], [232, 32]]]]], [], []], "class", ["subexpr", "if", [["get", "model.errors.formattedMessage", ["loc", [null, [233, 14], [233, 43]]]], "error", ""], [], ["loc", [null, [233, 10], [233, 55]]]], "label", "Formatted message"], ["loc", [null, [229, 2], [235, 4]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14, child15]
    };
  })());
});
define("dummy/templates/i-i-s-caseberry-logging-objects-application-log-l", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-l.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.i-i-s-caseberry-logging-objects-application-log-l.caption"], [], ["loc", [null, [1, 4], [1, 75]]]], ["inline", "flexberry-objectlistview", [], ["content", ["subexpr", "@mut", [["get", "model", ["loc", [null, [4, 12], [4, 17]]]]], [], []], "modelName", "i-i-s-caseberry-logging-objects-application-log", "modelProjection", ["subexpr", "@mut", [["get", "modelProjection", ["loc", [null, [6, 20], [6, 35]]]]], [], []], "editFormRoute", ["subexpr", "@mut", [["get", "editFormRoute", ["loc", [null, [7, 18], [7, 31]]]]], [], []], "createNewButton", false, "refreshButton", true, "sorting", ["subexpr", "@mut", [["get", "computedSorting", ["loc", [null, [10, 12], [10, 27]]]]], [], []], "orderable", true, "pages", ["subexpr", "@mut", [["get", "pages", ["loc", [null, [12, 10], [12, 15]]]]], [], []], "perPageValue", ["subexpr", "@mut", [["get", "perPageValue", ["loc", [null, [13, 17], [13, 29]]]]], [], []], "perPageValues", ["subexpr", "@mut", [["get", "perPageValues", ["loc", [null, [14, 18], [14, 31]]]]], [], []], "hasPreviousPage", ["subexpr", "@mut", [["get", "hasPreviousPage", ["loc", [null, [15, 20], [15, 35]]]]], [], []], "hasNextPage", ["subexpr", "@mut", [["get", "hasNextPage", ["loc", [null, [16, 16], [16, 27]]]]], [], []], "sortByColumn", ["subexpr", "action", ["sortByColumn"], [], ["loc", [null, [17, 17], [17, 40]]]], "addColumnToSorting", ["subexpr", "action", ["addColumnToSorting"], [], ["loc", [null, [18, 23], [18, 52]]]], "previousPage", ["subexpr", "action", ["previousPage"], [], ["loc", [null, [19, 17], [19, 40]]]], "gotoPage", ["subexpr", "action", ["gotoPage"], [], ["loc", [null, [20, 13], [20, 32]]]], "nextPage", ["subexpr", "action", ["nextPage"], [], ["loc", [null, [21, 13], [21, 32]]]], "componentName", "IISLoggingObjectListView"], ["loc", [null, [3, 2], [23, 6]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/i-i-s-caseberry-logging-objects-application-log-l/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/i-i-s-caseberry-logging-objects-application-log-l/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "loading-pane");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loading-message");
        var el3 = dom.createTextNode("\n        Loading ...\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "spinner");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui message");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.index.greeting"], [], ["loc", [null, [3, 4], [3, 32]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "loading-pane");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loading-message");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "spinner");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.loading.spinner-caption"], [], ["loc", [null, [3, 4], [3, 41]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/lookup-dialog-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/lookup-dialog-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "lookup-list");
        dom.setAttribute(el1, "class", "list-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "flexberry-objectlistview", [], ["class", "ui bottom attached", "modelProjection", ["subexpr", "@mut", [["get", "modelProjection", ["loc", [null, [4, 20], [4, 35]]]]], [], []], "content", ["subexpr", "@mut", [["get", "model", ["loc", [null, [5, 12], [5, 17]]]]], [], []], "selectedRecord", ["subexpr", "@mut", [["get", "currentLookupRow", ["loc", [null, [6, 19], [6, 35]]]]], [], []], "componentMode", "lookupform", "componentName", "flexberry-objectlistview-at-lookup", "showEditMenuItemInRow", false, "createNewButton", false, "showCheckBoxInRow", false, "colsConfigButton", false, "filterByAnyMatch", ["subexpr", "action", ["filterByAnyMatch"], [], ["loc", [null, [15, 21], [15, 48]]]], "filterText", ["subexpr", "@mut", [["get", "filter", ["loc", [null, [16, 15], [16, 21]]]]], [], []], "customProperties", ["subexpr", "@mut", [["get", "customPropertiesData", ["loc", [null, [18, 21], [18, 41]]]]], [], []], "pages", ["subexpr", "@mut", [["get", "pages", ["loc", [null, [20, 10], [20, 15]]]]], [], []], "perPageValue", ["subexpr", "@mut", [["get", "perPageValue", ["loc", [null, [21, 17], [21, 29]]]]], [], []], "perPageValues", ["subexpr", "@mut", [["get", "perPageValues", ["loc", [null, [22, 18], [22, 31]]]]], [], []], "hasPreviousPage", ["subexpr", "@mut", [["get", "hasPreviousPage", ["loc", [null, [23, 20], [23, 35]]]]], [], []], "hasNextPage", ["subexpr", "@mut", [["get", "hasNextPage", ["loc", [null, [24, 16], [24, 27]]]]], [], []], "previousPage", ["subexpr", "action", ["previousPage"], [], ["loc", [null, [25, 17], [25, 40]]]], "gotoPage", ["subexpr", "action", ["gotoPage"], [], ["loc", [null, [26, 13], [26, 32]]]], "nextPage", ["subexpr", "action", ["nextPage"], [], ["loc", [null, [27, 13], [27, 32]]]], "sorting", ["subexpr", "@mut", [["get", "computedSorting", ["loc", [null, [29, 12], [29, 27]]]]], [], []], "orderable", true, "sortByColumn", ["subexpr", "action", ["sortByColumn"], [], ["loc", [null, [31, 17], [31, 40]]]], "addColumnToSorting", ["subexpr", "action", ["addColumnToSorting"], [], ["loc", [null, [32, 23], [32, 52]]]], "notUseUserSettings", true], ["loc", [null, [2, 2], [34, 4]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/lookup-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/lookup-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "outlet", ["modal-content"], [], ["loc", [null, [8, 2], [8, 28]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/lookup-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "sizeClass", ["subexpr", "@mut", [["get", "sizeClass", ["loc", [null, [3, 12], [3, 21]]]]], [], []], "close", "removeModalDialog", "created", "createdModalDialog", "useOkButton", false, "useCloseButton", false], 0, null, ["loc", [null, [1, 0], [9, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/map", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 20,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/map.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(10);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          morphs[5] = dom.createMorphAt(fragment, 11, 11, contextualElement);
          morphs[6] = dom.createMorphAt(fragment, 13, 13, contextualElement);
          morphs[7] = dom.createMorphAt(fragment, 15, 15, contextualElement);
          morphs[8] = dom.createMorphAt(fragment, 17, 17, contextualElement);
          morphs[9] = dom.createMorphAt(fragment, 19, 19, contextualElement);
          return morphs;
        },
        statements: [["inline", "map-tools/drag", [], ["activate", ["subexpr", "action", ["onMapToolActivate"], ["target", ["get", "mapToolbar", ["loc", [null, [10, 71], [10, 81]]]]], ["loc", [null, [10, 36], [10, 82]]]]], ["loc", [null, [10, 10], [10, 84]]]], ["inline", "map-tools/zoom-in", [], ["activate", ["subexpr", "action", ["onMapToolActivate"], ["target", ["get", "mapToolbar", ["loc", [null, [11, 74], [11, 84]]]]], ["loc", [null, [11, 39], [11, 85]]]]], ["loc", [null, [11, 10], [11, 87]]]], ["inline", "map-tools/zoom-out", [], ["activate", ["subexpr", "action", ["onMapToolActivate"], ["target", ["get", "mapToolbar", ["loc", [null, [12, 75], [12, 85]]]]], ["loc", [null, [12, 40], [12, 86]]]]], ["loc", [null, [12, 10], [12, 88]]]], ["inline", "map-commands/go-to", [], ["execute", ["subexpr", "action", ["onMapCommandExecute"], ["target", ["get", "mapToolbar", ["loc", [null, [13, 76], [13, 86]]]]], ["loc", [null, [13, 39], [13, 87]]]]], ["loc", [null, [13, 10], [13, 89]]]], ["inline", "map-commands/full-extent", [], ["execute", ["subexpr", "action", ["onMapCommandExecute"], ["target", ["get", "mapToolbar", ["loc", [null, [14, 82], [14, 92]]]]], ["loc", [null, [14, 45], [14, 93]]]]], ["loc", [null, [14, 10], [14, 95]]]], ["inline", "map-commands/search", [], ["execute", ["subexpr", "action", ["onMapCommandExecute"], ["target", ["get", "mapToolbar", ["loc", [null, [15, 77], [15, 87]]]]], ["loc", [null, [15, 40], [15, 88]]]]], ["loc", [null, [15, 10], [15, 90]]]], ["inline", "map-tools/identify", [], ["activate", ["subexpr", "action", ["onMapToolActivate"], ["target", ["get", "mapToolbar", ["loc", [null, [16, 75], [16, 85]]]]], ["loc", [null, [16, 40], [16, 86]]]]], ["loc", [null, [16, 10], [16, 88]]]], ["inline", "map-tools/measure", [], ["activate", ["subexpr", "action", ["onMapToolActivate"], ["target", ["get", "mapToolbar", ["loc", [null, [17, 74], [17, 84]]]]], ["loc", [null, [17, 39], [17, 85]]]]], ["loc", [null, [17, 10], [17, 87]]]], ["inline", "map-tools/draw", [], ["activate", ["subexpr", "action", ["onMapToolActivate"], ["target", ["get", "mapToolbar", ["loc", [null, [18, 71], [18, 81]]]]], ["loc", [null, [18, 36], [18, 82]]]]], ["loc", [null, [18, 10], [18, 84]]]], ["inline", "map-commands/export", [], ["execute", ["subexpr", "action", ["onMapCommandExecute"], ["target", ["get", "mapToolbar", ["loc", [null, [19, 77], [19, 87]]]]], ["loc", [null, [19, 40], [19, 88]]]]], ["loc", [null, [19, 10], [19, 90]]]]],
        locals: ["mapToolbar"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 8
            },
            "end": {
              "line": 45,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/map.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "flexberry-layers", [], ["leafletMap", ["subexpr", "@mut", [["get", "leafletMap", ["loc", [null, [37, 23], [37, 33]]]]], [], []], "leafletContainer", ["subexpr", "@mut", [["get", "leafletMap", ["loc", [null, [38, 29], [38, 39]]]]], [], []], "layers", ["subexpr", "@mut", [["get", "model.rootLayer.layers", ["loc", [null, [39, 19], [39, 41]]]]], [], []]], ["loc", [null, [36, 10], [40, 12]]]], ["inline", "scale-control", [], ["map", ["subexpr", "@mut", [["get", "leafletMap", ["loc", [null, [42, 16], [42, 26]]]]], [], []], "imperial", false], ["loc", [null, [41, 10], [44, 12]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 84,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/map.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1, "class", "ui header");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "ui form flexberry-vertical-form");
        dom.setAttribute(el1, "role", "form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui inernally celled grid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "sixteen wide column");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ten wide column");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "six wide column");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.map.caption"], [], ["loc", [null, [1, 22], [1, 47]]]], ["block", "flexberry-maptoolbar", [], ["leafletMap", ["subexpr", "@mut", [["get", "leafletMap", ["loc", [null, [7, 21], [7, 31]]]]], [], []], "layers", ["subexpr", "@mut", [["get", "model.rootLayer.layers", ["loc", [null, [8, 17], [8, 39]]]]], [], []]], 0, null, ["loc", [null, [6, 8], [20, 33]]]], ["block", "flexberry-map", [], ["lat", ["subexpr", "@mut", [["get", "model.lat", ["loc", [null, [26, 14], [26, 23]]]]], [], []], "lng", ["subexpr", "@mut", [["get", "model.lng", ["loc", [null, [27, 14], [27, 23]]]]], [], []], "zoom", ["subexpr", "@mut", [["get", "model.zoom", ["loc", [null, [28, 15], [28, 25]]]]], [], []], "layerLinks", ["subexpr", "@mut", [["get", "layerLinks", ["loc", [null, [29, 21], [29, 31]]]]], [], []], "queryFilter", ["subexpr", "@mut", [["get", "queryFilter", ["loc", [null, [30, 22], [30, 33]]]]], [], []], "leafletInit", ["subexpr", "action", ["onMapLeafletInit", "leafletMap"], [], ["loc", [null, [31, 22], [31, 62]]]], "leafletDestroy", ["subexpr", "action", ["onMapLeafletDestroy", "leafletMap"], [], ["loc", [null, [32, 25], [32, 68]]]], "moveend", ["subexpr", "action", ["onMapMoveend", "model.lat", "model.lng"], [], ["loc", [null, [33, 18], [33, 65]]]], "zoomend", ["subexpr", "action", ["onMapZoomend", "model.zoom"], [], ["loc", [null, [34, 18], [34, 54]]]]], 1, null, ["loc", [null, [25, 8], [45, 26]]]], ["inline", "flexberry-maplayers", [], ["class", "styled", "cswConnections", ["subexpr", "@mut", [["get", "cswConnections", ["loc", [null, [50, 25], [50, 39]]]]], [], []], "leafletMap", ["subexpr", "@mut", [["get", "leafletMap", ["loc", [null, [51, 21], [51, 31]]]]], [], []], "layers", ["subexpr", "get-with-dynamic-actions", [["get", "this", ["loc", [null, [52, 43], [52, 47]]]], "model.rootLayer.layers"], ["hierarchyPropertyName", "layers", "pathKeyword", "layerPath", "dynamicActions", ["subexpr", "array", [["subexpr", "hash", [], ["on", "add", "actionName", "onMapLayerAdd", "actionArguments", ["subexpr", "array", ["{% layerPath %}"], [], ["loc", [null, [59, 32], [59, 57]]]]], ["loc", [null, [56, 14], [60, 15]]]], ["subexpr", "hash", [], ["on", "edit", "actionName", "onMapLayerEdit", "actionArguments", ["subexpr", "array", ["{% layerPath %}"], [], ["loc", [null, [64, 32], [64, 57]]]]], ["loc", [null, [61, 14], [65, 15]]]], ["subexpr", "hash", [], ["on", "remove", "actionName", "onMapLayerRemove", "actionArguments", ["subexpr", "array", ["{% layerPath %}"], [], ["loc", [null, [69, 32], [69, 57]]]]], ["loc", [null, [66, 14], [70, 15]]]], ["subexpr", "hash", [], ["on", "changeVisibility", "actionName", "onMapLayerChangeVisibility", "actionArguments", ["subexpr", "array", ["{% layerPath %}.visibility"], [], ["loc", [null, [74, 32], [74, 68]]]]], ["loc", [null, [71, 14], [75, 15]]]]], [], ["loc", [null, [55, 27], [76, 13]]]]], ["loc", [null, [52, 17], [77, 11]]]], "add", ["subexpr", "action", ["onMapLayerAdd", "model.rootLayer"], [], ["loc", [null, [78, 14], [78, 56]]]]], ["loc", [null, [48, 8], [79, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/mobile/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/mobile/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "item");
          dom.setAttribute(el1, "href", "https://github.com/flexberry");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "class", "ui centered image");
          dom.setAttribute(el2, "src", "assets/images/flexberry-logo.png");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "item");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(fragment, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element2, 'title');
          morphs[1] = dom.createAttrMorph(element3, 'href');
          morphs[2] = dom.createAttrMorph(element3, 'title');
          morphs[3] = dom.createMorphAt(element3, 1, 1);
          morphs[4] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "title", ["subexpr", "t", ["forms.application.sitemap.application-name.title"], [], ["loc", [null, [5, 11], [5, 67]]]]], ["attribute", "href", ["get", "addonVersionHref", ["loc", [null, [9, 12], [9, 28]]]]], ["attribute", "title", ["subexpr", "t", ["forms.application.sitemap.application-version.title"], [], ["loc", [null, [11, 11], [11, 70]]]]], ["inline", "t", ["forms.application.sitemap.application-version.caption"], ["version", ["subexpr", "@mut", [["get", "addonVersion", ["loc", [null, [12, 72], [12, 84]]]]], [], []]], ["loc", [null, [12, 4], [12, 86]]]], ["inline", "render", ["sitemap", ["get", "sitemap", ["loc", [null, [14, 21], [14, 28]]]]], [], ["loc", [null, [14, 2], [14, 30]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 39,
                "column": 14
              },
              "end": {
                "line": 43,
                "column": 14
              }
            },
            "moduleName": "dummy/templates/mobile/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'value');
            morphs[1] = dom.createAttrMorph(element0, 'selected');
            morphs[2] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "locale", ["loc", [null, [40, 32], [40, 38]]]]], ["attribute", "selected", ["subexpr", "eq", [["subexpr", "get", [["get", "i18n", ["loc", [null, [40, 60], [40, 64]]]], "locale"], [], ["loc", [null, [40, 55], [40, 74]]]], ["get", "locale", ["loc", [null, [40, 75], [40, 81]]]]], [], ["loc", [null, [40, 50], [40, 83]]]]], ["content", "locale", ["loc", [null, [41, 18], [41, 28]]]]],
          locals: ["locale"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 10
            },
            "end": {
              "line": 45,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/mobile/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("select");
          dom.setAttribute(el1, "class", "ui dropdown");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'onchange');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["subexpr", "get", [["get", "i18n", ["loc", [null, [38, 68], [38, 72]]]], "locale"], [], ["loc", [null, [38, 63], [38, 82]]]]], [], ["loc", [null, [38, 58], [38, 83]]]]], ["value", "target.value"], ["loc", [null, [38, 49], [38, 106]]]]], ["block", "each", [["get", "locales", ["loc", [null, [39, 22], [39, 29]]]]], [], 0, null, ["loc", [null, [39, 14], [43, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 45,
              "column": 10
            },
            "end": {
              "line": 52,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/mobile/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "flexberry-dropdown", [], ["class", "compact", "items", ["subexpr", "@mut", [["get", "locales", ["loc", [null, [48, 20], [48, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "i18n.locale", ["loc", [null, [49, 20], [49, 31]]]]], [], []], "placeholder", ["subexpr", "t", ["forms.application.header.menu.language-dropdown.placeholder"], [], ["loc", [null, [50, 26], [50, 91]]]]], ["loc", [null, [46, 12], [51, 14]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 62,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/mobile/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "example-mobile");
        dom.setAttribute(el1, "class", "pusher");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "full height");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui top fixed inverted menu");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "launch icon item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "sidebar icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "right menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "item");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "style", "margin-right: 5px;");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "item");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "style", "margin-right: 5px;");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flexberry-content ui attached segment");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1, 1]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element5, [3]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element7, [3]);
        var element10 = dom.childAt(element4, [3]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element6);
        morphs[2] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(element8, 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
        morphs[5] = dom.createMorphAt(element9, 3, 3);
        morphs[6] = dom.createMorphAt(element10, 1, 1);
        morphs[7] = dom.createMorphAt(element10, 3, 3);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "ui-sidebar", [], ["class", "inverted vertical menu"], 0, null, ["loc", [null, [1, 0], [15, 15]]]], ["element", "action", ["toggleSidebar"], [], ["loc", [null, [19, 9], [19, 35]]]], ["inline", "t", ["forms.application.header.menu.user-settings-service-checkbox.caption"], [], ["loc", [null, [25, 12], [25, 88]]]], ["inline", "flexberry-checkbox", [], ["class", "toggle", "value", ["subexpr", "@mut", [["get", "userSettingsService.isUserSettingsServiceEnabled", ["loc", [null, [29, 18], [29, 66]]]]], [], []]], ["loc", [null, [27, 10], [30, 12]]]], ["inline", "t", ["forms.application.header.menu.language-dropdown.caption"], [], ["loc", [null, [34, 12], [34, 75]]]], ["block", "if", [["get", "browserIsInternetExplorer", ["loc", [null, [37, 16], [37, 41]]]]], [], 1, 2, ["loc", [null, [37, 10], [52, 17]]]], ["content", "outlet", ["loc", [null, [57, 6], [57, 16]]]], ["inline", "outlet", ["modal"], [], ["loc", [null, [58, 6], [58, 24]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/mobile/components/flexberry-file", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 10
                },
                "end": {
                  "line": 28,
                  "column": 10
                }
              },
              "moduleName": "dummy/templates/mobile/components/flexberry-file.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.setAttribute(el1, "class", "flexberry-file-image-preview");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'src');
              morphs[1] = dom.createAttrMorph(element0, 'alt');
              return morphs;
            },
            statements: [["attribute", "src", ["get", "_previewImageAsBase64String", ["loc", [null, [26, 20], [26, 47]]]]], ["attribute", "alt", ["subexpr", "t", ["components.flexberry-file.preview-image-alternative-text"], [], ["loc", [null, [27, 18], [27, 82]]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 6
              },
              "end": {
                "line": 31,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/mobile/components/flexberry-file.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "flexberry-file-image-preview-wrapper ui small image");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var element2 = dom.childAt(element1, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createElementMorph(element1);
            morphs[1] = dom.createMorphAt(element1, 1, 1);
            morphs[2] = dom.createAttrMorph(element2, 'class');
            return morphs;
          },
          statements: [["element", "action", ["viewLoadedImage"], [], ["loc", [null, [22, 73], [22, 101]]]], ["block", "unless", [["get", "_previewDownloadIsInProgress", ["loc", [null, [23, 20], [23, 48]]]]], [], 0, null, ["loc", [null, [23, 10], [28, 21]]]], ["attribute", "class", ["concat", ["ui ", ["subexpr", "if", [["get", "_previewDownloadIsInProgress", ["loc", [null, [29, 30], [29, 58]]]], "active", ""], [], ["loc", [null, [29, 25], [29, 72]]]], " loader"]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 32,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/mobile/components/flexberry-file.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flexberry-file-menu");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "flexberry-menu", [], ["class", "left pointing", "items", ["subexpr", "@mut", [["get", "_menuItems", ["loc", [null, [15, 16], [15, 26]]]]], [], []], "callItemsOnClickCallbacks", false, "onItemClick", ["subexpr", "action", ["onMenuItemClick"], [], ["loc", [null, [17, 22], [17, 48]]]], "collapseMenuOnItemClick", true], ["loc", [null, [13, 8], [19, 10]]]], ["block", "if", [["get", "showPreview", ["loc", [null, [21, 12], [21, 23]]]]], [], 0, null, ["loc", [null, [21, 6], [31, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 56,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/mobile/components/flexberry-file.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexberry-file-grid ui grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "file");
        dom.setAttribute(el2, "name", "files[]");
        dom.setAttribute(el2, "class", "flexberry-file-file-input");
        dom.setAttribute(el2, "style", "display:none");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexberry-file-download-iframes-container");
        dom.setAttribute(el1, "style", "display: none;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexberry-file-error-modal-dialog ui small basic modal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui icon header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flexberry-file-error-modal-dialog-content center aligned ui grid");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "center aligned ui grid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "actions");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "flexberry-file-error-modal-dialog-ok-button ui approve green inverted button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "checkmark icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(fragment, [4]);
        var morphs = new Array(10);
        morphs[0] = dom.createAttrMorph(element4, 'id');
        morphs[1] = dom.createAttrMorph(element6, 'class');
        morphs[2] = dom.createAttrMorph(element6, 'title');
        morphs[3] = dom.createAttrMorph(element6, 'for');
        morphs[4] = dom.createElementMorph(element6);
        morphs[5] = dom.createMorphAt(element6, 1, 1);
        morphs[6] = dom.createMorphAt(element5, 3, 3);
        morphs[7] = dom.createMorphAt(dom.childAt(element7, [1]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element7, [3, 1]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(element7, [5, 1, 1]), 3, 3);
        return morphs;
      },
      statements: [["attribute", "id", ["get", "_fileInputId", ["loc", [null, [2, 41], [2, 53]]]]], ["attribute", "class", ["concat", ["flexberry-file-add-button ui icon ", ["get", "buttonClass", ["loc", [null, [5, 49], [5, 60]]]], " ", ["subexpr", "unless", [["get", "_addButtonIsEnabled", ["loc", [null, [5, 72], [5, 91]]]], "disabled"], [], ["loc", [null, [5, 63], [5, 104]]]], " ", ["subexpr", "if", [["subexpr", "or", [["get", "_hasFile", ["loc", [null, [5, 114], [5, 122]]]], ["get", "readonly", ["loc", [null, [5, 123], [5, 131]]]]], [], ["loc", [null, [5, 110], [5, 132]]]], "hidden"], [], ["loc", [null, [5, 105], [5, 143]]]], " button"]]], ["attribute", "title", ["subexpr", "t", ["components.flexberry-file.add-button-title"], [], ["loc", [null, [6, 12], [6, 62]]]]], ["attribute", "for", ["get", "_fileInputId", ["loc", [null, [7, 12], [7, 24]]]]], ["element", "action", ["addButtonClick"], ["on", "click", "preventDefault", false], ["loc", [null, [8, 6], [8, 65]]]], ["inline", "t", ["components.flexberry-file.add-button-caption"], [], ["loc", [null, [9, 4], [9, 56]]]], ["block", "if", [["get", "_hasFile", ["loc", [null, [11, 10], [11, 18]]]]], [], 0, null, ["loc", [null, [11, 4], [32, 11]]]], ["content", "_errorModalDialogCaption", ["loc", [null, [40, 4], [40, 32]]]], ["content", "_errorModalDialogContent", ["loc", [null, [44, 6], [44, 34]]]], ["inline", "t", ["components.flexberry-file.error-dialog-ok-button-caption"], [], ["loc", [null, [51, 8], [51, 72]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/mobile/components/flexberry-lookup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "flexberry-dropdown", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [3, 16], [3, 27]]]]], [], []], "class", "search", "value", ["subexpr", "@mut", [["get", "displayValue", ["loc", [null, [5, 10], [5, 22]]]]], [], []], "readonly", ["subexpr", "if", [["get", "readonly", ["loc", [null, [6, 17], [6, 25]]]], "readonly"], [], ["loc", [null, [6, 13], [6, 37]]]], "needChecksOnValue", false, "isSearch", true, "isSearchReadOnly", ["subexpr", "@mut", [["get", "dropdownIsSearch", ["loc", [null, [9, 21], [9, 37]]]]], [], []]], ["loc", [null, [2, 2], [10, 4]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 10
                },
                "end": {
                  "line": 18,
                  "column": 10
                }
              },
              "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "yield", ["loc", [null, [17, 12], [17, 21]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 10
                },
                "end": {
                  "line": 20,
                  "column": 10
                }
              },
              "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "displayValue", ["loc", [null, [19, 12], [19, 28]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 8
              },
              "end": {
                "line": 21,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [16, 16], [16, 24]]]]], [], 0, 1, ["loc", [null, [16, 10], [20, 17]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 8
              },
              "end": {
                "line": 23,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "placeholder", ["loc", [null, [22, 10], [22, 25]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 6
              },
              "end": {
                "line": 27,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "chevron right icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 4
              },
              "end": {
                "line": 33,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "remove icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["ui icon ", ["get", "removeButtonClass", ["loc", [null, [30, 31], [30, 48]]]], " button"]]], ["element", "action", ["remove", ["get", "removeData", ["loc", [null, [30, 77], [30, 87]]]]], [], ["loc", [null, [30, 59], [30, 89]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui action input");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui transparent icon input");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "lookup-field");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          morphs[3] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["choose", ["get", "chooseData", ["loc", [null, [13, 27], [13, 37]]]]], [], ["loc", [null, [13, 9], [13, 39]]]], ["block", "if", [["get", "value", ["loc", [null, [15, 14], [15, 19]]]]], [], 0, 1, ["loc", [null, [15, 8], [23, 15]]]], ["block", "unless", [["get", "readonly", ["loc", [null, [25, 16], [25, 24]]]]], [], 2, null, ["loc", [null, [25, 6], [27, 17]]]], ["block", "unless", [["get", "readonly", ["loc", [null, [29, 14], [29, 22]]]]], [], 3, null, ["loc", [null, [29, 4], [33, 15]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/mobile/components/flexberry-lookup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "dropdown", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [35, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/mobile/components/object-list-view-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "cell");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element3, 'class');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["asterisk small red icon ", ["subexpr", "unless", [["get", "record.data.hasDirtyAttributes", ["loc", [null, [8, 55], [8, 85]]]], "transparent"], [], ["loc", [null, [8, 46], [8, 101]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "cell");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "flexberry-checkbox", [], ["readonly", ["subexpr", "or", [["get", "readonly", ["loc", [null, [14, 27], [14, 35]]]], ["subexpr", "not", [["get", "record.config.canBeSelected", ["loc", [null, [14, 41], [14, 68]]]]], [], ["loc", [null, [14, 36], [14, 69]]]]], [], ["loc", [null, [14, 23], [14, 70]]]], "onChange", ["subexpr", "action", [["get", "selectRow", ["loc", [null, [15, 31], [15, 40]]]], ["get", "record", ["loc", [null, [15, 41], [15, 47]]]]], [], ["loc", [null, [15, 23], [15, 48]]]]], ["loc", [null, [13, 12], [16, 14]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 8
              },
              "end": {
                "line": 25,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "cell");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("i");
            dom.setAttribute(el3, "class", "minus icon");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element2, 'class');
            morphs[1] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["ui ", ["get", "buttonClass", ["loc", [null, [21, 32], [21, 43]]]], " ", ["subexpr", "if", [["subexpr", "or", [["get", "readonly", ["loc", [null, [21, 55], [21, 63]]]], ["subexpr", "not", [["get", "record.config.canBeDeleted", ["loc", [null, [21, 69], [21, 95]]]]], [], ["loc", [null, [21, 64], [21, 96]]]]], [], ["loc", [null, [21, 51], [21, 97]]]], "disabled"], [], ["loc", [null, [21, 46], [21, 110]]]], " button"]]], ["element", "action", [["get", "deleteRow", ["loc", [null, [21, 128], [21, 137]]]], ["get", "record", ["loc", [null, [21, 138], [21, 144]]]]], [], ["loc", [null, [21, 119], [21, 146]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 27,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "object-list-view-helper-column-cell");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element4, 1, 1);
          morphs[1] = dom.createMorphAt(element4, 2, 2);
          morphs[2] = dom.createMorphAt(element4, 3, 3);
          return morphs;
        },
        statements: [["block", "if", [["get", "showAsteriskInRow", ["loc", [null, [6, 14], [6, 31]]]]], [], 0, null, ["loc", [null, [6, 8], [10, 15]]]], ["block", "if", [["get", "showCheckBoxInRow", ["loc", [null, [11, 14], [11, 31]]]]], [], 1, null, ["loc", [null, [11, 8], [18, 15]]]], ["block", "if", [["get", "showDeleteButtonInRow", ["loc", [null, [19, 14], [19, 35]]]]], [], 2, null, ["loc", [null, [19, 8], [25, 15]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 6
            },
            "end": {
              "line": 41,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createAttrMorph(element1, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ui button icon mini ", ["get", "buttonClass", ["loc", [null, [38, 45], [38, 56]]]]]]], ["element", "action", ["expand"], ["bubbles", false], ["loc", [null, [38, 60], [38, 93]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "_expanded", ["loc", [null, [39, 25], [39, 34]]]], "minus", "plus"], [], ["loc", [null, [39, 20], [39, 51]]]], " icon"]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 43,
              "column": 2
            },
            "end": {
              "line": 52,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          dom.setAttribute(el1, "class", "object-list-view-menu");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "flexberry-menu", [], ["class", "basic right pointing", "callItemsOnClickCallbacks", false, "configurateItems", ["subexpr", "action", [["get", "menuInRowConfigurateItems", ["loc", [null, [48, 33], [48, 58]]]], ["get", "record", ["loc", [null, [48, 59], [48, 65]]]]], [], ["loc", [null, [48, 25], [48, 66]]]], "onItemClick", ["subexpr", "action", [["get", "menuInRowItemClick", ["loc", [null, [49, 28], [49, 46]]]], ["get", "record", ["loc", [null, [49, 47], [49, 53]]]]], [], ["loc", [null, [49, 20], [49, 54]]]]], ["loc", [null, [45, 6], [50, 8]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 55,
                "column": 2
              },
              "end": {
                "line": 78,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "object-list-view-row", [], ["record", ["subexpr", "@mut", [["get", "record", ["loc", [null, [57, 13], [57, 19]]]]], [], []], "columns", ["subexpr", "@mut", [["get", "columns", ["loc", [null, [58, 14], [58, 21]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [59, 15], [59, 23]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [60, 15], [60, 23]]]]], [], []], "showMenuColumn", ["subexpr", "@mut", [["get", "showMenuColumn", ["loc", [null, [61, 21], [61, 35]]]]], [], []], "showHelperColumn", ["subexpr", "@mut", [["get", "showHelperColumn", ["loc", [null, [62, 23], [62, 39]]]]], [], []], "defaultRowConfig", ["subexpr", "@mut", [["get", "defaultRowConfig", ["loc", [null, [63, 23], [63, 39]]]]], [], []], "showAsteriskInRow", ["subexpr", "@mut", [["get", "showAsteriskInRow", ["loc", [null, [64, 24], [64, 41]]]]], [], []], "showCheckBoxInRow", ["subexpr", "@mut", [["get", "showCheckBoxInRow", ["loc", [null, [65, 24], [65, 41]]]]], [], []], "showDeleteButtonInRow", ["subexpr", "@mut", [["get", "showDeleteButtonInRow", ["loc", [null, [66, 28], [66, 49]]]]], [], []], "inHierarchicalMode", ["subexpr", "@mut", [["get", "inHierarchicalMode", ["loc", [null, [67, 25], [67, 43]]]]], [], []], "singleColumnCellComponent", ["subexpr", "@mut", [["get", "singleColumnCellComponent", ["loc", [null, [68, 32], [68, 57]]]]], [], []], "loadRecords", ["subexpr", "@mut", [["get", "loadRecords", ["loc", [null, [69, 18], [69, 29]]]]], [], []], "rowClick", ["subexpr", "@mut", [["get", "rowClick", ["loc", [null, [70, 15], [70, 23]]]]], [], []], "selectRow", ["subexpr", "@mut", [["get", "selectRow", ["loc", [null, [71, 16], [71, 25]]]]], [], []], "deleteRow", ["subexpr", "@mut", [["get", "deleteRow", ["loc", [null, [72, 16], [72, 25]]]]], [], []], "menuInRowItemClick", ["subexpr", "@mut", [["get", "menuInRowItemClick", ["loc", [null, [73, 25], [73, 43]]]]], [], []], "menuInRowConfigurateItems", ["subexpr", "@mut", [["get", "menuInRowConfigurateItems", ["loc", [null, [74, 32], [74, 57]]]]], [], []], "_currentLevel", ["subexpr", "@mut", [["get", "_currentLevel", ["loc", [null, [75, 20], [75, 33]]]]], [], []], "hierarchicalIndent", ["subexpr", "@mut", [["get", "_hierarchicalIndent", ["loc", [null, [76, 25], [76, 44]]]]], [], []]], ["loc", [null, [56, 4], [77, 6]]]]],
          locals: ["record"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 54,
              "column": 0
            },
            "end": {
              "line": 79,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "records", ["loc", [null, [55, 10], [55, 17]]]]], ["key", "key"], 0, null, ["loc", [null, [55, 2], [78, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 80,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/mobile/components/object-list-view-row.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "hidden");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element5, [3]);
        var morphs = new Array(10);
        morphs[0] = dom.createAttrMorph(element5, 'class');
        morphs[1] = dom.createAttrMorph(element6, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(element6, 3, 3);
        morphs[4] = dom.createAttrMorph(element7, 'style');
        morphs[5] = dom.createElementMorph(element7);
        morphs[6] = dom.createMorphAt(element7, 1, 1);
        morphs[7] = dom.createMorphAt(element7, 3, 3);
        morphs[8] = dom.createMorphAt(element5, 5, 5);
        morphs[9] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "record.config.customClass", ["loc", [null, [1, 13], [1, 38]]]]]]], ["attribute", "class", ["concat", ["object-list-view-helper-column ", ["subexpr", "unless", [["get", "showHelperColumn", ["loc", [null, [2, 53], [2, 69]]]], "hidden"], [], ["loc", [null, [2, 44], [2, 80]]]]]]], ["content", "record.key", ["loc", [null, [3, 24], [3, 38]]]], ["block", "if", [["get", "showHelperColumn", ["loc", [null, [4, 10], [4, 26]]]]], [], 0, null, ["loc", [null, [4, 4], [27, 11]]]], ["attribute", "style", ["concat", ["padding-left:", ["get", "hierarchicalIndent", ["loc", [null, [29, 78], [29, 96]]]], "px;"]]], ["element", "action", [["get", "rowClick", ["loc", [null, [29, 17], [29, 25]]]], ["get", "record", ["loc", [null, [29, 26], [29, 32]]]]], ["preventDefault", false], ["loc", [null, [29, 8], [29, 55]]]], ["inline", "component", [["get", "singleColumnCellComponent.componentName", ["loc", [null, [30, 18], [30, 57]]]]], ["model", ["subexpr", "@mut", [["get", "record.data", ["loc", [null, [31, 14], [31, 25]]]]], [], []], "columns", ["subexpr", "@mut", [["get", "columns", ["loc", [null, [32, 16], [32, 23]]]]], [], []], "hasEditableValues", ["subexpr", "@mut", [["get", "hasEditableValues", ["loc", [null, [33, 26], [33, 43]]]]], [], []], "dynamicProperties", ["subexpr", "@mut", [["get", "singleColumnCellComponent.componentProperties", ["loc", [null, [34, 26], [34, 71]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [35, 17], [35, 25]]]]], [], []]], ["loc", [null, [30, 6], [36, 8]]]], ["block", "if", [["get", "hasRecords", ["loc", [null, [37, 12], [37, 22]]]]], [], 1, null, ["loc", [null, [37, 6], [41, 13]]]], ["block", "if", [["get", "showMenuColumn", ["loc", [null, [43, 8], [43, 22]]]]], [], 2, null, ["loc", [null, [43, 2], [52, 9]]]], ["block", "if", [["subexpr", "and", [["get", "_expanded", ["loc", [null, [54, 11], [54, 20]]]], ["get", "inHierarchicalMode", ["loc", [null, [54, 21], [54, 39]]]]], [], ["loc", [null, [54, 6], [54, 40]]]]], [], 3, null, ["loc", [null, [54, 0], [79, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/mobile/components/object-list-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "ui-message", [], ["type", "error", "closeable", true, "visible", true, "title", "Error occurred", "message", ["subexpr", "@mut", [["get", "currentError", ["loc", [null, [8, 14], [8, 26]]]]], [], []]], ["loc", [null, [3, 4], [9, 6]]]]],
          locals: ["currentError"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "errorMessages", ["loc", [null, [2, 10], [2, 23]]]]], [], 0, null, ["loc", [null, [2, 2], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 8
              },
              "end": {
                "line": 23,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("th");
            dom.setAttribute(el1, "class", "object-list-view-menu collapsing");
            dom.setAttribute(el1, "data-olv-header-property-name", "OlvRowMenu");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 2
            },
            "end": {
              "line": 26,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("thead");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tr");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          dom.setAttribute(el3, "data-olv-header-property-name", "OlvRowToolbar");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1, 1]);
          var element5 = dom.childAt(element4, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element5, 'class');
          morphs[1] = dom.createMorphAt(element4, 3, 3);
          morphs[2] = dom.createMorphAt(element4, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["object-list-view-operations collapsing ", ["subexpr", "unless", [["get", "showHelperColumn", ["loc", [null, [16, 67], [16, 83]]]], "hidden"], [], ["loc", [null, [16, 58], [16, 94]]]]]]], ["inline", "component", [["get", "headerCellComponent.componentName", ["loc", [null, [17, 22], [17, 55]]]]], ["column", ["subexpr", "hash", [], ["header", ["get", "singleColumnHeaderTitle", ["loc", [null, [18, 32], [18, 55]]]], "sortable", false], ["loc", [null, [18, 19], [18, 71]]]], "dynamicProperties", ["subexpr", "@mut", [["get", "headerCellComponent.componentProperties", ["loc", [null, [19, 30], [19, 69]]]]], [], []]], ["loc", [null, [17, 10], [20, 12]]]], ["block", "if", [["get", "showMenuColumn", ["loc", [null, [21, 14], [21, 28]]]]], [], 0, null, ["loc", [null, [21, 8], [23, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 37,
                  "column": 14
                },
                "end": {
                  "line": 45,
                  "column": 14
                }
              },
              "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "component", ["flexberry-dropdown"], ["value", ["subexpr", "@mut", [["get", "column.filter.condition", ["loc", [null, [39, 24], [39, 47]]]]], [], []], "items", ["subexpr", "@mut", [["get", "column.filter.conditions", ["loc", [null, [40, 24], [40, 48]]]]], [], []], "class", "compact fluid", "placeholder", "", "needChecksOnValue", false], ["loc", [null, [38, 16], [44, 18]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 46,
                  "column": 14
                },
                "end": {
                  "line": 51,
                  "column": 14
                }
              },
              "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "component", [["get", "column.filter.component.name", ["loc", [null, [47, 28], [47, 56]]]]], ["value", ["subexpr", "@mut", [["get", "column.filter.pattern", ["loc", [null, [48, 24], [48, 45]]]]], [], []], "dynamicProperties", ["subexpr", "@mut", [["get", "column.filter.component.properties", ["loc", [null, [49, 36], [49, 70]]]]], [], []]], ["loc", [null, [47, 16], [50, 18]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 10
              },
              "end": {
                "line": 53,
                "column": 10
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "inline fields");
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(":");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            morphs[2] = dom.createMorphAt(element1, 4, 4);
            return morphs;
          },
          statements: [["content", "column.header", ["loc", [null, [36, 21], [36, 38]]]], ["block", "if", [["get", "column.filter.conditions", ["loc", [null, [37, 20], [37, 44]]]]], [], 0, null, ["loc", [null, [37, 14], [45, 21]]]], ["block", "if", [["get", "column.filter.component.name", ["loc", [null, [46, 20], [46, 48]]]]], [], 1, null, ["loc", [null, [46, 14], [51, 21]]]]],
          locals: ["column"],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 55,
                "column": 8
              },
              "end": {
                "line": 57,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1, "class", "object-list-view-menu");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 4
            },
            "end": {
              "line": 59,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "object-list-view-helper-column-cell");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element3, 'class');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["object-list-view-helper-column ", ["subexpr", "unless", [["get", "showHelperColumn", ["loc", [null, [30, 59], [30, 75]]]], "hidden"], [], ["loc", [null, [30, 50], [30, 86]]]]]]], ["block", "each", [["get", "columns", ["loc", [null, [34, 18], [34, 25]]]]], [], 0, null, ["loc", [null, [34, 10], [53, 19]]]], ["block", "if", [["get", "showMenuColumn", ["loc", [null, [55, 14], [55, 28]]]]], [], 1, null, ["loc", [null, [55, 8], [57, 15]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 60,
              "column": 4
            },
            "end": {
              "line": 64,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "style", "text-align:center;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'colspan');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "colspan", ["concat", [["get", "colspan", ["loc", [null, [62, 23], [62, 30]]]]]]], ["content", "placeholder", ["loc", [null, [62, 61], [62, 76]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 65,
              "column": 4
            },
            "end": {
              "line": 87,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "object-list-view-row", [], ["record", ["subexpr", "@mut", [["get", "record", ["loc", [null, [67, 15], [67, 21]]]]], [], []], "columns", ["subexpr", "@mut", [["get", "columns", ["loc", [null, [68, 16], [68, 23]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [69, 17], [69, 25]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [70, 17], [70, 25]]]]], [], []], "showMenuColumn", ["subexpr", "@mut", [["get", "showMenuColumn", ["loc", [null, [71, 23], [71, 37]]]]], [], []], "showHelperColumn", ["subexpr", "@mut", [["get", "showHelperColumn", ["loc", [null, [72, 25], [72, 41]]]]], [], []], "defaultRowConfig", ["subexpr", "@mut", [["get", "defaultRowConfig", ["loc", [null, [73, 25], [73, 41]]]]], [], []], "showAsteriskInRow", ["subexpr", "@mut", [["get", "showAsteriskInRow", ["loc", [null, [74, 26], [74, 43]]]]], [], []], "showCheckBoxInRow", ["subexpr", "@mut", [["get", "showCheckBoxInRow", ["loc", [null, [75, 26], [75, 43]]]]], [], []], "showDeleteButtonInRow", ["subexpr", "@mut", [["get", "showDeleteButtonInRow", ["loc", [null, [76, 30], [76, 51]]]]], [], []], "hierarchicalIndent", ["subexpr", "@mut", [["get", "hierarchicalIndent", ["loc", [null, [77, 27], [77, 45]]]]], [], []], "inHierarchicalMode", ["subexpr", "@mut", [["get", "inHierarchicalMode", ["loc", [null, [78, 27], [78, 45]]]]], [], []], "singleColumnCellComponent", ["subexpr", "@mut", [["get", "singleColumnCellComponent", ["loc", [null, [79, 34], [79, 59]]]]], [], []], "loadRecords", ["subexpr", "@mut", [["get", "loadRecords", ["loc", [null, [80, 20], [80, 31]]]]], [], []], "rowClick", ["subexpr", "action", ["rowClick"], [], ["loc", [null, [81, 17], [81, 36]]]], "selectRow", ["subexpr", "action", ["selectRow"], [], ["loc", [null, [82, 18], [82, 38]]]], "deleteRow", ["subexpr", "action", ["deleteRow"], [], ["loc", [null, [83, 18], [83, 38]]]], "menuInRowItemClick", ["subexpr", "action", ["menuInRowItemClick"], [], ["loc", [null, [84, 27], [84, 56]]]], "menuInRowConfigurateItems", ["subexpr", "action", ["menuInRowConfigurateItems"], [], ["loc", [null, [85, 34], [85, 70]]]]], ["loc", [null, [66, 6], [86, 8]]]]],
        locals: ["record"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 90,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/mobile/components/object-list-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [1]);
        var element7 = dom.childAt(element6, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element6, 'class');
        morphs[2] = dom.createMorphAt(element6, 1, 1);
        morphs[3] = dom.createMorphAt(element7, 1, 1);
        morphs[4] = dom.createMorphAt(element7, 2, 2);
        morphs[5] = dom.createMorphAt(element7, 3, 3);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "errorMessages", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [11, 7]]]], ["attribute", "class", ["concat", ["object-list-view ui unstackable celled ", ["subexpr", "if", [["get", "readonly", ["loc", [null, [12, 58], [12, 66]]]], "readonly"], [], ["loc", [null, [12, 53], [12, 79]]]], " ", ["get", "tableClass", ["loc", [null, [12, 82], [12, 92]]]], " table"]]], ["block", "if", [["get", "singleColumnHeaderTitle", ["loc", [null, [13, 8], [13, 31]]]]], [], 1, null, ["loc", [null, [13, 2], [26, 9]]]], ["block", "if", [["get", "showFilters", ["loc", [null, [28, 10], [28, 21]]]]], [], 2, null, ["loc", [null, [28, 4], [59, 11]]]], ["block", "unless", [["get", "hasContent", ["loc", [null, [60, 14], [60, 24]]]]], [], 3, null, ["loc", [null, [60, 4], [64, 15]]]], ["block", "each", [["get", "contentWithKeys", ["loc", [null, [65, 12], [65, 27]]]]], ["key", "key"], 4, null, ["loc", [null, [65, 4], [87, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("dummy/templates/new-platform-flexberry-services-lock-edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/new-platform-flexberry-services-lock-edit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1, "class", "ui header");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "role", "form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "sixteen wide");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flexberry-edit-panel");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "class", "ui negative button");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element0, [5]);
        var element5 = dom.childAt(element0, [7]);
        var element6 = dom.childAt(element0, [9]);
        var morphs = new Array(17);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createMorphAt(element2, 0, 0);
        morphs[5] = dom.createElementMorph(element3);
        morphs[6] = dom.createMorphAt(element3, 0, 0);
        morphs[7] = dom.createAttrMorph(element4, 'class');
        morphs[8] = dom.createMorphAt(element4, 1, 1);
        morphs[9] = dom.createMorphAt(element4, 3, 3);
        morphs[10] = dom.createAttrMorph(element5, 'class');
        morphs[11] = dom.createMorphAt(element5, 1, 1);
        morphs[12] = dom.createMorphAt(element5, 3, 3);
        morphs[13] = dom.createAttrMorph(element6, 'class');
        morphs[14] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
        morphs[15] = dom.createMorphAt(element6, 3, 3);
        morphs[16] = dom.createMorphAt(element6, 5, 5);
        return morphs;
      },
      statements: [["inline", "t", ["forms.new-platform-flexberry-services-lock-edit.caption"], [], ["loc", [null, [1, 22], [1, 85]]]], ["attribute", "class", ["concat", ["ui ", ["get", "formState", ["loc", [null, [2, 18], [2, 27]]]], " form flexberry-vertical-form"]]], ["inline", "flexberry-validationsummary", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [5, 43], [5, 55]]]]], [], []]], ["loc", [null, [5, 6], [5, 57]]]], ["element", "action", ["delete"], [], ["loc", [null, [10, 55], [10, 74]]]], ["inline", "t", ["forms.edit-form.delete-button-text"], [], ["loc", [null, [10, 75], [10, 117]]]], ["element", "action", ["close"], [], ["loc", [null, [11, 46], [11, 64]]]], ["inline", "t", ["forms.edit-form.close-button-text"], [], ["loc", [null, [11, 65], [11, 106]]]], ["attribute", "class", ["concat", ["field ", ["subexpr", "if", [["get", "model.errors.lockKey", ["loc", [null, [14, 25], [14, 45]]]], "error", ""], [], ["loc", [null, [14, 20], [14, 58]]]]]]], ["inline", "flexberry-field", [], ["value", ["subexpr", "@mut", [["get", "model.lockKey", ["loc", [null, [16, 12], [16, 25]]]]], [], []], "label", ["subexpr", "t", ["forms.new-platform-flexberry-services-lock-edit.lockKey-caption"], [], ["loc", [null, [17, 12], [17, 81]]]], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [18, 15], [18, 23]]]]], [], []]], ["loc", [null, [15, 4], [19, 6]]]], ["inline", "flexberry-validationmessage", [], ["error", ["subexpr", "@mut", [["get", "model.errors.lockKey", ["loc", [null, [20, 40], [20, 60]]]]], [], []], "pointing", "pointing"], ["loc", [null, [20, 4], [20, 82]]]], ["attribute", "class", ["concat", ["field ", ["subexpr", "if", [["get", "model.errors.userName", ["loc", [null, [22, 25], [22, 46]]]], "error", ""], [], ["loc", [null, [22, 20], [22, 59]]]]]]], ["inline", "flexberry-field", [], ["value", ["subexpr", "@mut", [["get", "model.userName", ["loc", [null, [24, 12], [24, 26]]]]], [], []], "label", ["subexpr", "t", ["forms.new-platform-flexberry-services-lock-edit.userName-caption"], [], ["loc", [null, [25, 12], [25, 82]]]], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [26, 15], [26, 23]]]]], [], []]], ["loc", [null, [23, 4], [27, 6]]]], ["inline", "flexberry-validationmessage", [], ["error", ["subexpr", "@mut", [["get", "model.errors.userName", ["loc", [null, [28, 40], [28, 61]]]]], [], []], "pointing", "pointing"], ["loc", [null, [28, 4], [28, 83]]]], ["attribute", "class", ["concat", ["field ", ["subexpr", "if", [["get", "model.errors.lockDate", ["loc", [null, [30, 25], [30, 46]]]], "error", ""], [], ["loc", [null, [30, 20], [30, 59]]]]]]], ["inline", "t", ["forms.new-platform-flexberry-services-lock-edit.lockDate-caption"], [], ["loc", [null, [31, 11], [31, 83]]]], ["inline", "flexberry-datepicker", [], ["value", ["subexpr", "@mut", [["get", "model.lockDate", ["loc", [null, [33, 12], [33, 26]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "readonly", ["loc", [null, [34, 15], [34, 23]]]]], [], []]], ["loc", [null, [32, 4], [35, 6]]]], ["inline", "flexberry-validationmessage", [], ["error", ["subexpr", "@mut", [["get", "model.errors.lockDate", ["loc", [null, [36, 40], [36, 61]]]]], [], []], "pointing", "pointing"], ["loc", [null, [36, 4], [36, 83]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/new-platform-flexberry-services-lock-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/new-platform-flexberry-services-lock-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.new-platform-flexberry-services-lock-list.caption"], [], ["loc", [null, [1, 4], [1, 67]]]], ["inline", "flexberry-objectlistview", [], ["content", ["subexpr", "@mut", [["get", "model", ["loc", [null, [4, 12], [4, 17]]]]], [], []], "modelName", ["subexpr", "@mut", [["get", "modelName", ["loc", [null, [5, 14], [5, 23]]]]], [], []], "modelProjection", ["subexpr", "@mut", [["get", "modelProjection", ["loc", [null, [6, 20], [6, 35]]]]], [], []], "editFormRoute", ["subexpr", "@mut", [["get", "editFormRoute", ["loc", [null, [7, 18], [7, 31]]]]], [], []], "refreshButton", true, "createNewButton", false, "deleteButton", true, "showCheckBoxInRow", true, "showDeleteButtonInRow", true, "pages", ["subexpr", "@mut", [["get", "pages", ["loc", [null, [13, 10], [13, 15]]]]], [], []], "perPageValue", ["subexpr", "@mut", [["get", "perPageValue", ["loc", [null, [14, 17], [14, 29]]]]], [], []], "perPageValues", ["subexpr", "@mut", [["get", "perPageValues", ["loc", [null, [15, 18], [15, 31]]]]], [], []], "hasPreviousPage", ["subexpr", "@mut", [["get", "hasPreviousPage", ["loc", [null, [16, 20], [16, 35]]]]], [], []], "hasNextPage", ["subexpr", "@mut", [["get", "hasNextPage", ["loc", [null, [17, 16], [17, 27]]]]], [], []], "gotoPage", ["subexpr", "action", ["gotoPage"], [], ["loc", [null, [18, 13], [18, 32]]]], "nextPage", ["subexpr", "action", ["nextPage"], [], ["loc", [null, [19, 13], [19, 32]]]], "previousPage", ["subexpr", "action", ["previousPage"], [], ["loc", [null, [20, 17], [20, 40]]]], "orderable", true, "sorting", ["subexpr", "@mut", [["get", "computedSorting", ["loc", [null, [22, 12], [22, 27]]]]], [], []], "sortByColumn", ["subexpr", "action", ["sortByColumn"], [], ["loc", [null, [23, 17], [23, 40]]]], "addColumnToSorting", ["subexpr", "action", ["addColumnToSorting"], [], ["loc", [null, [24, 23], [24, 52]]]], "componentName", "LockObjectListView"], ["loc", [null, [3, 2], [26, 4]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/sitemap-node-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 6,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/sitemap-node-content.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "render", ["sitemap-node", ["get", "child", ["loc", [null, [5, 30], [5, 35]]]]], [], ["loc", [null, [5, 6], [5, 37]]]]],
          locals: ["child"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/sitemap-node-content.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.children", ["loc", [null, [4, 12], [4, 26]]]]], [], 0, null, ["loc", [null, [4, 4], [6, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 7
          }
        },
        "moduleName": "dummy/templates/sitemap-node-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "model.caption", ["loc", [null, [1, 0], [1, 17]]]], ["block", "if", [["get", "model.children.length", ["loc", [null, [2, 6], [2, 27]]]]], [], 0, null, ["loc", [null, [2, 0], [8, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/sitemap-node", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/sitemap-node.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["sitemap-node-content"], [], ["loc", [null, [3, 4], [3, 38]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/sitemap-node.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", [["get", "model.link", ["loc", [null, [2, 13], [2, 23]]]]], ["class", "item", "title", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [2, 43], [2, 54]]]]], [], []], "invokeAction", ["subexpr", "action", ["hideSidebar"], [], ["loc", [null, [2, 68], [2, 90]]]]], 0, null, ["loc", [null, [2, 2], [4, 14]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/sitemap-node.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'title');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "title", ["get", "model.title", ["loc", [null, [6, 28], [6, 39]]]]], ["inline", "partial", ["sitemap-node-content"], [], ["loc", [null, [7, 4], [7, 38]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/sitemap-node.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.link", ["loc", [null, [1, 6], [1, 16]]]]], [], 0, 1, ["loc", [null, [1, 0], [9, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/sitemap", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/sitemap.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "render", ["sitemap-node", ["get", "node", ["loc", [null, [2, 25], [2, 29]]]]], [], ["loc", [null, [2, 1], [2, 31]]]]],
        locals: ["node"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/sitemap.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.nodes", ["loc", [null, [1, 8], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('dummy/transforms/decimal', ['exports', 'ember-flexberry-data/transforms/decimal'], function (exports, _emberFlexberryDataTransformsDecimal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataTransformsDecimal['default'];
    }
  });
});
define('dummy/transforms/file', ['exports', 'ember-flexberry-data/transforms/file'], function (exports, _emberFlexberryDataTransformsFile) {
  exports['default'] = _emberFlexberryDataTransformsFile['default'];
});
define('dummy/transforms/flexberry-enum', ['exports', 'ember-flexberry-data/transforms/flexberry-enum'], function (exports, _emberFlexberryDataTransformsFlexberryEnum) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataTransformsFlexberryEnum['default'];
    }
  });
});
define('dummy/transforms/guid', ['exports', 'ember-flexberry-data/transforms/guid'], function (exports, _emberFlexberryDataTransformsGuid) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataTransformsGuid['default'];
    }
  });
});
define('dummy/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant', ['exports', 'ember-flexberry-data/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant'], function (exports, _emberFlexberryDataTransformsICSSoftSTORMNETBusinessAuditObjectsTExecutionVariant) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataTransformsICSSoftSTORMNETBusinessAuditObjectsTExecutionVariant['default'];
    }
  });
});
define('dummy/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation', ['exports', 'ember-flexberry-data/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation'], function (exports, _emberFlexberryDataTransformsICSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryDataTransformsICSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation['default'];
    }
  });
});
define('dummy/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('dummy/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define('dummy/validators/local/datetime', ['exports', 'ember-flexberry/validators/local/datetime'], function (exports, _emberFlexberryValidatorsLocalDatetime) {
  exports['default'] = _emberFlexberryValidatorsLocalDatetime['default'];
});
define('dummy/views/application', ['exports', 'ember'], function (exports, _ember) {

  /**
    Override wrapper tag name to disable wrapper.
    The sidebar, as per Semantic-UI's documentation,
    need to be directly below the body element.
  */
  exports['default'] = _ember['default'].Component.extend({
    tagName: ''
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"backendUrls":{"root":"https://flexberry.github.io/ember-flexberry-gis-yandex","api":"https://flexberry.github.io/ember-flexberry-gis-yandex"},"log":{"enabled":false},"useUserSettingsService":false,"name":"ember-flexberry-gis-yandex","version":"0.1.0+d3670810"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
