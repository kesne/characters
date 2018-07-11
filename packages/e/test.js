const essert = require('assert');
const mod = require('./');
const expected = 'e';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
