//file isn't transpiled
//register babel to transpile before tests are run
require('babel-register')();
//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {}
