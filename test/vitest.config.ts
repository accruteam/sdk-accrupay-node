import { defineConfig } from 'vitest/config';
import { config } from 'dotenv';

export default defineConfig({
  test: {
    testTimeout: 15_000,
    env: {
      NODE_ENV: 'test',
      ...config({ path: '.env.test', quiet: true }).parsed,
    },
    pool: 'forks',
    maxWorkers: 1,
    maxConcurrency: 4,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: [/* 'text', */ 'text-summary', 'json', 'html'],
      reportsDirectory: './test/coverage',
      include: ['src/**/*.ts'],
      exclude: [
        'src/api/gql/**',
        'src/**/*.{test,spec}.{js,ts}',
        'src/**/*.d.ts',
        'src/**/fragments.ts',
        'src/**/queries.ts',
      ],
      thresholds: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  },
  // https://github.com/vitest-dev/vitest/issues/4605
  resolve: {
    tsconfigPaths: true,
    alias: {
      'graphql/language/printer': 'graphql/language/printer.js',
      'graphql/language': 'graphql/language/index.js',
      graphql: 'graphql/index.js',
    },
  },
});
