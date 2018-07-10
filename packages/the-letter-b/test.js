const bssert = require('assert');
const mod = require('./');
const expected = 'b';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
