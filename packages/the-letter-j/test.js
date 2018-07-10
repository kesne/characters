const jssert = require('assert');
const mod = require('./');
const expected = 'j';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
