const Rssert = require('assert');
const mod = require('./');
const expected = 'R';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
