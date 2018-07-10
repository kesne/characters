const assert = require('assert');
const mod = require('./');
const expected = 'a';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
