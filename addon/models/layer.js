import DS from 'ember-data';

var Layer = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  crs: DS.attr('string'),
  type: DS.attr('string')
});

export default Layer;
