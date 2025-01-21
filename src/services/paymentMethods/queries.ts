import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY = gql(`
  query MerchantCustomerPaymentMethods(
    $merchantCustomerPaymentMethodId: String,

    $transactionProvider: TRANSACTION_PROVIDER,
    $transactionProviderId: String,

    $providerCode: String,
    $methodType: PAYMENT_METHOD,

    $merchantCustomerCode: String,

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
    merchantCustomerPaymentMethods(
      id: $merchantCustomerPaymentMethodId,

      transactionProvider: $transactionProvider,
      transactionProviderId: $transactionProviderId,

      providerCode: $providerCode,
      methodType: $methodType,

      merchantCustomerCode: $merchantCustomerCode,

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
  query MerchantCustomerPaymentMethod($merchantCustomerPaymentMethodId: String!) {
    merchantCustomerPaymentMethod(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId) {
      ...MerchantCustomerPaymentMethodFragment
    }
  }
`);
