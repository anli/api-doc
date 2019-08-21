#! /usr/bin/env node
var shell = require('shelljs');

shell.exec('api-doc-clean && api-doc-build && api-doc-encrypt');
