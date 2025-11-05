import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { CURRENCY, MerchantPaymentPlanCreateSchema } from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`PaymentPlan ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate getMany syntax and types', async () => {
        await expectSyntaxValidation(() => client.paymentPlans.getMany({}));
        await expectSyntaxValidation(() =>
          client.paymentPlans.getMany({
            skip: 0,
            take: 10,
            merchantInternalCustomerCode: 'safe-customer-code',
          }),
        );
      });

      it('should validate getOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentPlans.getOne({
            merchantPaymentPlanId: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.paymentPlans.getOne({
            merchantPaymentPlanId: providerFixtures.safeUnusedId,
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
              merchantInternalCustomerCode: 'safe-test',
              merchantInternalPaymentPlanCode: 'safe-test',
              merchantInternalPaymentPlanDescription: 'safe-test',
              paymentMethodId: providerFixtures.safeUnusedId,
              renewalIntervalDays: 10,
              renewalIntervalMonths: 1,
              renewalIntervalYears: 1,
              templateId: providerFixtures.safeUnusedId,
              trialPeriodDays: 10,
              trialPeriodMonths: 1,
              trialPeriodYears: 1,
            } as MerchantPaymentPlanCreateSchema,
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
          }),
        );
      });

      it('should validate cancelOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentPlans.cancelOne({
            merchantPaymentPlanId: providerFixtures.safeUnusedId,
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.paymentPlans.cancelOne({
            merchantPaymentPlanId: providerFixtures.safeUnusedId,
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
          }),
        );
      });

      it('should validate syncOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentPlans.syncOne({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            providerCode: 'safe-provider-code',
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
          merchantPaymentPlanId: providerFixtures.paymentPlanId,
        });
        expect(data).toBeDefined();
        expect(data.id).toBe(providerFixtures.paymentPlanId);
      });

      it('should be able to sync one payment plan', async () => {
        const data = await client.paymentPlans.syncOne({
          merchantTransactionProviderId: providerFixtures.transactionProviderId,
          providerCode: providerFixtures.providerPaymentPlanCode,
        });
        expect(data).toBeDefined();
      });
    });
  });
});
