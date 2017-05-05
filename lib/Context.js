'use strict';

const co = require('co');
const fs = require('mz/fs');
const path = require('path');
const mkdirp = require('mz-modules/mkdirp');
const Action = require('./action');

class Context {

  constructor(options) {
    this.dest = options.dest;
    this.boilerplate = options.boilerplate;
    this.actions = new Map();
  }

  start() {
    const main = this.main;
    return co(function* () {
      yield main();
    });
  }

  run(main) {
    this.main = main;
  }

  register() {

  }

  use() {

  }

  // ma.action('init', async (ma) => {
  //
  // });
  action(name, callback) {
    this.actions.set(name, new Action(callback));
  }

  runAction(name) {
    return this.actions.get(name).run();
  }

  add(filepath, content) {
    const fullpath = path.join(this.dest, filepath);
    return mkdirp(path.dirname(fullpath))
      .then(() => fs.writeFile(fullpath, content));
  }

  delete() {

  }

  transform() {

  }

  copy() {

  }

  prompt() {

  }

  registerPrompt() {

  }

}

module.exports = Context;
