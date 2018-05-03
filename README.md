# eslint-config-jest-files

[![Build Status](https://travis-ci.com/timche/eslint-config-jest-files.svg?branch=master)](https://travis-ci.com/timche/eslint-config-jest-files)
[![npm](https://img.shields.io/npm/v/eslint-config-jest-files.svg)](https://www.npmjs.com/package/eslint-config-jest-files)
[![npm](https://img.shields.io/npm/dm/eslint-config-jest-files.svg)](https://www.npmjs.com/package/eslint-config-jest-files)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Jest with global variables in [test files](https://facebook.github.io/jest/docs/en/configuration.html#testmatch-array-string)

## Install

```
npm install --save-dev eslint-config-jest-files
```

## Usage

`.eslintrc`

```json
{
  "extends": "jest-files"
}
```

`package.json`

```json
{
  "eslintConfig": {
    "extends": "jest-files"
  }
}
```
