module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.(ts|js)'
  ],
  verbose: true,
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.test.(ts|js)',
    '<rootDir>/src/**/?(*.)(test).(ts|js)'
  ]
};