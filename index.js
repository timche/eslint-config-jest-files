module.exports = {
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/__tests__/**/*.js',
        '**/__tests__/**/*.jsx'
      ],
      env: {
        jest: true
      }
    }
  ]
}
