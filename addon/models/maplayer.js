import DS from 'ember-data';

var mapLayer = DS.Model.extend({
  map: DS.belongsTo('map'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  layer: DS.attr(),
  visibility: DS.attr('boolean')
});

export default mapLayer;
