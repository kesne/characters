// This is a script used to stamp out a character module based on the "a" character module.

const fs = require('fs');
const path = require('path');
const [, , characters, modifier = ''] = process.argv;

const pkgA = path.join(__dirname, `packages/a${modifier}`)

const files = fs.readdirSync(pkgA);

characters.split(',').forEach(char => {
  const nextPackageName = `${char}${modifier}`.toLowerCase();
  console.log(`Creating module "@characters/${nextPackageName}"`);

  const nextPackage = path.join(__dirname, 'packages', `${nextPackageName}`);
  try {
    fs.mkdirSync(nextPackage);
  } catch (e) {
    // Ignore
  }

  files.forEach(filename => {
    const original = fs.readFileSync(path.join(pkgA, filename), 'utf8');
    // This is a rough replacement of the character references:
    const replaced = original
      // Package name needs to be lowercase:
      .replace('/a', `/${char}`.toLowerCase())
      .replace(' a', ` ${char}`)
      .replace(' A', ` ${char}`)
      .replace("'a'", `'${char}'`)
      .replace("'A'", `'${char}'`)
      .replace('"a"', `"${char}"`)
      .replace('"A"', `"${char}"`);

    fs.writeFileSync(path.join(nextPackage, filename), replaced);
  });
});
