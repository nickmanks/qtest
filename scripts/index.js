export default {
  default: 'run clean server',

  clean: 'rimraf ./build',

  build: 'webpack --display minimal --bail',
  server: 'webpack-dev-server --progress',

  test: 'run lint jest:full',

  lint: 'run lint:*',
  ['lint:js']: 'prettier-eslint --write "src/**/*.{js,jsx}"',
  ['lint:checkjs']: (
    'eslint --report-unused-disable-directives --ignore-path .gitignore .'
  ),
  ['lint:styles']: 'prettier-stylelint -q --write "src/**/*.{css,scss}"',
  ['lint:checkstyles']: 'stylelint "src/**/*.{css,scss}"',
  ['lint:md']: 'remark -i .gitignore --no-stdout --use remark-lint *.md',

  jest: 'jest --collectCoverage=false --cache=true',
  ['jest:full']: 'jest --verbose --runInBand --no-cache'
};
