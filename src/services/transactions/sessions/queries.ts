import { gql } from '@api/gql';

export const MERCHANT_CLIENT_TRANSACTION_SESSION_GET_BASE_CONFIG_QUERY = gql(`
  query MerchantApiClientTransactionSessionBaseConfig(
    $merchantTransactionProviderId: String
    $transactionProvider: TRANSACTION_PROVIDER
  ) {
    merchantApiClientTransactionSessionBaseConfig(
      merchantTransactionProviderId: $merchantTransactionProviderId
      transactionProvider: $transactionProvider
    ) {
      provider
      data {
        ... on MerchantClientTransactionSessionNuveiBaseConfig {
          provider
          merchantId
          merchantSiteId
          environment
        }
        ... on MerchantClientTransactionSessionGenericBaseConfig {
          provider
          publicKey
        }
      }
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_SESSION_START_MUTATION = gql(`
  mutation MerchantApiClientTransactionPaymentSessionStartV2(
    $merchantTransactionProviderId: String
    $transactionProvider: TRANSACTION_PROVIDER
    $data: MerchantApiClientTransactionPaymentSessionStartSchema!
  ) {
    merchantApiClientTransactionPaymentSessionStartV2(
      merchantTransactionProviderId: $merchantTransactionProviderId
      transactionProvider: $transactionProvider
      data: $data
    ) {
      ...MerchantClientTransactionSessionFragment
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_SESSION_VERIFY_MUTATION = gql(`
  mutation MerchantApiClientTransactionPaymentSessionVerifyV2(
    $id: String
    $token: String
    $providerCode: String
    $merchantInternalTransactionCode: String
  ) {
    merchantApiClientTransactionPaymentSessionVerify(
      id: $id
      token: $token
      providerCode: $providerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_SESSION_GET_ONE_QUERY = gql(`
  query MerchantApiClientTransactionSession(
    $id: String
    $merchantInternalTransactionCode: String
    $providerCode: String
    $token: String
  ) {
    merchantApiClientTransactionSession(
      id: $id
      merchantInternalTransactionCode: $merchantInternalTransactionCode
      providerCode: $providerCode
      token: $token
    ) {
      ...MerchantClientTransactionSessionFragment
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_SESSIONS_GET_MANY_QUERY = gql(`
  query MerchantApiClientTransactionSessions(
    $id: String
    $providerCode: String
    $token: String

    $action: TRANSACTION_ACTION
    $amount: BigInt
    $currency: CURRENCY
    $providerStatus: CLIENT_TRANSACTION_SESSION_STATUS

    $paymentMethodId: String
    $paymentPlanId: String
    $transactionProviderId: String
    
    $merchantInternalCustomerCode: String
    $merchantInternalTransactionCode: String

    $started: Boolean
    $completed: Boolean
    $canceled: Boolean
    $hasProviderError: Boolean

    $skip: Int
    $take: Int

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $sorting: [SortingFieldSchema!]
  ) {
    merchantApiClientTransactionSessions(
      id: $id
      providerCode: $providerCode
      token: $token

      action: $action
      amount: $amount
      currency: $currency
      providerStatus: $providerStatus

      paymentMethodId: $paymentMethodId
      paymentPlanId: $paymentPlanId
      transactionProviderId: $transactionProviderId

      merchantInternalCustomerCode: $merchantInternalCustomerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode

      started: $started
      completed: $completed
      canceled: $canceled
      hasProviderError: $hasProviderError

      skip: $skip
      take: $take

      after: $after
      first: $first

      before: $before
      last: $last

      sorting: $sorting
    ) {
      edges {
        node {
          ...MerchantClientTransactionSessionFragment
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
