const yssert = require('assert');
const mod = require('./');
const expected = 'y';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
