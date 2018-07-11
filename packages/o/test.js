const ossert = require('assert');
const mod = require('./');
const expected = 'o';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
