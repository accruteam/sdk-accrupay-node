import { describe, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { getProviderFixtures } from 'test/utils/getProviderFixtures';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';
import { getTransactionProviderList } from 'test/utils/getTransactionProviderList';

getTransactionProviderList().forEach(provider => {
  describe(`Transactions.Authorizations ${provider}`, () => {
    const client = getClientInstance();
    const providerFixtures = getProviderFixtures(provider);

    describe('Syntax Validation', () => {
      it('should validate settle syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.authorizations.settle({
            amount: 100n,
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.authorizations.settle({
            amount: 50n,
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.authorizations.settle({
            amount: 25n,
            providerCode: 'safe-provider-code',
          }),
        );
      });

      it('should validate voidAuthorization syntax and types', async () => {
        await expectSyntaxValidation(() =>
          client.transactions.authorizations.void({
            id: providerFixtures.safeUnusedId,
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.authorizations.void({
            merchantInternalTransactionCode: 'safe-test',
          }),
        );
        await expectSyntaxValidation(() =>
          client.transactions.authorizations.void({
            providerCode: 'safe-provider-code',
          }),
        );
      });
    });
  });
});
