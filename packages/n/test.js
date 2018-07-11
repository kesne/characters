const nssert = require('assert');
const mod = require('./');
const expected = 'n';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
