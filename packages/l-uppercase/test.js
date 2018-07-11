const Lssert = require('assert');
const mod = require('./');
const expected = 'L';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
