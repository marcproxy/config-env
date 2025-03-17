module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: false,
  coverageReporters: ['text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/tests/**',
    '!**/node_modules/**',
  ]
};
