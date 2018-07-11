const Dssert = require('assert');
const mod = require('./');
const expected = 'D';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
