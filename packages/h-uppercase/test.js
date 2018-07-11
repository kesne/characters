const Hssert = require('assert');
const mod = require('./');
const expected = 'H';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
