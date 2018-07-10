const yssert = require('assert');
const mod = require('./');
const expected = 'y';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
