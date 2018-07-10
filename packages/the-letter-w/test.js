const wssert = require('assert');
const mod = require('./');
const expected = 'w';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
