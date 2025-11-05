import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { CURRENCY } from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`Transactions ${provider}`, { timeout: 30_000 }, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate getMany syntax and types', async () => {
        await expectSyntaxValidation(() => client.transactions.getMany({}));
        await expectSyntaxValidation(() =>
          client.transactions.getMany({
            skip: 0,
            take: 10,
            currency: CURRENCY.USD,
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
      });

      it('should validate getOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.getOne({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.getOne({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.getOne({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.getOne({
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.syncOne({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            providerCode: 'safe-provider-code',
          }),
        );
      });

      it('should validate voidOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.voidOne({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.voidOne({
            id: providerFixtures.safeUnusedId,
          }),
        );
      });

      it('should validate refundOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.refundOne({
            id: providerFixtures.safeUnusedId,
            amount: 100n,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.refundOne({
            id: providerFixtures.safeUnusedId,
            amount: 50n,
          }),
        );
      });

      it('should validate syncOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.syncOne({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            providerCode: 'safe-provider-code',
          }),
        );
      });
    });

    describe('Integration', () => {
      it('should be able to get many transactions', async () => {
        const data = await client.transactions.getMany({});
        expect(data).toBeDefined();
        expect(data.items.length).toBeGreaterThan(0);
      });

      it('should be able to get one transaction', async () => {
        const data = await client.transactions.getOne({
          id: providerFixtures.transactionId,
        });
        expect(data).toBeDefined();
        expect(data.id).toBe(providerFixtures.transactionId);
      });

      it('should be able to sync one transaction', async () => {
        const data = await client.transactions.syncOne({
          merchantTransactionProviderId: providerFixtures.transactionProviderId,
          providerCode: providerFixtures.providerTransactionCode,
        });
        expect(data).toBeDefined();
      });
    });
  });
});
