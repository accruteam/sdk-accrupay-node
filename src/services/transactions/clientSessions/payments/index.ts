import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiClientTransactionPaymentSessionStartMutationVariables,
  MerchantApiClientTransactionPaymentSessionVerifyV2MutationVariables,
} from '@api/gql/graphql';
import {
  MERCHANT_CLIENT_TRANSACTION_SESSION_START_MUTATION,
  MERCHANT_CLIENT_TRANSACTION_SESSION_VERIFY_MUTATION,
} from './queries';

class TransactionClientSessionsPayments {
  constructor(private context: AccruPayContext) {}

  public async start(
    variables: MerchantApiClientTransactionPaymentSessionStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_CLIENT_TRANSACTION_SESSION_START_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionPaymentSessionStartV2;
  }

  public async verify(
    variables: MerchantApiClientTransactionPaymentSessionVerifyV2MutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_CLIENT_TRANSACTION_SESSION_VERIFY_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionPaymentSessionVerify;
  }
}

export { TransactionClientSessionsPayments };
