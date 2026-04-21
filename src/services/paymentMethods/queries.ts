import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY = gql(`
  query MerchantApiCustomerPaymentMethods(
    $id: String,

    $transactionProvider: TRANSACTION_PROVIDER,
    $transactionProviderId: String,

    $providerCode: String,
    $methodType: PAYMENT_METHOD,

    $initialTransactionId: String,

    $customerId: String,
    $merchantInternalCustomerCode: String,

    $isDefault: Boolean,
    $hasProviderError: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    merchantApiCustomerPaymentMethods(
      id: $id,

      transactionProvider: $transactionProvider,
      transactionProviderId: $transactionProviderId,

      providerCode: $providerCode,
      methodType: $methodType,

      initialTransactionId: $initialTransactionId,

      customerId: $customerId,
      merchantInternalCustomerCode: $merchantInternalCustomerCode,

      isDefault: $isDefault,
      hasProviderError: $hasProviderError,

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
          ...MerchantCustomerPaymentMethodFragment
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

export const MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY = gql(`
  query MerchantApiCustomerPaymentMethod($merchantCustomerPaymentMethodId: String!) {
    merchantApiCustomerPaymentMethod(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId) {
      ...MerchantCustomerPaymentMethodFragment
    }
  }
`);

export const MERCHANT_PAYMENT_METHODS_SYNC_ONE_MUTATION = gql(`
  mutation MerchantApiCustomerPaymentMethodSyncOne(
    $customer: MerchantCustomerSelector,
    $merchantTransactionProviderId: String!,
    $providerCode: String!
  ) {
    merchantApiCustomerPaymentMethodSyncOne(
      customer: $customer,
      merchantTransactionProviderId: $merchantTransactionProviderId,
      providerCode: $providerCode
    ) {
      ...MerchantCustomerPaymentMethodFragment
    }
  }
`);
