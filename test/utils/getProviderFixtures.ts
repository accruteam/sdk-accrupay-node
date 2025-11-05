import { TRANSACTION_PROVIDER } from '@api/gql/graphql';

interface IProviderFixtures {
  safeUnusedId: string;

  transactionProviderId: string;
  transactionId: string;

  customerPaymentMethodId: string;

  paymentPlanId: string;
  paymentPlanTemplateId: string;

  merchantInternalCustomerCode: string;
  merchantInternalTransactionCode: string;

  providerTransactionCode: string;
  providerCustomerPaymentMethodCode: string;

  providerPaymentPlanCode: string;
  providerPaymentPlanTemplateCode: string;

  ach: {
    success: {
      amount: bigint;
      accountNumber: string;
      routingNumber: string;
    };
  };
}

const getProviderFixtures = (provider: TRANSACTION_PROVIDER) => {
  const fixtures = {
    [TRANSACTION_PROVIDER.NUVEI]: {
      safeUnusedId: process.env.TESTING_NUVEI_FIXTURE_SAFE_UNUSED_ID!,

      transactionProviderId:
        process.env.TESTING_NUVEI_FIXTURE_TRANSACTION_PROVIDER_ID!,
      transactionId: process.env.TESTING_NUVEI_FIXTURE_TRANSACTION_ID!,

      customerPaymentMethodId:
        process.env.TESTING_NUVEI_FIXTURE_CUSTOMER_PAYMENT_METHOD_ID!,

      paymentPlanId: process.env.TESTING_NUVEI_FIXTURE_PAYMENT_PLAN_ID!,
      paymentPlanTemplateId:
        process.env.TESTING_NUVEI_FIXTURE_PAYMENT_PLAN_TEMPLATE_ID!,

      merchantInternalCustomerCode:
        process.env.TESTING_NUVEI_FIXTURE_MERCHANT_INTERNAL_CUSTOMER_CODE!,
      merchantInternalTransactionCode:
        process.env.TESTING_NUVEI_FIXTURE_MERCHANT_INTERNAL_TRANSACTION_CODE!,

      providerTransactionCode:
        process.env.TESTING_NUVEI_FIXTURE_PROVIDER_TRANSACTION_CODE!,
      providerCustomerPaymentMethodCode:
        process.env
          .TESTING_NUVEI_FIXTURE_PROVIDER_CUSTOMER_PAYMENT_METHOD_CODE!,

      providerPaymentPlanCode:
        process.env.TESTING_NUVEI_FIXTURE_PROVIDER_PAYMENT_PLAN_CODE!,
      providerPaymentPlanTemplateCode:
        process.env.TESTING_NUVEI_FIXTURE_PROVIDER_PAYMENT_PLAN_TEMPLATE_CODE!,

      ach: {
        success: {
          amount: BigInt(process.env.TESTING_NUVEI_FIXTURE_ACH_SUCCESS_AMOUNT!),
          accountNumber:
            process.env.TESTING_NUVEI_FIXTURE_ACH_SUCCESS_ACCOUNT_NUMBER!,
          routingNumber:
            process.env.TESTING_NUVEI_FIXTURE_ACH_SUCCESS_ROUTING_NUMBER!,
        },
      },
    },
  } satisfies Record<TRANSACTION_PROVIDER, IProviderFixtures>;

  if (!fixtures[provider]) {
    throw new Error(`Provider fixtures for ${provider} are not defined`);
  }

  Object.entries(fixtures[provider]).forEach(([key, value]) => {
    if (!value?.toString?.()?.trim?.()) {
      throw new Error(`[${provider}] fixture for ${key} is required`);
    }
  });

  return fixtures[provider];
};

export { getProviderFixtures };
