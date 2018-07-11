const Nssert = require('assert');
const mod = require('./');
const expected = 'N';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
