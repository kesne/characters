const kssert = require('assert');
const mod = require('./');
const expected = 'k';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
