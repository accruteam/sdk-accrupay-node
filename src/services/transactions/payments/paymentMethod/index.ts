import { AccruPayContext } from '@/types/context.types';
import {
  TRANSACTION_PROVIDER,
  MerchantApiServerPaymentMethodTransactionCreateSchema,
} from '@api/gql/graphql';
import { MERCHANT_TRANSACTIONS_SERVER_PAYMENT_METHOD_CHARGE_MUTATION } from './queries';

export type PaymentMethodChargeVariables = {
  merchantTransactionProviderId?: string;
  transactionProvider?: TRANSACTION_PROVIDER;
  data: MerchantApiServerPaymentMethodTransactionCreateSchema;
};

class TransactionsPaymentsPaymentMethod {
  constructor(private context: AccruPayContext) {}

  public async charge(variables: PaymentMethodChargeVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_SERVER_PAYMENT_METHOD_CHARGE_MUTATION,
      variables,
    });

    return data!.merchantApiServerPaymentMethodTransactionCreate;
  }
}

export { TransactionsPaymentsPaymentMethod };
