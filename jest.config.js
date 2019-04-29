/* eslint no-undef: 0 */
/* eslint no-useless-escape: 0 */

const config = require('@skan-io/jest-config-base');


module.exports = {
  ...config,

  setupFiles: [
    ...config.setupFiles,
    '<rootDir>/src/testing/setup.js'
  ],

  setupFilesAfterEnv: [
    '<rootDir>/src/testing/matchers.js'
  ],

  moduleNameMapper: {
    '^.*\.scss$': '<rootDir>/src/testing/mock-scss.js',
    '^.*\.css$': '<rootDir>/src/testing/mock-css.js'
  },

  transform: {
    ...config.transform,
    '^.*\.(png|gif|svg|jpg|jpeg)$': '<rootDir>/src/testing/mock-file.js'
  },

  transformIgnorePatterns: [],

  globals: {
    ...config.globals
  },

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/testing/**/*.js'
  ],
  coverageDirectory: './build/cov',
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
