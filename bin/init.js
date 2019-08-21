#! /usr/bin/env node
var shell = require('shelljs');
shell.exec('mkdir src');
shell.exec('cp node_modules/static-open-api/src/index.html src/index.html');
shell.exec(
  'cp node_modules/static-open-api/src/open-api.yaml src/open-api.yaml'
);
