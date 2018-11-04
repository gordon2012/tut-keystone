var keystone = require('keystone');

keystone.init({
  name: 'Keystone CMS',
  static: ['./server/public/js/', './server/public/img/'],
  'auto update': true,
  mongo: 'mongodb://localhost/tut-keystone',
  auth: true,
  'user model': 'User',
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3'
});

keystone.import('./server/models');

keystone.set('routes', require('./server/routes'));

keystone.start();
