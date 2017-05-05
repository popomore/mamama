'use strict';

module.exports = ma => {
  ma.action('package.json', function* () {
    yield ma.add('package.json', '{"name":"test"}');
    yield ma.add('app/controller/home.js', 'module.exports = function* () {};');
  });

  ma.run(function* () {
    yield ma.runAction('package.json');
  });
};
