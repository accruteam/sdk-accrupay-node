import { gql } from '@api/gql';

export const MERCHANT_CUSTOMER_PAYMENT_METHOD_FRAGMENT = gql(`
  fragment MerchantCustomerPaymentMethodFragment on MerchantCustomerPaymentMethod {
    id

    customerId
    initialTransactionId
    
    isDefault
    isEnabled
    expiresAt
    status
    merchantInternalCustomerCode
    methodType
    providerCode
    providerCustomerCode
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
        expirationMonth
        expirationYear
      }
      ... on MerchantCustomerPaymentMethodGenericInfo {
        methodType
      }
      ... on MerchantCustomerPaymentMethodAchInfo {
        methodType
        accountNumber
        bankName
        routingNumber
        secCode
      }
    }

    createdAt
    updatedAt
  }
`);
