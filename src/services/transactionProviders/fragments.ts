import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_PROVIDER_FRAGMENT = gql(`
  fragment MerchantTransactionProviderFragment on MerchantTransactionProvider {
    id
    merchantId
    provider
    providerCode
    status
    createdAt
    updatedAt
  }
`);
