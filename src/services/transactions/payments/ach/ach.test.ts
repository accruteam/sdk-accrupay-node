import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { CURRENCY, COUNTRY_ISO_2 } from '@api/gql/graphql';
import { cuid2 } from 'test/utils/cuid2';

getTransactionProviderList().forEach(provider => {
  describe(`TransactionsPaymentsAch ${provider}`, { timeout: 30_000 }, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate initiate syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.payments.ach.initiate({
            transactionProvider: provider,
            data: {
              amount: 1000n,
              currency: CURRENCY.USD,
              merchantInternalCustomerCode: `cust-syntax-${cuid2()}`,
              merchantInternalTransactionCode: `txn-ach-syntax-${cuid2()}`,
              billing: {
                billingEmail: 'john@example.com',
                billingFirstName: 'John',
                billingLastName: 'Doe',
                billingAddressCountry: COUNTRY_ISO_2.US,
              },
              ach: {
                accountNumber: '000123456789',
                routingNumber: '011000015',
              },
              storePaymentMethod: false,
            },
          }),
        );
      });
    });

    describe('Integration', () => {
      it('should be able to initiate an ACH transaction', async () => {
        const transaction = await client.transactions.payments.ach.initiate({
          transactionProvider: provider,
          data: {
            amount: providerFixtures.ach.success.amount,
            currency: CURRENCY.USD,
            merchantInternalCustomerCode:
              providerFixtures.merchantInternalCustomerCode,
            merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,

            user: {
              userFirstName: faker.person.firstName(),
              userLastName: faker.person.lastName(),
              userEmail: faker.internet.email(),
              userPhone: '+12063428631',
              userAddressCountry: COUNTRY_ISO_2.US,
              userAddressCity: 'New York',
              userAddressState: 'NY',
              userAddressPostalCode: '10001',
              userAddressLine1: faker.location.streetAddress(),
              userAddressLine2: faker.location.secondaryAddress(),
            },

            billing: {
              billingFirstName: faker.person.firstName(),
              billingLastName: faker.person.lastName(),
              billingEmail: faker.internet.email(),
              billingPhone: '+12063428631',
              billingAddressCity: 'New York',
              billingAddressState: 'NY',
              billingAddressPostalCode: '10001',
              billingAddressLine1: faker.location.streetAddress(),
              billingAddressLine2: faker.location.secondaryAddress(),
              billingAddressCountry: COUNTRY_ISO_2.US,
            },

            device: {
              deviceIp: faker.internet.ip(),
            },

            ach: {
              accountNumber: providerFixtures.ach.success.accountNumber,
              routingNumber: providerFixtures.ach.success.routingNumber,
            },
            storePaymentMethod: false,
          },
        });

        expect(transaction).toBeDefined();
        expect(transaction.id).toBeDefined();
        expect(transaction.amount).toBe(providerFixtures.ach.success.amount);
        expect(transaction.currency).toBe(CURRENCY.USD);
      });
    });
  });
});
