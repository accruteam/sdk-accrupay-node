import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    setupFiles: ['dotenv/config'],
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
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
    alias: {
      'graphql/language/printer': 'graphql/language/printer.js',
      'graphql/language': 'graphql/language/index.js',
      graphql: 'graphql/index.js',
    },
  },
});
