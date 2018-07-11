const issert = require('assert');
const mod = require('./');
const expected = 'i';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
