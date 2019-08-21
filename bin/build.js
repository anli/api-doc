#! /usr/bin/env node
var shell = require('shelljs');
shell.exec('mkdir dist && mkdir tmp');
shell.exec('cp node_modules/swagger-ui-dist/* dist && rm -f dist/index.html');
shell.exec('npx yaml2json src/open-api.yaml > tmp/open-api.json');
shell.exec(
  'CONTENT=$(cat tmp/open-api.json) && sed "s|SPEC_PLACEHOLDER|${CONTENT//\\n/\\\\n}|" src/index.html >dist/index.html'
);
