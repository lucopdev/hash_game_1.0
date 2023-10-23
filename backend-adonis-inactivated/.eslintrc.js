module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // ...outras extensões
  ],
  rules: {
    // regras personalizadas
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: './adonis-preset-ts/tsconfig.json',
    },
  },
}
