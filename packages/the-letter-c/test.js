const cssert = require('assert');
const mod = require('./');
const expected = 'c';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
