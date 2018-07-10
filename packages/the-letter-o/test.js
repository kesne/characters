const ossert = require('assert');
const mod = require('./');
const expected = 'o';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
