import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { CURRENCY, COUNTRY_ISO_2 } from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`TransactionClientSession.PaymentMethod.Add ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate start syntax and types', async () => {
        const minimalData = {
          currency: CURRENCY.USD,
          merchantInternalCustomerCode: `test-cust-${faker.string.alphanumeric(10)}`,
          merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,
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
        };

        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.paymentMethod.add.start({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            transactionProvider: provider,
            data: minimalData,
          }),
        );
      });

      it('should validate verify syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.paymentMethod.add.verify({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.paymentMethod.add.verify({
            token: 'safe-token',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.paymentMethod.add.verify({
            providerCode: 'safe-provider-code',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.paymentMethod.add.verify({
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
      });
    });

    describe('Integration', () => {
      it('should be able to start an add payment method session', async () => {
        const minimalData = {
          currency: CURRENCY.USD,
          merchantInternalCustomerCode: `test-cust-${faker.string.alphanumeric(10)}`,
          merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,
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
        };

        const session =
          await client.transactions.clientSessions.paymentMethod.add.start({
            transactionProvider: provider,
            data: minimalData,
          });

        expect(session).toBeDefined();
        expect(session.id).toBeDefined();
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
        expect(session.billingLastName).toBe(
          minimalData.billing.billingLastName,
        );
        expect(session.billingEmail).toBe(minimalData.billing.billingEmail);
        expect(session.billingAddressCountry).toBe(
          minimalData.billing.billingAddressCountry,
        );
        expect(session.status).toBeDefined();
        expect(session.providerCode).toBeDefined();
        expect(session.token).toBeDefined();
      });

      it('should be able to start an add payment method session with minimal data', async () => {
        const minimalData = {
          currency: CURRENCY.USD,
          merchantInternalCustomerCode: `test-cust-${faker.string.alphanumeric(10)}`,
          merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,
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
        };

        const session =
          await client.transactions.clientSessions.paymentMethod.add.start({
            transactionProvider: provider,
            data: minimalData,
          });

        expect(session).toBeDefined();
        expect(session.id).toBeDefined();
        expect(session.currency).toBe(minimalData.currency);
        expect(session.merchantInternalCustomerCode).toBe(
          minimalData.merchantInternalCustomerCode,
        );
        expect(session.merchantInternalTransactionCode).toBe(
          minimalData.merchantInternalTransactionCode,
        );
      });

      it('should be able to verify an add payment method session', async () => {
        const minimalData = {
          currency: CURRENCY.USD,
          merchantInternalCustomerCode: `test-cust-${faker.string.alphanumeric(10)}`,
          merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,
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
        };

        const session =
          await client.transactions.clientSessions.paymentMethod.add.start({
            transactionProvider: provider,
            data: minimalData,
          });

        expect(session).toBeDefined();
        expect(session.token).toBeDefined();

        await expect(
          client.transactions.clientSessions.paymentMethod.add.verify({
            token: session.token,
          }),
        ).rejects.toThrowError(
          expect.objectContaining({
            message: expect.any(String),
            cause: expect.objectContaining({
              extensions: expect.objectContaining({
                code: expect.stringContaining('@'),
              }),
            }),
          }),
        );
      });
    });
  });
});
