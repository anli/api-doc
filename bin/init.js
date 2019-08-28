#! /usr/bin/env node
var shell = require('shelljs');
shell.exec('mkdir src');
shell.exec('cp node_modules/@anli/api-doc/src/index.html src/index.html');
shell.exec('cp node_modules/@anli/api-doc/src/open-api.yaml src/open-api.yaml');
