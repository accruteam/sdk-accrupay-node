interface IBaseFixtures {
  safeUnusedId: string;

  transactionProviderId: string;

  paymentPlanTemplateId: string;
  paymentPlanId: string;

  customerPaymentMethodId: string;
  transactionId: string;

  transactionProviderCode: string;
  customerPaymentMethodCode: string;
  paymentPlanCode: string;
  paymentPlanTemplateCode: string;

  merchantInternalCustomerCode: string;
  merchantInternalTransactionCode: string;
}

const getBaseFixtures = () => {
  const fixtures = {
    safeUnusedId: process.env.TESTING_BASE_FIXTURE_SAFE_UNUSED_ID!,

    transactionProviderId:
      process.env.TESTING_BASE_FIXTURE_TRANSACTION_PROVIDER_ID!,

    paymentPlanTemplateId:
      process.env.TESTING_BASE_FIXTURE_PAYMENT_PLAN_TEMPLATE_ID!,
    paymentPlanId: process.env.TESTING_BASE_FIXTURE_PAYMENT_PLAN_ID!,

    customerPaymentMethodId:
      process.env.TESTING_BASE_FIXTURE_CUSTOMER_PAYMENT_METHOD_ID!,
    transactionId: process.env.TESTING_BASE_FIXTURE_TRANSACTION_ID!,

    transactionProviderCode:
      process.env.TESTING_BASE_FIXTURE_TRANSACTION_PROVIDER_CODE!,
    customerPaymentMethodCode:
      process.env.TESTING_BASE_FIXTURE_CUSTOMER_PAYMENT_METHOD_CODE!,

    paymentPlanCode: process.env.TESTING_BASE_FIXTURE_PAYMENT_PLAN_CODE!,
    paymentPlanTemplateCode:
      process.env.TESTING_BASE_FIXTURE_PAYMENT_PLAN_TEMPLATE_CODE!,

    merchantInternalCustomerCode:
      process.env.TESTING_BASE_FIXTURE_MERCHANT_INTERNAL_CUSTOMER_CODE!,
    merchantInternalTransactionCode:
      process.env.TESTING_BASE_FIXTURE_MERCHANT_INTERNAL_TRANSACTION_CODE!,
  } satisfies IBaseFixtures;

  Object.entries(fixtures).forEach(([key, value]) => {
    if (!value?.toString?.()?.trim?.()) {
      throw new Error(`Base fixture for ${key} is required`);
    }
  });

  return fixtures;
};

export { getBaseFixtures };
