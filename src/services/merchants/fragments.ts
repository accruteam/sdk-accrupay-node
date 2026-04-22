import { gql } from '@api/gql';

export const MERCHANT_FRAGMENT = gql(`
  fragment MerchantFragment on Merchant {
    id

    publicId
    publicIdUpdatedAt

    name
    industry
    websiteUrl

    entityType

    email
    emailVerificationId
    phone
    phoneVerificationId
    status

    addressCountry
    addressState
    addressCity
    addressLine1
    addressLine2
    addressPostalCode

    legalAddressCountry
    legalAddressState
    legalAddressCity
    legalAddressLine1
    legalAddressLine2
    legalAddressPostalCode

    legalIdentifier
    legalIdentifierType

    primaryContactName
    primaryContactEmail
    primaryContactPhone

    timezone
    locale

    archivedAt

    createdAt
    updatedAt
  }
`);
