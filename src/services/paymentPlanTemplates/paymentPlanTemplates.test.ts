import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import {
  CURRENCY,
  PAYMENT_PLAN_TEMPLATE_STATUS,
  MerchantPaymentPlanTemplateCreateSchema,
  MerchantPaymentPlanTemplateUpdateSchema,
} from '@api/gql/graphql';

describe('PaymentPlanTemplates', () => {
  const client = getClientInstance();
  const baseFixtures = getBaseFixtures();

  describe('Syntax Validation', () => {
    it('should validate getMany syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlanTemplates.getMany({}),
      );
      await expectSyntaxValidation(() =>
        client.paymentPlanTemplates.getMany({
          skip: 0,
          take: 10,
        }),
      );
    });

    it('should validate getOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlanTemplates.getOne({
          merchantPaymentPlanTemplateId: baseFixtures.safeUnusedId,
        }),
      );
    });

    it('should validate createOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlanTemplates.createOne({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          data: {
            amount: 100n,
            currency: CURRENCY.USD,
            endsAfterDays: 10,
            endsAfterMonths: 1,
            endsAfterYears: 1,
            initialAmount: 100n,
            name: 'Test Template',
            providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS.ENABLED,
            renewalIntervalDays: 10,
            renewalIntervalMonths: 1,
            renewalIntervalYears: 1,
            trialPeriodDays: 10,
            trialPeriodMonths: 1,
            trialPeriodYears: 1,
          } as MerchantPaymentPlanTemplateCreateSchema,
        }),
      );
    });

    it('should validate updateOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentPlanTemplates.updateOne({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          merchantPaymentPlanTemplateId: baseFixtures.safeUnusedId,
          data: {
            amount: 200n,
            currency: CURRENCY.USD,
            description: 'updated-description',
          } as MerchantPaymentPlanTemplateUpdateSchema,
        }),
      );
    });
  });

  describe('Integration', () => {
    it('should be able to get many payment plan templates', async () => {
      const data = await client.paymentPlanTemplates.getMany({});
      expect(data).toBeDefined();
      expect(data.items.length).toBeGreaterThan(0);
    });

    it('should be able to get one payment plan template', async () => {
      const id = baseFixtures.paymentPlanTemplateId;
      const data = await client.paymentPlanTemplates.getOne({
        merchantPaymentPlanTemplateId: id,
      });
      expect(data).toBeDefined();
      expect(data.id).toBe(id);
    });
  });
});
