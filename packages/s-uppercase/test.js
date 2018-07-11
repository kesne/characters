const Sssert = require('assert');
const mod = require('./');
const expected = 'S';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
