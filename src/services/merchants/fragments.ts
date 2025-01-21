import { gql } from '@api/gql';

export const MERCHANT_FRAGMENT = gql(`
  fragment MerchantFragment on Merchant {
    id
    name
    email
    phone
    status
    publicId
    publicIdUpdatedAt
    createdAt
    updatedAt
  }
`);
