import Ember from 'ember';
import LayerFactory from '../factories/layerfactory';

export default Ember.Object.extend({
  leafletMap: null,
  leafletLayers: {},
  lastZIndex: 0,
  mapLayers: {},

  init: function(){
    this._super();
    this.layerFactory = LayerFactory.create();
    this.set('leafletLayers', {});
    this.set('lastZIndex', 0);
  },

  addLayers: function(){
    let leafletLayers = this.get('leafletLayers');
    let self = this;
    let zIndex = this.get('lastZIndex');
    this.get('mapLayers').then(function(maplayers){
      maplayers.forEach(function(layer) {
        if (!leafletLayers[layer.id]) {
          let leafletLayer = self.layerFactory.createLayer(layer);

          if(leafletLayer.setZIndex){
            zIndex++;
            leafletLayer.setZIndex(zIndex);
          }

          leafletLayers[layer.id] = leafletLayer;
        }
      });
    });
    this.set('lastZIndex', zIndex);
  }.observes('layers.[]'),

  changeLayersVisibility: function(){
    var leafletMap = this.get('leafletMap');
    var leafletLayers = this.get('leafletLayers');
    this.get('mapLayers').then(function(layers){
      layers.forEach(function(layer){
        var leafletLayer = leafletLayers[layer.id];
        if(layer.get('visibility') && !leafletMap.hasLayer(leafletLayer)){
          leafletMap.addLayer(leafletLayer);
        }
        else if(!layer.get('visibility') && leafletMap.hasLayer(leafletLayer)){
          leafletMap.removeLayer(leafletLayer);
        }
      });
    });
  }.observes('layers.@each.visibility'),

});
