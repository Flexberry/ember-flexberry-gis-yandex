import Ember from 'ember';
import Layers from 'ember-flexberry-gis/layers/layers';

export default Ember.Component.extend({
  leafletMap: null,

  init: function() {
    this._super();
  },

  createMap: function() {
    this.destroyMap();
    var leafletMap = new L.Map(this.get('elementId'), this.get('options'));
    var map = this.get('map');
    leafletMap.setView(map.get('center'), map.get('zoom'));
    leafletMap.on('move', function(){
      map.set('center', leafletMap.getCenter());
    });

    leafletMap.on('zoomend', function(){
      map.set('zoom', leafletMap.getZoom());
    });

    this.set('leafletMap', leafletMap);

    var layerControl = Layers.create({leafletMap: leafletMap, mapLayers: this.get('map.layers')});
    this.set('layerControl', layerControl);

    layerControl.addLayers();
    layerControl.changeLayersVisibility();
  }.on('didInsertElement').observes('map'),


  destroyMap: function(){
    var leafletMap = this.get('leafletMap');
    if(leafletMap){
      leafletMap.remove();
      this.set('leafletMap', null);
    }
  }.on('willDestroyElement')
});
