const eslint = require('eslint')
const tempWrite = require('temp-write')
const eslintConfig = require('.')

const fixture = `test('foo', () => {\n\texpect('foo').toBe('foo');\n});\n`

async function runEslint(filePath) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: await tempWrite(
      JSON.stringify(Object.assign({ extends: 'xo' }, eslintConfig))
    )
  })

  const fixturePath = await tempWrite(fixture, filePath)

  return linter.executeOnFiles([fixturePath]).results[0].messages
}

test('**/*.spec.js(x)', async () => {
  expect(await runEslint('test.spec.js')).toHaveLength(0)
  expect(await runEslint('test/test.spec.js')).toHaveLength(0)
  expect(await runEslint('test.spec.jsx')).toHaveLength(0)
  expect(await runEslint('test/test.spec.jsx')).toHaveLength(0)
})

test('**/*.test.js(x)', async () => {
  expect(await runEslint('test.spec.js')).toHaveLength(0)
  expect(await runEslint('test/test.spec.js')).toHaveLength(0)
  expect(await runEslint('test.spec.jsx')).toHaveLength(0)
  expect(await runEslint('test/test.spec.jsx')).toHaveLength(0)
})

test('**/_tests__/**/*.js(x)', async () => {
  expect(await runEslint('__tests__/test.js')).toHaveLength(0)
  expect(await runEslint('test/__tests__/test.js')).toHaveLength(0)
  expect(await runEslint('test/__tests__/test/test.js')).toHaveLength(0)
  expect(await runEslint('__tests__/test.jsx')).toHaveLength(0)
  expect(await runEslint('test/__tests__/test.jsx')).toHaveLength(0)
  expect(await runEslint('test/__tests__/test/test.jsx')).toHaveLength(0)
})

test('errors', async () => {
  expect(await runEslint('index.js')).toHaveLength(2)
  expect(await runEslint('index.jsx')).toHaveLength(2)
  expect(await runEslint('test/index.js')).toHaveLength(2)
  expect(await runEslint('test/index.jsx')).toHaveLength(2)
  expect(await runEslint('tests/index.js')).toHaveLength(2)
  expect(await runEslint('tests/index.jsx')).toHaveLength(2)
})
