import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import {
  CLIENT_TRANSACTION_SESSION_STATUS,
  SORT_ORDER,
  CURRENCY,
  TRANSACTION_ACTION,
} from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`TransactionClientSession ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate getBaseConfig syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getBaseConfig({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            transactionProvider: provider,
          }),
        );
      });

      it('should validate getOne syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getOne({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getOne({
            token: 'safe-token',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getOne({
            providerCode: 'safe-provider-code',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getOne({
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
      });

      it('should validate getMany syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getMany({}),
        );

        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getMany({
            skip: 0,
            take: 10,
            currency: CURRENCY.USD,
            merchantInternalTransactionCode: faker.string.alphanumeric(15),
          }),
        );

        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.getMany({
            id: providerFixtures.safeUnusedId,
            providerCode: 'TEST_CUST_123',
            token: faker.string.alphanumeric(20),
            action: TRANSACTION_ACTION.PAYMENT,
            amount: BigInt(1000),
            currency: CURRENCY.USD,
            providerStatus: CLIENT_TRANSACTION_SESSION_STATUS.ACTIVE,
            paymentMethodId: providerFixtures.safeUnusedId,
            paymentPlanId: providerFixtures.safeUnusedId,
            transactionProviderId: providerFixtures.safeUnusedId,
            merchantInternalCustomerCode: `test-cust-${faker.string.alphanumeric(10)}`,
            merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,
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
        const data = await client.transactions.clientSessions.getBaseConfig({
          transactionProvider: provider,
        });
        expect(data).toBeDefined();
        expect(data.provider).toBe(provider);
      });

      it('should be able to get many sessions', async () => {
        const data = await client.transactions.clientSessions.getMany({});
        expect(data).toBeDefined();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
      });

      it('should be able to get many sessions with filters', async () => {
        const data = await client.transactions.clientSessions.getMany({
          skip: 0,
          take: 10,
          currency: CURRENCY.USD,
          merchantInternalCustomerCode: `test-cust-${faker.string.alphanumeric(10)}`,
          started: true,
          completed: false,
          canceled: false,
          hasProviderError: false,
        });

        expect(data).toBeDefined();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
        expect(data.totalCount).toBeGreaterThanOrEqual(0);
      });

      it('should be able to get one session', async () => {
        const sessions = await client.transactions.clientSessions.getMany({
          skip: 0,
          take: 1,
        });

        expect(sessions.items.length).toBe(1);

        const sessionId = sessions.items[0].id;
        const data = await client.transactions.clientSessions.getOne({
          id: sessionId,
        });
        expect(data).toBeDefined();
        expect(data.id).toBe(sessionId);
      });

      it('should be able to get base config with merchant transaction provider id', async () => {
        const data = await client.transactions.clientSessions.getBaseConfig({
          merchantTransactionProviderId: providerFixtures.transactionProviderId,
          transactionProvider: provider,
        });
        expect(data).toBeDefined();
        expect(data.provider).toBe(provider);
      });
    });
  });
});
