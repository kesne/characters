const nssert = require('assert');
const mod = require('./');
const expected = 'n';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
