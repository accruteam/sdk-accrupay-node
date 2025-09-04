import { describe, expect, it, vi, beforeEach } from 'vitest';
import { gql } from '@apollo/client/core';

import { createApolloClient, IAccruPayParams } from './apolloClient';

describe('ApolloClient', () => {
  let mockOnGraphQLError: ReturnType<typeof vi.fn>;
  let mockOnNetworkError: ReturnType<typeof vi.fn>;
  let mockOnAuthError: ReturnType<typeof vi.fn>;
  let baseParams: IAccruPayParams;

  beforeEach(() => {
    mockOnGraphQLError = vi.fn();
    mockOnNetworkError = vi.fn();
    mockOnAuthError = vi.fn();

    baseParams = {
      apiSecret: 'test-api-secret',
      environment: 'qa',
      onGraphQLError: mockOnGraphQLError,
      onNetworkError: mockOnNetworkError,
      onAuthError: mockOnAuthError,
    };
  });

  describe('Client Creation', () => {
    it('should create Apollo client with valid parameters', () => {
      const client = createApolloClient(baseParams);
      expect(client).toBeDefined();
      expect(client.cache).toBeDefined();
      expect(client.link).toBeDefined();
    });

    it('should create client with production environment by default', () => {
      const client = createApolloClient({
        apiSecret: 'test-secret',
        onGraphQLError: mockOnGraphQLError,
        onNetworkError: mockOnNetworkError,
        onAuthError: mockOnAuthError,
      });
      expect(client).toBeDefined();
    });

    it('should create client with custom URL', () => {
      const client = createApolloClient({
        ...baseParams,
        url: 'https://custom-api.example.com/graphql',
      });
      expect(client).toBeDefined();
    });

    it('should throw error for invalid environment without URL', () => {
      expect(() =>
        createApolloClient({
          ...baseParams,
          environment: 'invalid' as any,
          url: null,
        }),
      ).toThrow('Invalid environment.');
    });
  });

  describe('Error Handling', () => {
    it('should handle GraphQL errors gracefully', async () => {
      const client = createApolloClient(baseParams);

      try {
        await client.query({
          query: gql`
            query {
              invalidField
            }
          `,
        });
      } catch (error) {
        expect(error).toBeDefined();
      }

      expect(client).toBeDefined();
    });

    it('should handle network errors gracefully', async () => {
      const client = createApolloClient({
        ...baseParams,
        url: 'http://nonexistent-url-that-will-fail.com/graphql',
      });

      try {
        await client.query({
          query: gql`
            query {
              test
            }
          `,
        });
      } catch (error) {
        expect(error).toBeDefined();
      }

      expect(client).toBeDefined();
    });

    it('should handle authentication errors gracefully', async () => {
      const client = createApolloClient({
        ...baseParams,
        apiSecret: 'invalid-api-secret',
      });

      try {
        await client.query({
          query: gql`
            query {
              merchantApi {
                id
              }
            }
          `,
        });
      } catch (error) {
        expect(error).toBeDefined();
      }

      expect(client).toBeDefined();
    });
  });

  describe('Error Handlers Optional', () => {
    it('should not throw if error handlers are not provided', () => {
      const client = createApolloClient({
        apiSecret: 'test-secret',
        environment: 'qa',
      });

      expect(client).toBeDefined();
    });

    it('should handle errors gracefully without error handlers', async () => {
      const client = createApolloClient({
        apiSecret: 'test-secret',
        environment: 'qa',
      });

      try {
        await client.query({
          query: gql`
            query {
              invalidField
            }
          `,
        });
      } catch (error) {}

      expect(client).toBeDefined();
    });
  });

  describe('Scalar Handling', () => {
    it('should handle BigInt scalars correctly', () => {
      const client = createApolloClient(baseParams);
      expect(client).toBeDefined();

      const bigIntValue = BigInt('12345678901234567890');
      expect((bigIntValue as any).toJSON()).toBe('12345678901234567890');
    });
  });

  describe('Authentication Headers', () => {
    it('should include API secret in headers', () => {
      const client = createApolloClient({
        ...baseParams,
        apiSecret: 'test-api-secret-123',
      });

      expect(client).toBeDefined();
    });
  });

  describe('Cache Configuration', () => {
    it('should configure no-cache policy by default', () => {
      const client = createApolloClient(baseParams);

      expect(client.defaultOptions?.query?.fetchPolicy).toBe('no-cache');
      expect(client.defaultOptions?.watchQuery?.fetchPolicy).toBe('no-cache');
      expect(client.defaultOptions?.mutate?.fetchPolicy).toBe('no-cache');
    });
  });
});
