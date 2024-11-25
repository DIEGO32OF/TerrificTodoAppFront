module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts|js)?(x)'],
    transform: {
      '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
  };
  