import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_BASE_FRAGMENT = gql(`
  fragment MerchantTransactionBaseFragment on MerchantTransaction {
    id
    code
    action
    providerCode
    providerError
    providerLastVerifiedAt
    providerRelatedCode
    providerStatus
    token
    tokenExpiresAt
    paymentMethodType
    paymentMethodCode
    payload
    amount
    currency
    transactionDate
    startedAt
    succeededAt
    failedAt
    canceledAt
    voidedAt
    refundedAt
    disputedAt
    refundedAmount
    storePaymentMethod
    merchantInternalCustomerCode
    merchantInternalTransactionCode
    createdAt
    updatedAt
    status

    transactionProviderId
    paymentMethodId
    relatedTransactionId
    paymentPlanId
  }
`);

export const MERCHANT_TRANSACTION_FRAGMENT = gql(`
  fragment MerchantTransactionFragment on MerchantTransaction {
    transactionProvider {
      ...MerchantTransactionProviderFragment
    }

    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }

    relatedTransaction {
      id
      code
      action
      status
      amount
      providerCode
      providerRelatedCode
    }

    transactionsRelated {
      id
      code
      action
      status
      amount
      providerCode
      providerRelatedCode
    }

    ...MerchantTransactionBaseFragment
  }
`);
