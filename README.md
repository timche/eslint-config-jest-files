# eslint-config-jest-files

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Jest global variables in [test files](https://facebook.github.io/jest/docs/en/configuration.html#testmatch-array-string)

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
