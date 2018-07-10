const dssert = require('assert');
const mod = require('./');
const expected = 'd';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
