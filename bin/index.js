#!/usr/bin/env node

const program = require('commander');
const packageInfo = require('../package.json');
const ora = require('ora');

program
  .version(packageInfo.version)
  .command('pou', `(verb) (-a) to erect, establish, fix, elevate on poles.
Create the core web server
  `)
  .command('huanui', `(noun) road, highway, path, pathway, street
Create a plugin to encapsulate route requests or middleware
  `)
  .command('rua', `(noun) storage pit.
(noun) abyss - place where the heavenly bodies disappear to before reappearing again.
Create a data backed service`)

  .description('(noun) making, construction, creation, building, formation, structure, composition.');

program.parse(process.argv);
