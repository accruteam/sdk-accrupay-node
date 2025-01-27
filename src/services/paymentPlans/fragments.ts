import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_FRAGMENT = gql(`
  fragment MerchantPaymentPlanFragment on MerchantPaymentPlan {
    id
    providerCode
    providerError
    providerLastVerifiedAt
    providerStatus
    payload
    initialAmount
    amount
    currency
    timeAnchor
    trialPeriodDays
    trialPeriodMonths
    trialPeriodYears
    trialEndsAt
    renewalIntervalMonths
    renewalIntervalDays
    renewalIntervalYears
    periodCount
    endsAfterMonths
    endsAfterDays
    endsAfterYears
    endsAt
    startedAt
    canceledAt
    currentPeriodStart
    currentPeriodEnd
    merchantInternalCustomerCode
    merchantInternalPaymentPlanCode
    merchantInternalPaymentPlanDescription
    createdAt
    updatedAt
    status
    transactionProviderId
    transactionProvider {
      ...MerchantTransactionProviderFragment
    }
    templateId
    template {
      ...MerchantPaymentPlanTemplateFragment
    }
    paymentMethodId
    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }
    transactions {
      id
      action
      periodCount
      periodStart
      periodEnd
      createdAt
      updatedAt
      paymentPlanId
      transactionId
      transaction {
        id
        code
        action
        providerCode
        providerError
        providerLastVerifiedAt
        providerRelatedCode
        providerStatus
        token
        tokenExpiresAt
        paymentMethodType
        paymentMethodCode
        payload
        amount
        currency
        transactionDate
        startedAt
        succeededAt
        failedAt
        canceledAt
        revertedAt
        disputedAt
        storePaymentMethod
        merchantInternalCustomerCode
        merchantInternalTransactionCode
        createdAt
        updatedAt
        status
        transactionProviderId
        paymentMethodId
        relatedTransactionId
      }
    }
  }
`);
