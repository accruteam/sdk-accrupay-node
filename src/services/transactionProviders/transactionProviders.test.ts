import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';

describe('TransactionProviders', () => {
  const client = getClientInstance();
  const baseFixtures = getBaseFixtures();

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
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
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
      const id = baseFixtures.transactionProviderId;
      const data = await client.transactionProviders.getOne({
        merchantTransactionProviderId: id,
      });
      expect(data).toBeDefined();
      expect(data.id).toBe(id);
    });
  });
});
