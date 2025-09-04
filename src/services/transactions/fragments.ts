import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_BASE_FRAGMENT = gql(`
  fragment MerchantTransactionBaseFragment on MerchantTransaction {
    id
    code
    token
    tokenExpiresAt
    action
    status
    providerStatus
    providerCode
    providerRelatedCode
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt

    amount
    refundedAmount
    currency

    merchantInternalCustomerCode
    merchantInternalTransactionCode

    transactionDate
    startedAt
    succeededAt
    failedAt
    canceledAt
    disputedAt
    refundedAt
    voidedAt

    transactionError

    storePaymentMethod

    deviceId
    deviceIp
    deviceBrowser
    deviceOS
    deviceName
    deviceType

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

    shippingFirstName
    shippingLastName
    shippingEmail
    shippingPhone
    shippingAddressLine1
    shippingAddressLine2
    shippingAddressCity
    shippingAddressState
    shippingAddressCountry
    shippingAddressPostalCode

    userFirstName
    userLastName
    userEmail
    userPhone
    userBirthDate
    userLocale
    userLegalIdentifier
    userLegalIdentifierType
    userAddressLine1
    userAddressLine2
    userAddressCity
    userAddressState
    userAddressCountry
    userAddressPostalCode

    paymentMethodId
    paymentMethodCode
    paymentMethodType
    
    paymentPlanId

    relatedTransactionId
    
    transactionProviderId

    payload

    createdAt
    updatedAt
  }
`);
export const MERCHANT_TRANSACTION_FRAGMENT = gql(`
  fragment MerchantTransactionFragment on MerchantTransaction {
    ...MerchantTransactionBaseFragment

    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }

    relatedTransaction {
      ...MerchantTransactionBaseFragment
    }

    transactionProvider {
      ...MerchantTransactionProviderFragment
    }
  }
`);
