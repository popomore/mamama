'use strict';

const path = require('path');
const coffee = require('coffee');
const rimraf = require('mz-modules/rimraf');
const fs = require('mz/fs');
const assert = require('assert');

const bin = path.join(__dirname, '../bin/ma.js');

describe('test/init.test.js', () => {
  const dest = path.join(__dirname, 'fixtures/tmp');
  afterEach(() => rimraf(dest));

  it('should run the simple init', function* () {
    const boilerplate = path.join(__dirname, 'fixtures/simple');
    yield coffee.fork(bin, [ '--from-dir', boilerplate, dest ])
      .debug()
      // .expect('stdout', '')
      .expect('code', 0)
      .end();

    let content = yield fs.readFile(path.join(dest, 'package.json'), 'utf8');
    assert(content === '{"name":"test"}');

    content = yield fs.readFile(path.join(dest, 'app/controller/home.js'), 'utf8');
    assert(content === 'module.exports = function* () {};');
  });
});
