const zssert = require('assert');
const mod = require('./');
const expected = 'z';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
