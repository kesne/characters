const Xssert = require('assert');
const mod = require('./');
const expected = 'X';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
