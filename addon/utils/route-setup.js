export default function(router) {
   router.route('layers', { path: '/' });
   router.route('maps', function() {
     this.route('map', { path: '/:id' });
   });
}
