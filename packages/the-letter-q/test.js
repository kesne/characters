const qssert = require('assert');
const mod = require('./');
const expected = 'q';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
