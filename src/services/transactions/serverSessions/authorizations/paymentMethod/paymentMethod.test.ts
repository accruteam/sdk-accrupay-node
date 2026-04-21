import { describe, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { COUNTRY_ISO_2, CURRENCY } from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`TransactionServerSession.Authorizations.PaymentMethod ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate start syntax and types', async () => {
        const minimalData = {
          amount: BigInt(1000),
          currency: CURRENCY.USD,
          merchantCustomerPaymentMethodId: providerFixtures.safeUnusedId,
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
          client.transactions.serverSessions.authorizations.paymentMethod.start(
            {
              merchantTransactionProviderId: providerFixtures.safeUnusedId,
              transactionProvider: provider,
              data: minimalData,
            },
          ),
        );
      });

      it('should validate verify syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.serverSessions.authorizations.paymentMethod.verify(
            {
              id: providerFixtures.safeUnusedId,
            },
          ),
        );
        await expectSyntaxValidation(() =>
          client.transactions.serverSessions.authorizations.paymentMethod.verify(
            {
              merchantInternalTransactionCode: 'safe-test',
            },
          ),
        );
        await expectSyntaxValidation(() =>
          client.transactions.serverSessions.authorizations.paymentMethod.verify(
            {
              providerCode: 'safe-provider-code',
            },
          ),
        );
      });
    });
  });
});
