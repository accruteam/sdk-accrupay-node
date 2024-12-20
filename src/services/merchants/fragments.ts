import { gql } from '@api/gql';

export const MERCHANT_FRAGMENT = gql(`
  fragment MerchantFragment on Merchant {
    id
    email
    name
    phone
    status
    publicId
    publicIdUpdatedAt
    createdAt
    updatedAt
  }
`);
