import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY = gql(`
  query MerchantApiPaymentPlans(
    $merchantPaymentPlanId: String,

    $transactionProvider: TRANSACTION_PROVIDER,
    $transactionProviderId: String,

    $currency: CURRENCY,
    $providerCode: String,
    $providerStatus: PAYMENT_PLAN_STATUS,

    $paymentMethodId: String,
    $paymentMethod: PAYMENT_METHOD,

    $templateId: String,

    $merchantCustomerCode: String,
    $merchantPaymentPlanCode: String,

    $hasProviderError: Boolean,

    $ended: Boolean,
    $started: Boolean,
    $canceled: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    merchantApiPaymentPlans(
      id: $merchantPaymentPlanId,

      transactionProvider: $transactionProvider,
      transactionProviderId: $transactionProviderId,

      providerCode: $providerCode,
      providerStatus: $providerStatus,
      currency: $currency,

      paymentMethodId: $paymentMethodId,
      paymentMethod: $paymentMethod,

      templateId: $templateId,

      merchantCustomerCode: $merchantCustomerCode,
      merchantPaymentPlanCode: $merchantPaymentPlanCode,

      hasProviderError: $hasProviderError,

      ended: $ended,
      started: $started,
      canceled: $canceled,

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
          ...MerchantPaymentPlanFragment
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

export const MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY = gql(`
  query MerchantApiPaymentPlan($merchantPaymentPlanId: String!) {
    merchantApiPaymentPlan(merchantPaymentPlanId: $merchantPaymentPlanId) {
      ...MerchantPaymentPlanFragment
    }
  }
`);

export const MERCHANT_PAYMENT_PLANS_CREATE_ONE_MUTATION = gql(`
  mutation MerchantApiPaymentPlanCreate($data: MerchantPaymentPlanCreateSchema!, $merchantTransactionProviderId: String!) {
    merchantApiPaymentPlanCreate(data: $data, merchantTransactionProviderId: $merchantTransactionProviderId) {
      ...MerchantPaymentPlanFragment
    }
  }
`);

export const MERCHANT_PAYMENT_PLANS_CANCEL_ONE_MUTATION = gql(`
  mutation MerchantApiPaymentPlanCancel($merchantPaymentPlanId: String!, $merchantTransactionProviderId: String!) {
    merchantApiPaymentPlanCancel(merchantPaymentPlanId: $merchantPaymentPlanId, merchantTransactionProviderId: $merchantTransactionProviderId) {
      ...MerchantPaymentPlanFragment
    }
  }
`);
