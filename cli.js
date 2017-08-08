#!/usr/bin/env node
const meow = require('meow');
const deluge = require('.');

const cli = meow(`
	Usage
	  $ deluge [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ deluge
	  unicorns & rainbows
	  $ deluge ponies
	  ponies & rainbows
`);

console.log(deluge(cli.input[0] || 'unicorns'));
