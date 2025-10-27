// jest.setup.js - Global test setup for Observer
// Adds DOM matchers and mocks Next.js router/path for isolated unit tests

import '@testing-library/jest-dom';  // Lets us use 'toBeInTheDocument()' etc.

// Mock Next.js navigation hooks (prevents real routing in tests)
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),  // Fake push
      replace: jest.fn(),  // Fake replace
      prefetch: jest.fn(),  // Fake prefetch
    };
  },
  useSearchParams() {
    return new URLSearchParams();  // Empty params for simplicity
  },
  usePathname() {
    return '';  // Root path default
  },
}));