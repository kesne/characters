const wssert = require('assert');
const mod = require('./');
const expected = 'w';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
