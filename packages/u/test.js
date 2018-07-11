const ussert = require('assert');
const mod = require('./');
const expected = 'u';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
