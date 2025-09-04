import { TRANSACTION_PROVIDER } from '@api/gql/graphql';

interface IProviderFixtures {
  merchantInternalCustomerCode: string;
  merchantInternalTransactionCode: string;

  providerTransactionCode: string;
  providerCustomerPaymentMethodCode: string;

  providerPaymentPlanCode: string;
  providerPaymentPlanTemplateCode: string;
}

const getProviderFixtures = () => {
  const fixtures = {
    [TRANSACTION_PROVIDER.NUVEI]: {
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
    },
  } satisfies Record<TRANSACTION_PROVIDER, IProviderFixtures>;

  Object.entries(fixtures).forEach(([provider, fixtureObj]) => {
    Object.entries(fixtureObj).forEach(([key, value]) => {
      if (!value?.toString?.()?.trim?.()) {
        throw new Error(`[${provider}] fixture for ${key} is required`);
      }
    });
  });

  return fixtures;
};

export { getProviderFixtures };
