const Yssert = require('assert');
const mod = require('./');
const expected = 'Y';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
