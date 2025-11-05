import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import {
  CURRENCY,
  PAYMENT_PLAN_TEMPLATE_STATUS,
  MerchantPaymentPlanTemplateCreateSchema,
  MerchantPaymentPlanTemplateUpdateSchema,
} from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`PaymentPlanTemplates ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

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
            merchantPaymentPlanTemplateId: providerFixtures.safeUnusedId,
          }),
        );
      });

      it('should validate createOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentPlanTemplates.createOne({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
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
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            merchantPaymentPlanTemplateId: providerFixtures.safeUnusedId,
            data: {
              amount: 200n,
              currency: CURRENCY.USD,
              description: 'updated-description',
            } as MerchantPaymentPlanTemplateUpdateSchema,
          }),
        );
      });

      it('should validate syncOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentPlanTemplates.syncOne({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            providerCode: 'safe-provider-code',
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
        const data = await client.paymentPlanTemplates.getOne({
          merchantPaymentPlanTemplateId: providerFixtures.paymentPlanTemplateId,
        });
        expect(data).toBeDefined();
        expect(data.id).toBe(providerFixtures.paymentPlanTemplateId);
      });

      it('should be able to sync one payment plan template', async () => {
        const data = await client.paymentPlanTemplates.syncOne({
          merchantTransactionProviderId: providerFixtures.transactionProviderId,
          providerCode: providerFixtures.providerPaymentPlanTemplateCode,
        });
        expect(data).toBeDefined();
      });
    });
  });
});
