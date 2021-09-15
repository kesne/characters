// This is a script used to stamp out a character module based on the "a" character module.

import fs from "fs/promises";
import path from "path";

const packagesRoot = path.join(__dirname, "..", "packages");
const packagePath = (pkg: string) => path.join(packagesRoot, pkg);
const templatePackage = packagePath("a");

const MODULES = {
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",
  "a-uppercase": "A",
  "b-uppercase": "B",
  "c-uppercase": "C",
  "d-uppercase": "D",
  "e-uppercase": "E",
  "f-uppercase": "F",
  "g-uppercase": "G",
  "h-uppercase": "H",
  "i-uppercase": "I",
  "j-uppercase": "J",
  "k-uppercase": "K",
  "l-uppercase": "L",
  "m-uppercase": "M",
  "n-uppercase": "N",
  "o-uppercase": "O",
  "p-uppercase": "P",
  "q-uppercase": "Q",
  "r-uppercase": "R",
  "s-uppercase": "S",
  "t-uppercase": "T",
  "u-uppercase": "U",
  "v-uppercase": "V",
  "w-uppercase": "W",
  "x-uppercase": "X",
  "y-uppercase": "Y",
  "z-uppercase": "Z",

  space: " ",
  semicolon: ";",
  colon: ":",
};

async function copyFiles(dir: string, pkgName: string, char: string) {
  const mirrorDir = dir.replace("packages/a", `packages/${pkgName}`);
  await fs.mkdir(mirrorDir, { recursive: true });

  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      await copyFiles(path.join(dir, file.name), pkgName, char);
    } else {
      const original = await fs.readFile(path.join(dir, file.name), "utf8");

      const replaced = original
        .replace("/a", `/${pkgName}`)
        .replace(" a", ` ${char}`)
        .replace("'a'", `'${char}'`)
        .replace('"a"', `"${char}"`);

      await fs.writeFile(path.join(mirrorDir, file.name), replaced);
    }
  }
}

async function createModule(pkgName: string, char: string) {
  console.log(`Creating module "@characters/${pkgName}"`);
  await copyFiles(templatePackage, pkgName, char);
}

Object.entries(MODULES).forEach(([pkgName, char]) => {
  createModule(pkgName, char);
});
