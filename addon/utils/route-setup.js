export default function(self) {
   self.route('layers', { path: '/' });
   self.route('maps', function() {
     self.route('map', { path: 'maps/:id' });
   });
}
