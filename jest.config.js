module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: true,
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'jsx', 'json']
};