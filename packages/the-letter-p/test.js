const pssert = require('assert');
const mod = require('./');
const expected = 'p';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
