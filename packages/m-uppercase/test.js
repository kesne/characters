const Mssert = require('assert');
const mod = require('./');
const expected = 'M';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
