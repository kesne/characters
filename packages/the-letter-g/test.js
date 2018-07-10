const gssert = require('assert');
const mod = require('./');
const expected = 'g';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
