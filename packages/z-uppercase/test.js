const Zssert = require('assert');
const mod = require('./');
const expected = 'Z';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
