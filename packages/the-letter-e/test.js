const essert = require('assert');
const mod = require('./');
const expected = 'e';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
