const pssert = require('assert');
const mod = require('./');
const expected = 'p';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
