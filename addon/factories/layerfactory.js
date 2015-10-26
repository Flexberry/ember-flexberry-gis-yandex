import Ember from 'ember';

export default Ember.Object.extend({
  createLayer: function(layerModel){
    if (layerModel.get('type') === 'Tile') {
      return L.tileLayer(layerModel.get('layer.url'), layerModel.get('layer.options'));
    }

    if (layerModel.get('type') === 'WMS') {
      return L.tileLayer.wms(layerModel.get('layer.url'), layerModel.get('layer.options'));
    }
  }
});
