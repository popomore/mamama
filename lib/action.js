'use strict';

const co = require('co');

class Action {
  constructor(fn) {
    this.fn = fn;
  }

  run() {
    const fn = this.fn;
    return co(function* () {
      yield fn();
    });
  }
}

module.exports = Action;
