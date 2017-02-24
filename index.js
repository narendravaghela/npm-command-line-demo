#! /usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .command('new [directory_name]', 'install one or more packages')
  .action(function (cmd, dir) {
     cmdValue = cmd;
     dirValue = dir;
  });

program.parse(process.argv);

if (typeof cmdValue === 'undefined') {
   console.error('no command given!');
   process.exit(1);
}

console.log('command:', cmdValue);
console.log('directory:', dirValue || "no directory given");
process.exit(0);
