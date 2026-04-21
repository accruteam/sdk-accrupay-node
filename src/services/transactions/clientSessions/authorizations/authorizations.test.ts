import { describe, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { COUNTRY_ISO_2, CURRENCY } from '@api/gql/graphql';

getTransactionProviderList().forEach(provider => {
  describe(`TransactionClientSession.Authorizations ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate start syntax and types', async () => {
        const minimalData = {
          amount: BigInt(1000),
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
          storePaymentMethod: false,
        };

        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.authorizations.start({
            merchantTransactionProviderId: providerFixtures.safeUnusedId,
            transactionProvider: provider,
            data: minimalData,
          }),
        );
      });

      it('should validate verify syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.authorizations.verify({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.authorizations.verify({
            token: 'safe-token',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.authorizations.verify({
            providerCode: 'safe-provider-code',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.clientSessions.authorizations.verify({
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
      });
    });
  });
});
