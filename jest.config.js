// jest.config.js - Next.js-friendly Jest setup for Observer
// This integrates with Next.js for env vars and mocks, keeps tests fast.

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Points to project root so Next.js config and .env load in tests
  dir: './',
});

// Custom config: Maps @/ imports, sets up DOM env, coverage goals
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',  // Simulates browser for React components
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',  // Maps @/components to ./components (no src/)
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',  // Scans whole project (flat structure)
    '!**/*.d.ts',  // Skip type defs
    '!**/*.stories.{js,jsx,ts,tsx}',  // Ignore storybook if added later
    '!**/__tests__/**',  // Don't cover tests themselves
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],  // Skip build and deps
  coverageThreshold: {
    global: {
      branches: 70,  // Aim for 70% coverage to encourage testing without overwhelming
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

// Exports async config for Next.js compatibility
module.exports = createJestConfig(customJestConfig);