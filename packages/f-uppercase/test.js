const Fssert = require('assert');
const mod = require('./');
const expected = 'F';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
