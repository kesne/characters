const Jssert = require('assert');
const mod = require('./');
const expected = 'J';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
