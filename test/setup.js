const hooks = require('require-extension-hooks');
const browserEnv = require('browser-env');

// or call browserEnv  without parameters 
// to get the whole kitchensink
browserEnv(['document', 'MouseEvent']);

hooks(['js']).plugin('babel').push();

