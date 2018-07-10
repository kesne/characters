const issert = require('assert');
const mod = require('./');
const expected = 'i';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
