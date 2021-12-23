const fs = require('fs');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    const source = fs.readFileSync(__dirname + '/package.json').toString('utf-8');
    const sourceObj = JSON.parse(source);

    delete sourceObj['files'];
    delete sourceObj['husky'];
    delete sourceObj['size-limit'];
    delete sourceObj['scripts'];
    delete sourceObj['devDependencies'];
    delete sourceObj['workspaces'];

    sourceObj.main = sourceObj.main.replace('src/index.ts', 'index.js');
    sourceObj.module = sourceObj.module.replace('build/', '');
    sourceObj.typings = sourceObj.typings.replace('build/', '');
    sourceObj.bundle.esm = sourceObj.bundle.esm.replace('build/', '');
    sourceObj.bundle.umd = sourceObj.bundle.umd.replace('build/', '');
    sourceObj.iife.radioPage = sourceObj.iife.radioPage.replace('build/', '');

    fs.writeFileSync(__dirname + '/build/package.json', Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
    fs.writeFileSync(__dirname + '/build/version.txt', Buffer.from(sourceObj.version, 'utf-8'));

    fs.copyFileSync(__dirname + '/LICENSE', __dirname + '/build/LICENSE');
    fs.copyFileSync(__dirname + '/README.md', __dirname + '/build/README.md');
    fs.copyFileSync(__dirname + '/.npmignore', __dirname + '/build/.npmignore');
}

main();
