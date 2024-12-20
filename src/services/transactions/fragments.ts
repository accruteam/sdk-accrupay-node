import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_FRAGMENT = gql(`
  fragment MerchantTransactionFragment on MerchantTransaction {
    id
    providerCode
    providerError
    providerLastVerifiedAt
    providerStatus
    token
    tokenExpiresAt
    paymentMethodType
    payload
    amount
    currency
    transactionDate
    startedAt
    succeededAt
    failedAt
    canceledAt
    revertedAt
    disputedAt
    storePaymentMethod
    merchantCustomerCode
    merchantTransactionCode
    createdAt
    updatedAt
    status
    transactionProviderId
    transactionProvider {
      ...MerchantTransactionProviderFragment
    }
    paymentMethodId
    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }
  }
`);
