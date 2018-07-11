const cssert = require('assert');
const mod = require('./');
const expected = 'c';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
