import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';

getTransactionProviderList().forEach(provider => {
  describe(`TransactionProviders ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate getMany syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactionProviders.getMany({}),
        );
        await expectSyntaxValidation(() =>
          client.transactionProviders.getMany({
            skip: 0,
            take: 10,
          }),
        );
      });

      it('should validate getOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactionProviders.getOne({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
          }),
        );
      });
    });

    describe('Integration', () => {
      it('should be able to get many transaction providers', async () => {
        const data = await client.transactionProviders.getMany({});
        expect(data).toBeDefined();
        expect(data.items.length).toBeGreaterThan(0);
      });

      it('should be able to get one transaction provider', async () => {
        const data = await client.transactionProviders.getOne({
          merchantTransactionProviderId: providerFixtures.transactionProviderId,
        });
        expect(data).toBeDefined();
        expect(data.id).toBe(providerFixtures.transactionProviderId);
      });
    });
  });
});
