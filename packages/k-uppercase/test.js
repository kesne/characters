const Kssert = require('assert');
const mod = require('./');
const expected = 'K';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
