#! /usr/bin/env node
var shell = require('shelljs');
shell.exec(
  "PASSWORD=$(grep 'PASSWORD' .env | cut -d '=' -f 2) && npx staticrypt dist/index.html $PASSWORD -o dist/index.html"
);
