import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { CURRENCY, COUNTRY_ISO_2, TRANSACTION_STATUS } from '@api/gql/graphql';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { cuid2 } from 'test/utils/cuid2';

getTransactionProviderList().forEach(provider => {
  describe(
    `TransactionsPaymentsPaymentMethod ${provider}`,
    { timeout: 30_000 },
    () => {
      const client = getClientInstance();
      const providerFixtures = getProviderFixtures(provider);

      describe('Syntax Validation', () => {
        it('should validate charge syntax and types', async () => {
          await expectSyntaxValidation(() =>
            client.transactions.payments.paymentMethod.charge({
              transactionProvider: provider,
              data: {
                amount: 500n,
                currency: CURRENCY.USD,
                merchantCustomerPaymentMethodId: cuid2(),
                merchantInternalCustomerCode: `cust-syntax-${cuid2()}`,
                merchantInternalTransactionCode: `txn-pm-syntax-${cuid2()}`,
                billing: {
                  billingEmail: 'john@example.com',
                  billingFirstName: 'John',
                  billingLastName: 'Doe',
                  billingAddressCountry: COUNTRY_ISO_2.US,
                },
              },
            }),
          );
        });
      });

      describe('Integration', () => {
        it('should be able to charge using a stored payment method', async () => {
          const transaction =
            await client.transactions.payments.paymentMethod.charge({
              transactionProvider: provider,
              data: {
                amount: 103n,
                currency: CURRENCY.USD,
                merchantCustomerPaymentMethodId:
                  providerFixtures.customerPaymentMethodId,
                merchantInternalCustomerCode:
                  providerFixtures.merchantInternalCustomerCode,
                merchantInternalTransactionCode: `test-txn-${faker.string.alphanumeric(15)}`,
                billing: {
                  billingEmail: faker.internet.email(),
                  billingFirstName: faker.person.firstName(),
                  billingLastName: faker.person.lastName(),
                  billingAddressCity: 'New York',
                  billingAddressState: 'NY',
                  billingAddressPostalCode: '10001',
                  billingAddressLine1: faker.location.streetAddress(),
                  billingAddressLine2: faker.location.secondaryAddress(),
                  billingAddressCountry: COUNTRY_ISO_2.US,
                },
              },
            });

          expect(transaction).toBeDefined();
          expect(transaction.id).toBeDefined();
          expect(transaction.amount).toBe(103n);
          expect(transaction.currency).toBe(CURRENCY.USD);
          expect(transaction.status).toBe(TRANSACTION_STATUS.SUCCEEDED);
        });
      });
    },
  );
});
