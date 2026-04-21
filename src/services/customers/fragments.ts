import { gql } from '@api/gql';

export const MERCHANT_CUSTOMER_BASE_FRAGMENT = gql(`
  fragment MerchantCustomerBaseFragment on MerchantCustomer {
    id
    addressCity
    addressCountry
    addressLine1
    addressLine2
    addressPostalCode
    addressState
    createdAt
    email
    firstName
    lastName
    merchantInternalCustomerCode
    phone
    providerCode
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt
    providerStatus
    transactionProviderId
    updatedAt
  }
`);
