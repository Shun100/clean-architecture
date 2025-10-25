export default {
  preset: 'ts-jest/presets/default-esm', // ESM対応プリセット
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['<rootDir>/tests/*.test.ts', '<rootDir>/src/**/*.test.ts'],
};
