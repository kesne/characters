const hssert = require('assert');
const mod = require('./');
const expected = 'h';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
