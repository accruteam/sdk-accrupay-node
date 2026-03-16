import type { GraphQLFormattedError } from 'graphql';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { gql } from '@apollo/client';

import { createApolloClient, IAccruPayParams } from './apolloClient';

const readHeader = (
  headers: HeadersInit | undefined,
  name: string,
): string | undefined => {
  if (!headers) return undefined;

  if (headers instanceof Headers) return headers.get(name) || undefined;

  if (Array.isArray(headers)) {
    const found = headers.find(
      ([headerName]) => headerName.toLowerCase() === name.toLowerCase(),
    );
    return found?.[1];
  }

  const asRecord = headers as Record<string, string | undefined>;
  return (
    asRecord[name] ||
    asRecord[name.toLowerCase()] ||
    asRecord[name.toUpperCase()]
  );
};

describe('ApolloClient', () => {
  let mockOnGraphQLError: ReturnType<
    typeof vi.fn<(errors: ReadonlyArray<GraphQLFormattedError>) => void>
  >;
  let mockOnNetworkError: ReturnType<typeof vi.fn<(error: Error) => void>>;
  let mockOnAuthError: ReturnType<typeof vi.fn<() => void>>;
  let baseParams: IAccruPayParams;

  beforeEach(() => {
    mockOnGraphQLError =
      vi.fn<(errors: ReadonlyArray<GraphQLFormattedError>) => void>();
    mockOnNetworkError = vi.fn<(error: Error) => void>();
    mockOnAuthError = vi.fn<() => void>();

    baseParams = {
      apiSecret: 'test-api-secret',
      environment: 'qa',
      onGraphQLError: mockOnGraphQLError,
      onNetworkError: mockOnNetworkError,
      onAuthError: mockOnAuthError,
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Client Creation', () => {
    it('should create Apollo client with valid parameters', () => {
      const client = createApolloClient(baseParams);
      expect(client).toBeDefined();
      expect(client.cache).toBeDefined();
      expect(client.link).toBeDefined();
    });

    it('should use production environment URL by default', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            data: { merchantApi: { id: 'merchant-id' } },
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient({
        apiSecret: 'test-secret',
        onGraphQLError: mockOnGraphQLError,
        onNetworkError: mockOnNetworkError,
        onAuthError: mockOnAuthError,
      });

      await client.query({
        query: gql`
          query {
            merchantApi {
              id
            }
          }
        `,
      });

      expect(globalThis.fetch).toHaveBeenCalledTimes(1);
      expect((globalThis.fetch as any).mock.calls[0][0]).toBe(
        'https://api.pay.accru.co/graphql',
      );
    });

    it('should use custom URL when provided', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            data: { merchantApi: { id: 'merchant-id' } },
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient({
        ...baseParams,
        url: 'https://custom-api.example.com/graphql',
      });

      await client.query({
        query: gql`
          query {
            merchantApi {
              id
            }
          }
        `,
      });

      expect(globalThis.fetch).toHaveBeenCalledTimes(1);
      expect((globalThis.fetch as any).mock.calls[0][0]).toBe(
        'https://custom-api.example.com/graphql',
      );
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
    it('should call onGraphQLError and onAuthError for GraphQL errors', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            errors: [
              {
                message: 'Unauthorized',
                extensions: { code: 'UNAUTHENTICATED' },
              },
            ],
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient(baseParams);

      await expect(
        client.query({
          query: gql`
            query {
              merchantApi {
                id
              }
            }
          `,
        }),
      ).rejects.toBeDefined();

      expect(mockOnGraphQLError).toHaveBeenCalledTimes(1);
      const graphQLErrorArgs = mockOnGraphQLError.mock.calls[0][0];
      expect(graphQLErrorArgs).toHaveLength(1);
      expect(graphQLErrorArgs[0]?.extensions?.code).toBe('UNAUTHENTICATED');
      expect(mockOnAuthError).toHaveBeenCalledTimes(1);
      expect(mockOnNetworkError).not.toHaveBeenCalled();
    });

    it('should call onNetworkError for non-GraphQL errors', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(
        new Error('Network request failed'),
      );

      const client = createApolloClient(baseParams);

      await expect(
        client.query({
          query: gql`
            query {
              merchantApi {
                id
              }
            }
          `,
        }),
      ).rejects.toBeDefined();

      expect(mockOnNetworkError).toHaveBeenCalledTimes(1);
      expect(mockOnGraphQLError).not.toHaveBeenCalled();
      expect(mockOnAuthError).not.toHaveBeenCalled();
    });

    it('should handle authentication errors gracefully', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            errors: [
              {
                message: 'Unauthorized',
                extensions: { code: 'UNAUTHENTICATED' },
              },
            ],
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient({
        ...baseParams,
        apiSecret: 'invalid-api-secret',
      });

      await expect(
        client.query({
          query: gql`
            query {
              merchantApi {
                id
              }
            }
          `,
        }),
      ).rejects.toBeDefined();

      expect(mockOnAuthError).toHaveBeenCalledTimes(1);
    });

    it('should normalize non-Error thrown values for onNetworkError', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue('boom');

      const client = createApolloClient(baseParams);

      await expect(
        client.query({
          query: gql`
            query {
              merchantApi {
                id
              }
            }
          `,
        }),
      ).rejects.toBeDefined();

      expect(mockOnNetworkError).toHaveBeenCalledTimes(1);
      const normalizedError = mockOnNetworkError.mock.calls[0][0];
      expect(normalizedError).toBeInstanceOf(Error);
      expect(normalizedError.message).toContain('boom');
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
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(
        new Error('Network request failed'),
      );

      const client = createApolloClient({
        apiSecret: 'test-secret',
        environment: 'qa',
      });

      await expect(
        client.query({
          query: gql`
            query {
              invalidField
            }
          `,
        }),
      ).rejects.toBeDefined();
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
    it('should include API secret, app metadata and sdk version in headers', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            data: { merchantApi: { id: 'merchant-id' } },
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient({
        ...baseParams,
        apiSecret: 'test-api-secret-123',
      });

      await client.query({
        query: gql`
          query {
            merchantApi {
              id
            }
          }
        `,
      });

      expect(globalThis.fetch).toHaveBeenCalledTimes(1);

      const requestInit = (globalThis.fetch as any).mock.calls[0][1] as
        | RequestInit
        | undefined;
      const headers = requestInit?.headers;
      const apiSecret = readHeader(headers, 'accrupay-api-secret');
      const metadataRaw = readHeader(headers, 'accrupay-app-metadata');
      const sdkVersion = readHeader(headers, 'accrupay-sdk-version');

      expect(apiSecret).toBe('test-api-secret-123');
      expect(sdkVersion).toBeTruthy();
      expect(metadataRaw).toBeTruthy();

      const metadata = JSON.parse(metadataRaw!);
      expect(metadata?.sdk?.version).toBe(sdkVersion);
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
