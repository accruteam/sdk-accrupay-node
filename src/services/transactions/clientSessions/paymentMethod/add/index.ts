import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiClientTransactionAddPaymentMethodSessionStartMutationVariables,
  MerchantApiClientTransactionAddPaymentMethodSessionVerifyMutationVariables,
} from '@api/gql/graphql';
import {
  MERCHANT_CLIENT_TRANSACTION_ADD_PAYMENT_METHOD_SESSION_START_MUTATION,
  MERCHANT_CLIENT_TRANSACTION_ADD_PAYMENT_METHOD_SESSION_VERIFY_MUTATION,
} from './queries';

class TransactionClientSessionsPaymentMethodAdd {
  constructor(private context: AccruPayContext) {}

  public async start(
    variables: MerchantApiClientTransactionAddPaymentMethodSessionStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        MERCHANT_CLIENT_TRANSACTION_ADD_PAYMENT_METHOD_SESSION_START_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionAddPaymentMethodSessionStart;
  }

  public async verify(
    variables: MerchantApiClientTransactionAddPaymentMethodSessionVerifyMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        MERCHANT_CLIENT_TRANSACTION_ADD_PAYMENT_METHOD_SESSION_VERIFY_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionAddPaymentMethodSessionVerify;
  }
}

export { TransactionClientSessionsPaymentMethodAdd };
