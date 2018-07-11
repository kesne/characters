const Qssert = require('assert');
const mod = require('./');
const expected = 'Q';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
