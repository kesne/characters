const mssert = require('assert');
const mod = require('./');
const expected = 'm';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
