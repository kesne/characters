const rssert = require('assert');
const mod = require('./');
const expected = 'r';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
