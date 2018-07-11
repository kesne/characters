const hssert = require('assert');
const mod = require('./');
const expected = 'h';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
