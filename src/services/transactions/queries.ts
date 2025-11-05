import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_GET_MANY_QUERY = gql(`
  query MerchantApiTransactions(
    $id: String,
    $paymentMethodId: String,
    $paymentMethodCode: String,
    $paymentMethodType: PAYMENT_METHOD,
    $paymentPlanId: String,
    $transactionProviderId: String,
    $clientTransactionSessionId: String,

    $action: TRANSACTION_ACTION,
    $actions: [TRANSACTION_ACTION!],
    $status: TRANSACTION_STATUS,
    $statuses: [TRANSACTION_STATUS!],
    $currency: CURRENCY,
    $transactionProvider: TRANSACTION_PROVIDER,

    $providerCode: String,
    $providerRelatedCode: String,
    $hasProviderError: Boolean,

    $merchantInternalCustomerCode: String,
    $merchantInternalTransactionCode: String,

    $relatedTransactionId: String,

    $failed: Boolean,
    $started: Boolean,
    $disputed: Boolean,
    $reverted: Boolean,
    $canceled: Boolean,
    $succeeded: Boolean,

    $transactionDateFrom: DateTimeISO,
    $transactionDateTo: DateTimeISO,

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
      paymentMethodId: $paymentMethodId,
      paymentMethodCode: $paymentMethodCode,
      paymentMethodType: $paymentMethodType,
      paymentPlanId: $paymentPlanId,
      transactionProviderId: $transactionProviderId,
      clientTransactionSessionId: $clientTransactionSessionId,

      action: $action,
      actions: $actions,
      status: $status,
      statuses: $statuses,
      currency: $currency,
      transactionProvider: $transactionProvider,

      providerCode: $providerCode,
      providerRelatedCode: $providerRelatedCode,
      hasProviderError: $hasProviderError,

      merchantInternalCustomerCode: $merchantInternalCustomerCode,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,

      relatedTransactionId: $relatedTransactionId,

      failed: $failed,
      started: $started,
      disputed: $disputed,
      reverted: $reverted,
      canceled: $canceled,
      succeeded: $succeeded,

      transactionDateFrom: $transactionDateFrom,
      transactionDateTo: $transactionDateTo,

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
    $merchantInternalTransactionCode: String,
    $providerCode: String
  ) {
    merchantApiTransaction(
      id: $id,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      providerCode: $providerCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION = gql(`
  mutation MerchantApiTransactionVoid(
    $id: String,
    $merchantInternalTransactionCode: String,
    $providerCode: String
  ) {
    merchantApiTransactionVoid(
      id: $id,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      providerCode: $providerCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_REFUND_ONE_MUTATION = gql(`
  mutation MerchantApiTransactionRefund(
    $id: String,
    $merchantInternalTransactionCode: String,
    $providerCode: String,
    $amount: BigInt!
  ) {
    merchantApiTransactionRefund(
      id: $id,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      providerCode: $providerCode,
      amount: $amount
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION = gql(`
  mutation MerchantApiTransactionSyncOne(
    $merchantTransactionProviderId: String!,
    $id: String,
    $merchantInternalTransactionCode: String,
    $providerCode: String,
  ) {
    merchantApiTransactionSyncOne(
      merchantTransactionProviderId: $merchantTransactionProviderId,
      id: $id,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      providerCode: $providerCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
