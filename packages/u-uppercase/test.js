const Ussert = require('assert');
const mod = require('./');
const expected = 'U';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
