const vssert = require('assert');
const mod = require('./');
const expected = 'v';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
