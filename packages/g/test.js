const gssert = require('assert');
const mod = require('./');
const expected = 'g';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
