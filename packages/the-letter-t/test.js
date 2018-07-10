const tssert = require('assert');
const mod = require('./');
const expected = 't';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
