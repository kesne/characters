const Essert = require('assert');
const mod = require('./');
const expected = 'E';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
