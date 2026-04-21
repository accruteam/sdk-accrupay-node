import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_BASE_FRAGMENT = gql(`
  fragment MerchantPaymentPlanBaseFragment on MerchantPaymentPlan {
    id
    customerId

    merchantInternalCustomerCode
    merchantInternalPaymentPlanCode
    merchantInternalPaymentPlanDescription

    status

    providerStatus
    providerCode
    providerCustomerCode
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt

    amount
    initialAmount
    currency

    periodCount
    timeAnchor
    currentPeriodStart
    currentPeriodEnd
    startedAt
    endsAt
    trialEndsAt
    canceledAt

    renewalIntervalDays
    renewalIntervalMonths
    renewalIntervalYears

    endsAfterDays
    endsAfterMonths
    endsAfterYears

    trialPeriodDays
    trialPeriodMonths
    trialPeriodYears

    paymentMethodId
    templateId
    transactionProviderId

    payload

    createdAt
    updatedAt
  }
`);

export const MERCHANT_PAYMENT_PLAN_FRAGMENT = gql(`
  fragment MerchantPaymentPlanFragment on MerchantPaymentPlan {
    ...MerchantPaymentPlanBaseFragment
    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }

    template {
      ...MerchantPaymentPlanTemplateFragment
    }

    transactionProvider {
      ...MerchantTransactionProviderFragment
    }

    transactions {
      ...MerchantTransactionBaseFragment
    }
  }
`);
