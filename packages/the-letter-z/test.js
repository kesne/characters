const zssert = require('assert');
const mod = require('./');
const expected = 'z';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
