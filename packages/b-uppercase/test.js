const Bssert = require('assert');
const mod = require('./');
const expected = 'B';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
