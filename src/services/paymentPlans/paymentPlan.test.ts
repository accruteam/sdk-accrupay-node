import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { CURRENCY, MerchantPaymentPlanCreateSchema } from '@api/gql/graphql';

describe('PaymentPlan', () => {
  const client = getClientInstance();
  const baseFixtures = getBaseFixtures();

  describe('Syntax Validation', () => {
    it('should validate getMany syntax and types', async () => {
      await expectSyntaxValidation(() => client.paymentPlans.getMany({}));
      await expectSyntaxValidation(() =>
        client.paymentPlans.getMany({
          skip: 0,
          take: 10,
          merchantInternalCustomerCode: 'invalid-customer-code',
        }),
      );
    });

    it('should validate getOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlans.getOne({
          merchantPaymentPlanId: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.paymentPlans.getOne({
          merchantPaymentPlanId: baseFixtures.safeUnusedId,
        }),
      );
    });

    it('should validate createOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlans.createOne({
          data: {
            amount: 100n,
            currency: CURRENCY.USD,
            endsAfterDays: 10,
            endsAfterMonths: 1,
            endsAfterYears: 1,
            initialAmount: 100n,
            merchantInternalCustomerCode: 'invalid-test',
            merchantInternalPaymentPlanCode: 'invalid-test',
            merchantInternalPaymentPlanDescription: 'invalid-test',
            paymentMethodId: baseFixtures.safeUnusedId,
            renewalIntervalDays: 10,
            renewalIntervalMonths: 1,
            renewalIntervalYears: 1,
            templateId: baseFixtures.safeUnusedId,
            trialPeriodDays: 10,
            trialPeriodMonths: 1,
            trialPeriodYears: 1,
          } as MerchantPaymentPlanCreateSchema,
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
        }),
      );
    });

    it('should validate cancelOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlans.cancelOne({
          merchantPaymentPlanId: baseFixtures.safeUnusedId,
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.paymentPlans.cancelOne({
          merchantPaymentPlanId: baseFixtures.safeUnusedId,
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
        }),
      );
    });

    it('should validate syncOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlans.syncOne({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          providerCode: baseFixtures.paymentPlanCode,
        }),
      );
    });
  });

  describe('Integration', () => {
    it('should be able to get many payment plans', async () => {
      const data = await client.paymentPlans.getMany({});
      expect(data).toBeDefined();
      expect(data.items.length).toBeGreaterThan(0);
    });

    it('should be able to get one payment plan', async () => {
      const data = await client.paymentPlans.getOne({
        merchantPaymentPlanId: baseFixtures.paymentPlanId,
      });
      expect(data).toBeDefined();
      expect(data.id).toBe(baseFixtures.paymentPlanId);
    });

    it('should be able to sync one payment plan', async () => {
      const data = await client.paymentPlans.syncOne({
        merchantTransactionProviderId: baseFixtures.transactionProviderId,
        providerCode: baseFixtures.paymentPlanCode,
      });
      expect(data).toBeDefined();
    });
  });
});
