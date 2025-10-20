import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { getProviderFixtureEntries } from 'test/utils/getProviderFixtures';

describe('PaymentMethods', () => {
  const client = getClientInstance();
  const baseFixtures = getBaseFixtures();

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
          merchantCustomerPaymentMethodId: baseFixtures.safeUnusedId,
        }),
      );
    });

    it('should validate syncOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.paymentMethods.syncOne({
          merchantInternalCustomerCode: 'safe-customer-code',
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          providerCode: 'safe-provider-code',
        }),
      );
      await expectSyntaxValidation(() =>
        client.paymentMethods.syncOne({
          merchantInternalCustomerCode: baseFixtures.safeUnusedId,
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
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
      const id = baseFixtures.customerPaymentMethodId;
      const data = await client.paymentMethods.getOne({
        merchantCustomerPaymentMethodId: id,
      });
      expect(data).toBeDefined();
      expect(data.id).toBe(id);
    });

    getProviderFixtureEntries().forEach(([provider, fixture]) => {
      it(`should be able to sync one payment method ${provider}`, async () => {
        const data = await client.paymentMethods.syncOne({
          merchantInternalCustomerCode: fixture.merchantInternalCustomerCode,
          merchantTransactionProviderId: fixture.transactionProviderId,
          providerCode: fixture.providerCustomerPaymentMethodCode,
        });
        expect(data).toBeDefined();
      });
    });
  });
});
