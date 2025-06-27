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
    billingFirstName
    billingLastName
    billingEmail
    billingPhone
    billingAddressCountry
    billingAddressState
    billingAddressCity
    billingAddressLine1
    billingAddressLine2
    billingAddressPostalCode
    merchantInternalCustomerCode
    createdAt
    updatedAt
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
    transactionProviderId
  }
`);
