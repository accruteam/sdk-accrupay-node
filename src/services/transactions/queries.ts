import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_GET_MANY_QUERY = gql(`
  query MerchantApiTransactions(
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
    merchantApiTransactions(
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
  query MerchantApiTransaction($merchantTransactionId: String!) {
    merchantApiTransaction(merchantTransactionId: $merchantTransactionId) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_GET_PRE_SESSION_DATA_QUERY =
  gql(`
  query MerchantApiClientTransactionNuveiPreSessionData($transactionProvider: TRANSACTION_PROVIDER, $merchantTransactionProviderId: String) {
    merchantApiClientGetPreSessionData(transactionProvider: $transactionProvider, merchantTransactionProviderId: $merchantTransactionProviderId) {
      ... on MerchantClientTransactionNuveiPreSessionData {
        provider
        merchantId
        merchantSiteId
      }
      ... on MerchantClientTransactionGenericPreSessionData {
        provider
        publicKey
      }
    }
  }
`);

export const MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_START_MUTATION = gql(`
  mutation MerchantApiClientTransactionPaymentSessionStart(
    $merchantTransactionProviderId: String,
    $transactionProvider: TRANSACTION_PROVIDER,

    $data: MerchantApiClientTransactionPaymentStartSchema!
  ) {
    merchantApiClientTransactionPaymentSessionStart(
      transactionProvider: $transactionProvider,
      merchantTransactionProviderId: $merchantTransactionProviderId

      data: $data,
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_VERIFY_MUTATION =
  gql(`
  mutation MerchantApiClientTransactionPaymentSessionVerify($merchantTransactionId: String!) {
    merchantApiClientTransactionPaymentSessionVerify(merchantTransactionId: $merchantTransactionId) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION = gql(`
  mutation MerchantApiTransactionVoid($merchantTransactionId: String!) {
    merchantApiTransactionVoid(merchantTransactionId: $merchantTransactionId) {
      ...MerchantTransactionFragment
    }
  }
`);
