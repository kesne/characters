const ussert = require('assert');
const mod = require('./');
const expected = 'u';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
