import Ember from 'ember';

export default Ember.Component.extend({
  leafletMap: null,
  layers: {},
  lastZIndex: 0,

  createMap: function() {
    this.destroyMap();
    var leafletMap = new L.Map(this.get('elementId'), this.get('options'));
    var map = this.get('map');
    leafletMap.setView(map.get('center'), map.get('zoom'));
    this.set('leafletMap', leafletMap);
    this.set('layers', {});
    this.set('lastZIndex', 0);
    this.addLayers();
    this.changeLayersVisibility();
  }.on('didInsertElement'),

  addLayers: function(){
    let leafletLayers = this.get('layers');
    let zIndex = this.get('lastZIndex');
    this.get('map.layers').then(function(maplayers){
      maplayers.forEach(function(layer) {
        if (!leafletLayers[layer.id]) {
          let leafletLayer;
          if (layer.get('type') === 'Tile') {
            var layerDesc = layer.get('layer');
            leafletLayer = L.tileLayer(layerDesc.url, layerDesc.options);
          }

          if (layer.get('type') === 'WMS') {
            var layerDesc = layer.get('layer');
            leafletLayer = L.tileLayer.wms(layerDesc.url, layerDesc.options);
          }

          if(leafletLayer.setZIndex){
            zIndex++;
            leafletLayer.setZIndex(zIndex);
          }

          leafletLayers[layer.id] = leafletLayer;
        }
      });
    });

    this.set('lastZIndex', zIndex);
  }.observes('map.layers.[]'),

  changeLayersVisibility: function(){
    var leafletMap = this.get('leafletMap');
    var leafletLayers = this.get('layers');
    this.get('map.layers').then(function(layers){
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
  }.observes('map.layers.@each.visibility'),

  destroyMap: function(){
    var leafletMap = this.get('leafletMap');
    if(leafletMap){
      leafletMap.remove();
      this.set('leafletMap', null);
    }

  }.on('willDestroyElement')
});
