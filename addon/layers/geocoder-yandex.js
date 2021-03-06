/**
  @module ember-flexberry-gis-yandex
*/

import Ember from 'ember';
import BaseLayer from 'ember-flexberry-gis/layers/-private/base';

/**
  Class describing metadata for yandex-geocoder layer
  that uses API of [yandex geocoder](https://tech.yandex.ru/maps/doc/geocoder/desc/concepts/About-docpage/).

  @class GeocoderYandexLayer
  @extends BaseLayer
*/
export default BaseLayer.extend({
  /**
    Icon class related to layer type.

    @property iconClass
    @type String
    @default 'info circle icon'
  */
  iconClass: 'info circle icon',

  /**
    Permitted operations related to layer type.

    @property operations
    @type String[]
    @default ['edit', 'remove', 'search']
  */
  operations: ['edit', 'remove', 'search'],

  /**
    Creates new settings object (with settings related to layer-type).

    @method createSettings
    @returns {Object} New settings object (with settings related to layer-type).
  */
  createSettings() {
    let settings = this._super(...arguments);
    Ember.$.extend(true, settings, {
      url: undefined,
      autocompleteUrl: undefined,
    });

    return settings;
  },

  /**
    Creates new search settings object (with search settings related to layer-type).

    @method createSearchSettings
    @returns {Object} New search settings object (with search settings related to layer-type).
  */
  createSearchSettings() {
    let settings = this._super(...arguments);
    Ember.$.extend(true, settings, {
      queryString: '',
      maxResultsCount: 10,
      skipResultsCount: 0,
      language: 'ru_RU',
      apikey: undefined,
    });

    return settings;
  }
});
