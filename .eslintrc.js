'use strict';

const eslintConfigStandardPath = require('elint-preset-test').eslintConfigStandardPath;

module.exports = {
  extends: eslintConfigStandardPath,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
    jest: true,
  },
};
