import DS from 'ember-data';

var MapClass = DS.Model.extend({
  layers: DS.hasMany('maplayer', {async: true}),
  name: DS.attr('string'),
  center: DS.attr(),
  zoom: DS.attr('int')
});

export default MapClass;
