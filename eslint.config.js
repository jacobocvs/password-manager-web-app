// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    semi: false,
    jsx: true
  },

  // TypeScript and Vue are auto-detected
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // Ignore patterns
  ignorePatterns: [
    'models/*.ts',
    'models/**/*.js',
    'models/**/*.d.ts'
  ],

  // Eslint rules
  rules: {
    'style/comma-dangle': ['error', 'never'],
    'style/brace-style': ['error', '1tbs'],
    'node/prefer-global/process': ['off'],
    'no-console': [
      'error',
      { allow: ['log'] }
    ]
  }
})
