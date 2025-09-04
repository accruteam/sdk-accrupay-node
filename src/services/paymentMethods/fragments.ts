import { gql } from '@api/gql';

export const MERCHANT_CUSTOMER_PAYMENT_METHOD_FRAGMENT = gql(`
  fragment MerchantCustomerPaymentMethodFragment on MerchantCustomerPaymentMethod {
    id
    isDefault
    isEnabled
    merchantInternalCustomerCode
    methodType
    providerCode
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt
    providerStatus
    transactionProviderId

    billingFirstName
    billingLastName
    billingEmail
    billingPhone
    billingAddressLine1
    billingAddressLine2
    billingAddressCity
    billingAddressState
    billingAddressCountry
    billingAddressPostalCode

    paymentMethodInfo {
      ... on MerchantCustomerPaymentMethodCreditCardInfo {
        methodType
        cardBrand
        cardNumberMasked
      }
      ... on MerchantCustomerPaymentMethodGenericInfo {
        methodType
      }
      ... on MerchantCustomerPaymentMethodAchInfo {
        methodType
        accountNumber
        routingNumber
        secCode
      }
    }

    createdAt
    updatedAt
  }
`);
