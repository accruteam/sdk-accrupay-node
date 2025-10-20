import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getBaseFixtures } from 'test/utils/getBaseFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import {
  TRANSACTION_PROVIDER,
  CLIENT_TRANSACTION_SESSION_STATUS,
  SORT_ORDER,
  CURRENCY,
  COUNTRY_ISO_2,
  TRANSACTION_ACTION,
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
      const minimalData = {
        amount: BigInt(1000),
        currency: CURRENCY.USD,
        merchantInternalCustomerCode: `playwright-cust-${faker.string.alphanumeric(10)}`,
        merchantInternalTransactionCode: `playwright-txn-${faker.string.alphanumeric(15)}`,
        billing: {
          billingFirstName: 'John',
          billingLastName: 'Doe',
          billingEmail: 'john.doe@example.com',
          billingAddressCountry: COUNTRY_ISO_2.US,
          billingAddressLine1: '123 Main St',
          billingAddressCity: 'New York',
          billingAddressState: 'NY',
          billingAddressPostalCode: '10001',
        },
        storePaymentMethod: false,
      };

      await expectSyntaxValidation(() =>
        client.transactions.sessions.start({
          merchantTransactionProviderId: baseFixtures.safeUnusedId,
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
          data: minimalData,
        }),
      );

      await expectSyntaxValidation(() =>
        client.transactions.sessions.start({
          transactionProvider: TRANSACTION_PROVIDER.NUVEI,
          data: minimalData,
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
          merchantInternalTransactionCode: faker.string.alphanumeric(15),
        }),
      );

      await expectSyntaxValidation(() =>
        client.transactions.sessions.getMany({
          id: baseFixtures.safeUnusedId,
          providerCode: 'TEST_CUST_123',
          token: faker.string.alphanumeric(20),
          action: TRANSACTION_ACTION.PAYMENT,
          amount: BigInt(1000),
          currency: CURRENCY.USD,
          providerStatus: CLIENT_TRANSACTION_SESSION_STATUS.ACTIVE,
          paymentMethodId: baseFixtures.safeUnusedId,
          paymentPlanId: baseFixtures.safeUnusedId,
          transactionProviderId: baseFixtures.safeUnusedId,
          merchantInternalCustomerCode: `playwright-cust-${faker.string.alphanumeric(10)}`,
          merchantInternalTransactionCode: `playwright-txn-${faker.string.alphanumeric(15)}`,
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

    it('should be able to start a payment session', async () => {
      const minimalData = {
        amount: BigInt(faker.number.int({ min: 100, max: 10000 })),
        currency: CURRENCY.USD,
        merchantInternalCustomerCode: `playwright-cust-${faker.string.alphanumeric(10)}`,
        merchantInternalTransactionCode: `playwright-txn-${faker.string.alphanumeric(15)}`,
        billing: {
          billingFirstName: faker.person.firstName(),
          billingLastName: faker.person.lastName(),
          billingEmail: faker.internet.email(),
          billingAddressCountry: COUNTRY_ISO_2.US,
          billingAddressLine1: faker.location.streetAddress(),
          billingAddressCity: 'New York',
          billingAddressState: 'NY',
          billingAddressPostalCode: '10001',
        },
        storePaymentMethod: false,
      };

      const session = await client.transactions.sessions.start({
        transactionProvider: TRANSACTION_PROVIDER.NUVEI,
        data: minimalData,
      });

      expect(session).toBeDefined();
      expect(session.id).toBeDefined();
      expect(session.amount).toBe(minimalData.amount);
      expect(session.currency).toBe(minimalData.currency);
      expect(session.merchantInternalCustomerCode).toBe(
        minimalData.merchantInternalCustomerCode,
      );
      expect(session.merchantInternalTransactionCode).toBe(
        minimalData.merchantInternalTransactionCode,
      );
      expect(session.billingFirstName).toBe(
        minimalData.billing.billingFirstName,
      );
      expect(session.billingLastName).toBe(minimalData.billing.billingLastName);
      expect(session.billingEmail).toBe(minimalData.billing.billingEmail);
      expect(session.billingAddressCountry).toBe(
        minimalData.billing.billingAddressCountry,
      );
      expect(session.storePaymentMethod).toBe(minimalData.storePaymentMethod);
      expect(session.status).toBeDefined();
      expect(session.providerCode).toBeDefined();
      expect(session.token).toBeDefined();
    });

    it('should be able to start a payment session with minimal data', async () => {
      const minimalData = {
        amount: BigInt(faker.number.int({ min: 100, max: 10000 })),
        currency: CURRENCY.USD,
        merchantInternalCustomerCode: `playwright-cust-${faker.string.alphanumeric(10)}`,
        merchantInternalTransactionCode: `playwright-txn-${faker.string.alphanumeric(15)}`,
        billing: {
          billingFirstName: 'John',
          billingLastName: 'Doe',
          billingEmail: 'john.doe@example.com',
          billingAddressCountry: COUNTRY_ISO_2.US,
          billingAddressLine1: '123 Main St',
          billingAddressCity: 'New York',
          billingAddressState: 'NY',
          billingAddressPostalCode: '10001',
        },
        storePaymentMethod: false,
      };

      const session = await client.transactions.sessions.start({
        transactionProvider: TRANSACTION_PROVIDER.NUVEI,
        data: minimalData,
      });

      expect(session).toBeDefined();
      expect(session.id).toBeDefined();
      expect(session.amount).toBe(minimalData.amount);
      expect(session.currency).toBe(minimalData.currency);
      expect(session.merchantInternalCustomerCode).toBe(
        minimalData.merchantInternalCustomerCode,
      );
      expect(session.merchantInternalTransactionCode).toBe(
        minimalData.merchantInternalTransactionCode,
      );
    });

    it('should be able to get many sessions', async () => {
      const data = await client.transactions.sessions.getMany({});
      expect(data).toBeDefined();
      expect(data.items.length).toBeGreaterThanOrEqual(0);
    });

    it('should be able to get many sessions with filters', async () => {
      const data = await client.transactions.sessions.getMany({
        skip: 0,
        take: 10,
        currency: CURRENCY.USD,
        merchantInternalCustomerCode: `playwright-cust-${faker.string.alphanumeric(10)}`,
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
