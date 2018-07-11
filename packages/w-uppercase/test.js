const Wssert = require('assert');
const mod = require('./');
const expected = 'W';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
