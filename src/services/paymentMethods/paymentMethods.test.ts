import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';

getTransactionProviderList().forEach(provider => {
  describe(`PaymentMethods ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate getMany syntax and types', async () => {
        await expectSyntaxValidation(() => client.paymentMethods.getMany({}));
        await expectSyntaxValidation(() =>
          client.paymentMethods.getMany({
            skip: 0,
            take: 10,
            merchantInternalCustomerCode: 'safe-customer-code',
          }),
        );
      });

      it('should validate getOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentMethods.getOne({
            merchantCustomerPaymentMethodId: providerFixtures.safeUnusedId,
          }),
        );
      });

      it('should validate syncOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.paymentMethods.syncOne({
            merchantInternalCustomerCode: 'safe-customer-code',
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            providerCode: 'safe-provider-code',
          }),
        );
        await expectSyntaxValidation(() =>
          client.paymentMethods.syncOne({
            merchantInternalCustomerCode: providerFixtures.safeUnusedId,
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            providerCode: 'safe-provider-code',
          }),
        );
      });
    });

    describe('Integration', () => {
      it('should be able to get many payment methods', async () => {
        const data = await client.paymentMethods.getMany({});
        expect(data).toBeDefined();
        expect(data.items.length).toBeGreaterThan(0);
      });

      it('should be able to get one payment method', async () => {
        const data = await client.paymentMethods.getOne({
          merchantCustomerPaymentMethodId:
            providerFixtures.customerPaymentMethodId,
        });
        expect(data).toBeDefined();
        expect(data.id).toBe(providerFixtures.customerPaymentMethodId);
      });

      it('should be able to sync one payment method', async () => {
        const data = await client.paymentMethods.syncOne({
          merchantInternalCustomerCode:
            providerFixtures.merchantInternalCustomerCode,
          merchantTransactionProviderId: providerFixtures.transactionProviderId,
          providerCode: providerFixtures.providerCustomerPaymentMethodCode,
        });
        expect(data).toBeDefined();
      });
    });
  });
});
