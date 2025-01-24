import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY = gql(`
  query MerchantApiTransactionProviders(
    $id: String,
    $transactionProvider: TRANSACTION_PROVIDER,
    $status: MERCHANT_TRANSACTION_PROVIDER_STATUS,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    merchantApiTransactionProviders(
      id: $id,
      provider: $transactionProvider,
      status: $status,

      skip: $skip,
      take: $take,

      after: $after,
      first: $first,

      before: $before,
      last: $last,

      sorting: $sorting
    ) {
      edges {
        node {
          ...MerchantTransactionProviderFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`);

export const MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY = gql(`
  query MerchantApiTransactionProvider($merchantTransactionProviderId: String!) {
    merchantApiTransactionProvider(merchantTransactionProviderId: $merchantTransactionProviderId) {
      ...MerchantTransactionProviderFragment
    }
  }
`);
