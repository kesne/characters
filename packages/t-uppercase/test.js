const Tssert = require('assert');
const mod = require('./');
const expected = 'T';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
