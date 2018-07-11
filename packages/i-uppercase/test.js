const Issert = require('assert');
const mod = require('./');
const expected = 'I';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
