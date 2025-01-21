import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_TEMPLATE_FRAGMENT = gql(`
  fragment MerchantPaymentPlanTemplateFragment on MerchantPaymentPlanTemplate {
    id
    name
    description
    providerCode
    providerError
    providerLastVerifiedAt
    providerStatus
    payload
    initialAmount
    amount
    currency
    trialPeriodDays
    trialPeriodMonths
    trialPeriodYears
    renewalIntervalMonths
    renewalIntervalDays
    renewalIntervalYears
    endsAfterDays
    endsAfterMonths
    endsAfterYears
    createdAt
    updatedAt
    transactionProviderId
  }
`);
