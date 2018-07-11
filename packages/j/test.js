const jssert = require('assert');
const mod = require('./');
const expected = 'j';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
