'use strict';

module.exports = ma => {
  ma.action('package.json', async () => {
    await ma.add('package.json', '{}');
  });

  ma.run(async () => {
    await ma.runAction('package.json');
  });
};
