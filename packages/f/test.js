const fssert = require('assert');
const mod = require('./');
const expected = 'f';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
