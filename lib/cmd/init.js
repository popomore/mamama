'use strict';

const path = require('path');
const Command = require('common-bin');
const mkdirp = require('mz-modules/mkdirp');
const Context = require('../context');


class InitCommand extends Command {

  constructor(rawArgv) {
    super(rawArgv);

    this.options = {
      fromDir: {
        type: 'string',
      },
    };
  }

  * run({ argv }) {
    const dest = path.resolve(argv._[0]);
    const boilerplate = path.resolve(argv.fromDir);

    yield mkdirp(dest);
    const ctx = new Context({ dest, boilerplate });
    const init = require(boilerplate);
    init(ctx);

    yield ctx.start();
  }

  get description() {
    return 'init document';
  }
}

module.exports = InitCommand;
