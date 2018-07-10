// This is a script used to stamp out a letter module based on the "a" letter module.

const fs = require('fs');
const path = require('path');
const [, , letter] = process.argv;

console.log(`Creating module "the-letter-${letter}"`);

const letterA = path.join(__dirname, 'packages/the-letter-a');
const files = fs.readdirSync(letterA);

const nextLetter = path.join(__dirname, 'packages', `the-letter-${letter}`);
try {
  fs.mkdirSync(nextLetter);
} catch (e) {
  // Ignore
}

files.forEach(filename => {
  const original = fs.readFileSync(path.join(letterA, filename), 'utf8');
  // This is a rough replacement of the letter references:
  const replaced = original
    .replace('-a', `-${letter}`)
    .replace(' a', ` ${letter}`)
    .replace("'a'", `'${letter}'`)
    .replace('"a"', `"${letter}"`);

  fs.writeFileSync(path.join(nextLetter, filename), replaced);
});
