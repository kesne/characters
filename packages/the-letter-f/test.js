const fssert = require('assert');
const mod = require('./');
const expected = 'f';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
