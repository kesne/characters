const Cssert = require('assert');
const mod = require('./');
const expected = 'C';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
