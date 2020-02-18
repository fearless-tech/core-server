module.exports = {
  moduleFileExtensions: ['js', 'json'],
  setupFiles: [`<rootDir>/config/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  testURL: `http://localhost`,
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.js$'
}
