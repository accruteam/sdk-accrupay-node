interface IBaseFixtures {
  safeUnusedId: string;
  customerPaymentMethodId: string;
  paymentPlanTemplateId: string;
  paymentPlanId: string;
  transactionProviderId: string;
  transactionId: string;
}

const getBaseFixtures = () => {
  const fixtures = {
    safeUnusedId: process.env.TESTING_BASE_FIXTURE_SAFE_UNUSED_ID!,
    customerPaymentMethodId:
      process.env.TESTING_BASE_FIXTURE_CUSTOMER_PAYMENT_METHOD_ID!,
    paymentPlanTemplateId:
      process.env.TESTING_BASE_FIXTURE_PAYMENT_PLAN_TEMPLATE_ID!,
    paymentPlanId: process.env.TESTING_BASE_FIXTURE_PAYMENT_PLAN_ID!,
    transactionProviderId:
      process.env.TESTING_BASE_FIXTURE_TRANSACTION_PROVIDER_ID!,
    transactionId: process.env.TESTING_BASE_FIXTURE_TRANSACTION_ID!,
  } satisfies IBaseFixtures;

  Object.entries(fixtures).forEach(([key, value]) => {
    if (!value?.toString?.()?.trim?.()) {
      throw new Error(`Base fixture for ${key} is required`);
    }
  });

  return fixtures;
};

export { getBaseFixtures };
