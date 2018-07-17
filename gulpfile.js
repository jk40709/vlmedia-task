var requireDir = require('require-dir');

// Natahat vsechny tasky ze slozky 'tasks'
requireDir(
  './gulp/tasks',
  {
    recurse: true
  }
);
