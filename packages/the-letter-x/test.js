const xssert = require('assert');
const mod = require('./');
const expected = 'x';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
