/**
  @module ember-flexberry-gis-yandex-dummy
*/

import Ember from 'ember';
import EditMapRoute from 'ember-flexberry-gis/routes/edit-map';

/**
  Map edit route.

  @class MapRoute
  @extends EditMapRoute
*/
export default EditMapRoute.extend({
  model() {
    let store = this.get('store');

    let rootLayer = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      type: 'group'
    });

    let map = store.createRecord('new-platform-flexberry-g-i-s-map', {
      name: 'testMap',
      zoom: 14,
      public: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      lat: 44.9392254340553,
      lng: 34.105339050293,
      rootLayer: rootLayer
    });

    let yandexGeocoderLayer = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      parent: rootLayer,
      type: 'geocoder-yandex',
      name: 'Yandex geocoder layer',
      visibility: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      settings: '{"searchSettings":{"canBeSearched":true,' +
        '"featuresPropertiesSettings":{"displayPropertyIsCallback":false,"displayProperty":"text",' +
        '"excludedProperties":["description","text"],"localizedProperties":{"ru":{"name":"Имя",' +
        '"description":"Описание","text":"Текст","address":"Адрес","country":"Страна",' +
        '"administrativeArea":"Регион","subAdministrativeArea":"Район","locality":"Населенный пункт",' +
        '"premise":"Объект"},"en":{"name":"Name","description":"Description","text":"Text","address":"Address",' +
        '"country":"Country","administrativeArea":"Administrative area",' +
        '"subAdministrativeArea":"Subadministrative area","locality":"Locality","premise":"Premise"}}}},' +
        '"url":"https://geocode-maps.yandex.ru/1.x/"}',
      index: 0
    });

    let yandexTileLayerMap = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      parent: rootLayer,
      type: 'tile-yandex',
      name: 'Yandex tile layer (map)',
      visibility: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      settings: '{"type":"map"}',
      index: 0
    });

    let yandexTileLayerSatellite = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      parent: rootLayer,
      type: 'tile-yandex',
      name: 'Yandex tile layer (satellite)',
      visibility: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      settings: '{"type":"satellite"}',
      index: 0
    });

    let yandexTileLayerHybrid = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      parent: rootLayer,
      type: 'tile-yandex',
      name: 'Yandex tile layer (hybrid)',
      visibility: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      settings: '{"type":"hybrid"}',
      index: 0
    });

    rootLayer.set('layers', Ember.A([
      yandexGeocoderLayer,
      yandexTileLayerMap,
      yandexTileLayerSatellite,
      yandexTileLayerHybrid
    ]));

    return map;
  }
});
