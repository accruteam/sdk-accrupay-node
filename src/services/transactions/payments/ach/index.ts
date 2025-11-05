import { AccruPayContext } from '@/types/context.types';
import {
  TRANSACTION_PROVIDER,
  MerchantApiServerAchPaymentTransactionCreateSchema,
} from '@api/gql/graphql';
import { MERCHANT_TRANSACTIONS_SERVER_ACH_INITIATE_MUTATION } from './queries';

export type AchInitiateVariables = {
  merchantTransactionProviderId?: string;
  transactionProvider?: TRANSACTION_PROVIDER;
  data: MerchantApiServerAchPaymentTransactionCreateSchema;
};

class TransactionsPaymentsAch {
  constructor(private context: AccruPayContext) {}

  public async initiate(variables: AchInitiateVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_SERVER_ACH_INITIATE_MUTATION,
      variables,
    });

    return data!.merchantApiServerAchPaymentTransactionCreate;
  }
}

export { TransactionsPaymentsAch };
