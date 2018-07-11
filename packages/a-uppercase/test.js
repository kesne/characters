const assert = require('assert');
const mod = require('./');
const expected = 'A';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
