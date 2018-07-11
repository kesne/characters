const Pssert = require('assert');
const mod = require('./');
const expected = 'P';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
