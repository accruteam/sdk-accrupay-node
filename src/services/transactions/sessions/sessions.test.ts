import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import {
  TRANSACTION_PROVIDER,
  CURRENCY,
  CLIENT_TRANSACTION_SESSION_STATUS,
  TRANSACTION_ACTION,
  SORT_ORDER,
} from '@api/gql/graphql';
import { getProviderFixtureEntries } from 'test/utils/getProviderFixtures';

describe('TransactionsSessions', () => {
  const client = getClientInstance();
  const baseFixtures = getBaseFixtures();

  describe('Syntax Validation', () => {
    it('should validate getBaseConfig syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getBaseConfig({
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getBaseConfig({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
        }),
      );
    });

    it('should validate start syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.sessions.start({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
          data: {
            amount: 100n,
            currency: CURRENCY.USD,
            merchantInternalCustomerCode: 'safe-test',
            merchantInternalTransactionCode: 'safe-test',
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
      await expectSyntaxValidation(() =>
        client.transactions.sessions.start({
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
          data: {
            amount: 100n,
            currency: CURRENCY.USD,
            merchantInternalCustomerCode: 'safe-test',
            merchantInternalTransactionCode: 'safe-test',
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

    it('should validate verify syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.sessions.verify({
          id: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.verify({
          token: 'safe-token',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.verify({
          providerCode: 'safe-provider-code',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.verify({
          merchantInternalTransactionCode: 'safe-test',
        }),
      );
    });

    it('should validate getOne syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getOne({
          id: baseFixtures.safeUnusedId,
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getOne({
          token: 'safe-token',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getOne({
          providerCode: 'safe-provider-code',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getOne({
          merchantInternalTransactionCode: 'safe-test',
        }),
      );
    });

    it('should validate getMany syntax and types', async () => {
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getMany({}),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getMany({
          skip: 0,
          take: 10,
          currency: CURRENCY.USD,
          merchantInternalTransactionCode: 'safe-test',
        }),
      );
      await expectSyntaxValidation(() =>
        client.transactions.sessions.getMany({
          id: baseFixtures.safeUnusedId,
          providerCode: 'safe-provider-code',
          token: 'safe-token',
          action: TRANSACTION_ACTION.PAYMENT,
          amount: 100n,
          currency: CURRENCY.USD,
          providerStatus: CLIENT_TRANSACTION_SESSION_STATUS.ACTIVE,
          paymentMethodId: baseFixtures.safeUnusedId,
          paymentPlanId: baseFixtures.safeUnusedId,
          transactionProviderId: baseFixtures.safeUnusedId,
          merchantInternalCustomerCode: 'safe-customer',
          merchantInternalTransactionCode: 'safe-transaction',
          started: true,
          completed: false,
          canceled: false,
          hasProviderError: false,
          sorting: [{ field: 'createdAt', order: SORT_ORDER.DESC }],
        }),
      );
    });
  });

  describe('Integration', () => {
    it('should be able to get base config', async () => {
      const data = await client.transactions.sessions.getBaseConfig({
        transactionProvider: TRANSACTION_PROVIDER.NUVEI,
      });
      expect(data).toBeDefined();
      expect(data.provider).toBe(TRANSACTION_PROVIDER.NUVEI);
    });

    it('should be able to get many sessions', async () => {
      const data = await client.transactions.sessions.getMany({});
      expect(data).toBeDefined();
      expect(data.items.length).toBeGreaterThanOrEqual(0);
    });

    it.only('should be able to get one session', async () => {
      const sessions = await client.transactions.sessions.getMany({
        skip: 0,
        take: 1,
      });

      expect(sessions.items.length).toBe(1);

      const sessionId = sessions.items[0].id;
      const data = await client.transactions.sessions.getOne({
        id: sessionId,
      });
      expect(data).toBeDefined();
      expect(data.id).toBe(sessionId);
    });

    getProviderFixtureEntries().forEach(([provider, fixture]) => {
      it(`should be able to get base config for ${provider}`, async () => {
        const data = await client.transactions.sessions.getBaseConfig({
          merchantTransactionProviderId: fixture.transactionProviderId,
          transactionProvider: provider as any,
        });
        expect(data).toBeDefined();
        expect(data.provider).toBe(provider);
      });
    });
  });
});
