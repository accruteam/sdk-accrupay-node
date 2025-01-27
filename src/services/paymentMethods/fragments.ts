import { gql } from '@api/gql';

export const MERCHANT_CUSTOMER_PAYMENT_METHOD_FRAGMENT = gql(`
  fragment MerchantCustomerPaymentMethodFragment on MerchantCustomerPaymentMethod {
    id
    providerCode
    providerError
    providerLastVerifiedAt
    providerStatus
    methodType
    isEnabled
    isDefault
    merchantInternalCustomerCode
    createdAt
    updatedAt
    paymentMethodInfo {
      ... on MerchantCustomerPaymentMethodCreditCardInfo {
        methodType
        cardNumberMasked
        cardBrand
      }
      ... on MerchantCustomerPaymentMethodGenericInfo {
        methodType
      }
    }
    transactionProviderId
  }
`);
