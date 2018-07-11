const Ossert = require('assert');
const mod = require('./');
const expected = 'O';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
