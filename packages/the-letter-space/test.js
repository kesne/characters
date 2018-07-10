const spacessert = require('assert');
const mod = require('./');
const expected = ' ';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
