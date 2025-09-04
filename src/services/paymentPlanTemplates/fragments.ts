import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_TEMPLATE_FRAGMENT = gql(`
  fragment MerchantPaymentPlanTemplateFragment on MerchantPaymentPlanTemplate {
    id
    name
    description
    amount
    initialAmount
    currency
    providerCode
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt
    providerStatus
    transactionProviderId

    renewalIntervalDays
    renewalIntervalMonths
    renewalIntervalYears

    endsAfterDays
    endsAfterMonths
    endsAfterYears

    trialPeriodDays
    trialPeriodMonths
    trialPeriodYears

    payload

    createdAt
    updatedAt
  }
`);
