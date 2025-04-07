import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_GET_MANY_QUERY = gql(`
  query MerchantApiTransactions(
    $id: String,
    $code: String,
    $paymentMethodId: String,
    $transactionProviderId: String,

    $status: TRANSACTION_STATUS,
    $currency: CURRENCY,
    $paymentMethodType: PAYMENT_METHOD,
    $transactionProvider: TRANSACTION_PROVIDER,

    $providerCode: String,
    $hasProviderError: Boolean,

    $merchantInternalCustomerCode: String,
    $merchantInternalTransactionCode: String,

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
      id: $id,
      code: $code,
      paymentMethodId: $paymentMethodId,
      transactionProviderId: $transactionProviderId,

      status: $status,
      currency: $currency,
      paymentMethodType: $paymentMethodType,
      transactionProvider: $transactionProvider,

      providerCode: $providerCode,
      hasProviderError: $hasProviderError,

      merchantInternalCustomerCode: $merchantInternalCustomerCode,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,

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
  query MerchantApiTransaction(
    $id: String,
    $code: String,
    $token: String,
    $merchantInternalTransactionCode: String
  ) {
    merchantApiTransaction(
      id: $id,
      code: $code,
      token: $token,
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
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
        environment
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
  mutation MerchantApiClientTransactionPaymentSessionVerify(
    $id: String,
    $code: String,
    $token: String,
    $merchantInternalTransactionCode: String
  ) {
    merchantApiClientTransactionPaymentSessionVerify(
      id: $id,
      code: $code,
      token: $token,
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION = gql(`
  mutation MerchantApiTransactionVoid(
    $id: String,
    $code: String,
    $token: String,
    $merchantInternalTransactionCode: String
  ) {
    merchantApiTransactionVoid(
      id: $id,
      code: $code,
      token: $token,
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_REFUND_ONE_MUTATION = gql(`
  mutation MerchantApiTransactionRefund(
    $id: String,
    $code: String,
    $token: String,
    $merchantInternalTransactionCode: String,
    $amount: BigInt!
  ) {
    merchantApiTransactionRefund(
      id: $id,
      code: $code,
      token: $token,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      amount: $amount
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
