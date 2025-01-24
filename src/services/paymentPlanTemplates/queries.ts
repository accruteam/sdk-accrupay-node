import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY = gql(`
  query MerchantApiPaymentPlanTemplates(
    $merchantPaymentPlanTemplateId: String,

    $transactionProvider: TRANSACTION_PROVIDER,
    $transactionProviderId: String,

    $name: String,
    $currency: CURRENCY,
    $providerCode: String,
    $providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
  merchantApiPaymentPlanTemplates(
    id: $merchantPaymentPlanTemplateId,

    transactionProvider: $transactionProvider,
    transactionProviderId: $transactionProviderId,

    name: $name,
    currency: $currency,
    providerCode: $providerCode,
    providerStatus: $providerStatus,

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
          ...MerchantPaymentPlanTemplateFragment
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

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY = gql(`
  query MerchantApiPaymentPlanTemplate($merchantPaymentPlanTemplateId: String!) {
    merchantApiPaymentPlanTemplate(merchantPaymentPlanTemplateId: $merchantPaymentPlanTemplateId) {
      ...MerchantPaymentPlanTemplateFragment
    }
  }
`);

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_CREATE_ONE_MUTATION = gql(`
  mutation MerchantApiPaymentPlanTemplateCreate($data: MerchantPaymentPlanTemplateCreateSchema!, $merchantTransactionProviderId: String!) {
    merchantApiPaymentPlanTemplateCreate(data: $data, merchantTransactionProviderId: $merchantTransactionProviderId) {
      ...MerchantPaymentPlanTemplateFragment
    }
  }
`);

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_UPDATE_ONE_MUTATION = gql(`
  mutation MerchantApiPaymentPlanTemplateUpdate($data: MerchantPaymentPlanTemplateUpdateSchema!, $merchantTransactionProviderId: String!) {
    merchantApiPaymentPlanTemplateUpdate(data: $data, merchantTransactionProviderId: $merchantTransactionProviderId) {
      ...MerchantPaymentPlanTemplateFragment
    }
  }
`);
