import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { TRANSACTION_PROVIDER, CURRENCY } from '@api/gql/graphql';

describe('Transactions', () => {
  const client = getClientInstance();
  const baseFixtures = getBaseFixtures();

  describe('Syntax Validation', () => {
    it('should validate getMany syntax and types', async () => {
      await expectSyntaxValidation(() => client.transactions.getMany({}));
      await expectSyntaxValidation(() =>
        client.transactions.getMany({
          skip: 0,
          take: 10,
          currency: CURRENCY.USD,
          merchantInternalTransactionCode: 'invalid-test',
        }),
      );
    });

    it('should validate getOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.getOne({
          id: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.getOne({
          code: 'invalid-code',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.getOne({
          token: 'invalid-token',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.getOne({
          merchantInternalTransactionCode: 'invalid-test',
        }),
      );
    });

    it('should validate getClientPaymentPreSessionData syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.getClientPaymentPreSessionData({
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
        }),
      );
    });

    it('should validate startClientPaymentSession syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.startClientPaymentSession({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
          data: {
            amount: 100n,
            currency: CURRENCY.USD,
            merchantInternalCustomerCode: 'invalid-test',
            merchantInternalTransactionCode: 'invalid-test',
            billing: {
              billingFirstName: 'Test',
              billingLastName: 'User',
              billingEmail: 'test@example.com',
              billingAddressCountry: 'US' as any,
            },
            storePaymentMethod: false,
          },
        }),
      );
    });

    it('should validate verifyClientPaymentSession syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.verifyClientPaymentSession({
          id: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.verifyClientPaymentSession({
          code: 'invalid-code',
        }),
      );
    });

    it('should validate voidOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.voidOne({
          id: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.voidOne({
          code: 'invalid-code',
        }),
      );
    });

    it('should validate refundOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.refundOne({
          id: baseFixtures.safeUnusedId,
          amount: 100n,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.refundOne({
          code: 'invalid-code',
          amount: 50n,
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
      const id = baseFixtures.transactionId;
      const data = await client.transactions.getOne({
        id,
      });
      expect(data).toBeDefined();
      expect(data.id).toBe(id);
    });
  });
});
