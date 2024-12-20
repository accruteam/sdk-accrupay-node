import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_GET_MANY_QUERY = gql(`
  query MerchantTransactions(
    $merchantTransactionId: String,
    $paymentMethodId: String,
    $transactionProviderId: String,

    $status: TRANSACTION_STATUS,
    $currency: CURRENCY,
    $paymentMethodType: PAYMENT_METHOD,
    $transactionProvider: TRANSACTION_PROVIDER,

    $providerCode: String,
    $hasProviderError: Boolean,

    $merchantCustomerCode: String,
    $merchantTransactionCode: String,

    $token: String,

    $failed: Boolean,
    $started: Boolean,
    $disputed: Boolean,
    $reverted: Boolean,
    $canceled: Boolean,
    $succeeded: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    merchantTransactions(
      id: $merchantTransactionId
      paymentMethodId: $paymentMethodId,
      transactionProviderId: $transactionProviderId,

      status: $status,
      currency: $currency,
      paymentMethodType: $paymentMethodType,
      transactionProvider: $transactionProvider,

      providerCode: $providerCode,
      hasProviderError: $hasProviderError,

      merchantCustomerCode: $merchantCustomerCode,
      merchantTransactionCode: $merchantTransactionCode,

      token: $token,

      failed: $failed,
      started: $started,
      disputed: $disputed,
      reverted: $reverted,
      canceled: $canceled,
      succeeded: $succeeded,

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
          ...MerchantTransactionFragment
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

export const MERCHANT_TRANSACTIONS_GET_ONE_QUERY = gql(`
  query MerchantTransaction($merchantTransactionId: String!) {
    merchantTransaction(merchantTransactionId: $merchantTransactionId) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_START_WEB_SDK_SESSION_MUTATION = gql(`
  mutation MerchantTransactionWebSdkSessionStart($data: MerchantTransactionStartSchema!) {
    merchantTransactionWebSdkSessionStart(data: $data) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_VERIFY_WEB_SDK_SESSION_MUTATION = gql(`
  mutation MerchantTransactionWebSdkSessionVerify($merchantTransactionId: String!) {
    merchantTransactionWebSdkSessionVerify(merchantTransactionId: $merchantTransactionId) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION = gql(`
  mutation MerchantTransactionVoid($merchantTransactionId: String!) {
    merchantTransactionVoid(merchantTransactionId: $merchantTransactionId) {
      ...MerchantTransactionFragment
    }
  }
`);
