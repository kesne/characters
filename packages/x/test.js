const xssert = require('assert');
const mod = require('./');
const expected = 'x';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
